import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { getArticleBySlug, getAllArticles } from "@/lib/blog-data";
import BlogArticleClient from "@/components/BlogArticleClient";

const SITE_URL = "https://www.alltradetechnology.com";

export async function generateStaticParams() {
  return getAllArticles()
    .filter((a) => a.published)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article || !article.published) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: [
      "importar desde china",
      "comercio exterior argentina",
      "importaciones",
      article.category.toLowerCase(),
    ],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["All Trade Technology"],
      siteName: "All Trade Technology",
      locale: "es_AR",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

function parseHeadings(content: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const text = match[2];
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ id, text, level: match[1].length });
    }
  }
  return headings;
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headings
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      const text = headingMatch[2];
      const level = headingMatch[1].length;
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      if (level === 2) {
        elements.push(
          <h2
            key={`h2-${i}`}
            id={id}
            className="font-heading text-2xl md:text-3xl font-bold text-white mt-12 mb-6 scroll-mt-24"
          >
            {text}
          </h2>
        );
      } else {
        elements.push(
          <h3
            key={`h3-${i}`}
            id={id}
            className="font-heading text-xl md:text-2xl font-semibold text-white mt-10 mb-4 scroll-mt-24"
          >
            {text}
          </h3>
        );
      }
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|") && i + 1 < lines.length && lines[i + 1]?.match(/^\|[\s-|]+$/)) {
      const tableRows: string[][] = [];
      const headerCells = line
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      tableRows.push(headerCells);
      i += 2; // skip header and separator
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i]
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim());
        tableRows.push(cells);
        i++;
      }
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {tableRows[0].map((cell, ci) => (
                  <th
                    key={ci}
                    className="text-left font-heading text-sm font-semibold text-white py-3 px-4 border-b-2 border-accent/30 bg-card"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-border hover:bg-white/[0.02]"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="font-body text-[15px] text-body/70 py-3 px-4"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.match(/^- \*\*|^- /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^- /)) {
        listItems.push(lines[i].replace(/^- /, ""));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          className="my-4 space-y-2 ml-1"
        >
          {listItems.map((item, li) => (
            <li
              key={li}
              className="flex gap-3 font-body text-[18px] text-body/70 leading-relaxed"
            >
              <span className="text-accent mt-1.5 shrink-0">•</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(
                      /\*\*(.+?)\*\*/g,
                      '<strong class="text-white font-semibold">$1</strong>'
                    ),
                }}
              />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\.\s/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={`ol-${i}`}
          className="my-4 space-y-2 ml-1 list-none"
        >
          {listItems.map((item, li) => (
            <li
              key={li}
              className="flex gap-3 font-body text-[18px] text-body/70 leading-relaxed"
            >
              <span className="text-accent font-heading font-semibold shrink-0">
                {li + 1}.
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(
                      /\*\*(.+?)\*\*/g,
                      '<strong class="text-white font-semibold">$1</strong>'
                    ),
                }}
              />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="font-body text-[18px] text-body/70 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{
          __html: line
            .replace(
              /\*\*(.+?)\*\*/g,
              '<strong class="text-white font-semibold">$1</strong>'
            ),
        }}
      />
    );
    i++;
  }

  return elements;
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article || !article.published) notFound();

  const headings = parseHeadings(article.content);
  const contentElements = renderMarkdown(article.content);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/blog/${article.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "All Trade Technology",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "All Trade Technology",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    image: `${SITE_URL}/og-image.png`,
    wordCount: article.content.split(/\s+/).length,
  };

  const faqJsonLd =
    article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <BlogArticleClient />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[72px]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-accent rounded-md flex items-center justify-center">
              <span className="font-heading font-extrabold text-sm text-white leading-none">
                AT
              </span>
            </div>
            <span className="font-heading font-semibold text-xs tracking-[0.2em] uppercase text-white hidden sm:block">
              All Trade Technology
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/blog"
              className="font-heading text-[11px] font-medium uppercase tracking-[0.15em] text-body/70 hover:text-white px-4 py-2 rounded-md hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
            >
              <ArrowLeft size={14} />
              Blog
            </Link>
            <Link
              href="/#cotizar"
              className="bg-accent hover:bg-accent-light text-white font-heading text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-2.5 rounded-lg transition-colors duration-200"
            >
              Cotizar
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen pt-[72px]">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <nav className="flex items-center gap-2 font-heading text-[11px] text-body/40 tracking-wider">
            <Link href="/" className="hover:text-accent transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-body/60 truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-10">
          <div className="max-w-4xl">
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-6 mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-body/50">
              <span className="flex items-center gap-1.5 font-heading text-sm">
                <Calendar size={14} />
                {new Date(article.date).toLocaleDateString("es-AR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 font-heading text-sm">
                <Clock size={14} />
                {article.readingTime} min de lectura
              </span>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-border" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent blur-[1px]" />
        </div>

        {/* Content + Sidebar */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex gap-12 lg:gap-16">
            {/* Article Content */}
            <article className="flex-1 min-w-0 max-w-4xl">
              {contentElements}

              {/* FAQ Section */}
              {article.faqs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-border">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
                    Preguntas frecuentes
                  </h2>
                  <div className="space-y-6">
                    {article.faqs.map((faq, fi) => (
                      <div
                        key={fi}
                        className="bg-card border border-border rounded-xl p-6"
                      >
                        <h3 className="font-heading text-lg font-semibold text-white mb-3">
                          {faq.question}
                        </h3>
                        <p className="font-body text-[16px] text-body/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Box */}
              <div className="mt-16 bg-gradient-to-br from-accent/10 via-card to-card border border-accent/20 rounded-2xl p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  ¿Listo para importar?
                </h3>
                <p className="font-body text-body/60 leading-relaxed mb-6">
                  Solicitá tu cotización sin compromiso. Nuestro equipo de
                  especialistas te envía un análisis completo de costos y
                  tiempos en menos de 24 horas.
                </p>
                <Link
                  href="/#cotizar"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-heading text-sm font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Solicitar cotización
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Sidebar TOC */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-[96px]">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-body/40 mb-4">
                    En este artículo
                  </p>
                  <nav className="space-y-1 border-l border-border">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className={`block font-heading text-[12px] leading-snug text-body/40 hover:text-accent transition-colors duration-200 ${
                          h.level === 2 ? "pl-4 py-1.5" : "pl-8 py-1"
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>

                  {/* Mini CTA */}
                  <div className="mt-8 p-4 bg-card border border-border rounded-xl">
                    <p className="font-heading text-sm font-semibold text-white mb-2">
                      ¿Necesitás asesoramiento?
                    </p>
                    <p className="font-body text-[12px] text-body/50 mb-3 leading-relaxed">
                      Cotización sin compromiso en 24hs.
                    </p>
                    <Link
                      href="/#cotizar"
                      className="block text-center bg-accent hover:bg-accent-light text-white font-heading text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      Cotizar
                    </Link>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-darker border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-heading text-[11px] text-[#444] tracking-wider">
            &copy; 2026 All Trade Technology. Todos los derechos reservados.
          </p>
          <Link
            href="/"
            className="font-heading text-[11px] text-[#444] hover:text-accent tracking-wider transition-colors"
          >
            alltradetechnology.com
          </Link>
        </div>
      </footer>
    </>
  );
}
