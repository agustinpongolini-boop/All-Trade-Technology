import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import { getAllArticles, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Guías y recursos de comercio exterior",
  description:
    "Artículos, guías y recursos sobre importación, exportación y comercio exterior en Argentina. Contenido actualizado por expertos de All Trade Technology.",
  openGraph: {
    title: "Blog | All Trade Technology",
    description:
      "Guías y recursos de comercio exterior para importar y exportar desde Argentina.",
    url: "https://www.alltradetechnology.com/blog",
    type: "website",
  },
};

const SITE_URL = "https://www.alltradetechnology.com";

export default function BlogPage() {
  const allArticles = getAllArticles();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog All Trade Technology",
    description:
      "Artículos y guías sobre comercio exterior, importación y exportación desde Argentina.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "All Trade Technology",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              href="/"
              className="font-heading text-[11px] font-medium uppercase tracking-[0.15em] text-body/70 hover:text-white px-4 py-2 rounded-md hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
            >
              <ArrowLeft size={14} />
              Inicio
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
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.25em] text-accent mb-4">
              Blog
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Guías y recursos de{" "}
              <span className="text-accent">comercio exterior</span>
            </h1>
            <p className="mt-6 font-body text-lg text-body/70 max-w-2xl leading-relaxed">
              Artículos prácticos sobre importación, exportación y logística
              internacional. Escritos por nuestro equipo de especialistas en
              comercio exterior.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto pb-4 -mb-px scrollbar-hide">
              {BLOG_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className={`font-heading text-[11px] font-medium uppercase tracking-[0.15em] px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                    cat === "Todas"
                      ? "bg-accent text-white"
                      : "bg-card text-body/50 hover:text-white hover:bg-card/80"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allArticles.map((article) => (
                <article
                  key={article.slug}
                  className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 ${
                    !article.published ? "opacity-60" : ""
                  }`}
                >
                  {/* Category badge */}
                  <div className="p-6 pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      {!article.published && (
                        <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-body/30 bg-white/5 px-3 py-1 rounded-full">
                          Próximamente
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <h2 className="font-heading text-lg font-semibold text-white leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                      {article.published ? (
                        <Link
                          href={`/blog/${article.slug}`}
                          className="after:absolute after:inset-0"
                        >
                          {article.title}
                        </Link>
                      ) : (
                        article.title
                      )}
                    </h2>
                    <p className="font-body text-sm text-body/50 leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 font-heading text-[11px] text-body/40">
                          <Calendar size={12} />
                          {new Date(article.date).toLocaleDateString("es-AR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5 font-heading text-[11px] text-body/40">
                          <Clock size={12} />
                          {article.readingTime} min
                        </span>
                      </div>
                      {article.published && (
                        <ArrowRight
                          size={16}
                          className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 border-t border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitás ayuda con tu operación?
            </h2>
            <p className="font-body text-body/60 mb-8 leading-relaxed">
              Nuestro equipo de especialistas puede asesorarte en cualquier
              aspecto de comercio exterior. Cotización sin compromiso en menos
              de 24hs.
            </p>
            <Link
              href="/#cotizar"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-heading text-sm font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Solicitar cotización
              <ArrowRight size={16} />
            </Link>
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
