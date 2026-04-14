import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />

        {/* Glow divider */}
        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-border" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent blur-[1px]" />
        </div>

        <Process />
        <About />
        <CaseStudies />
        <QuoteForm />
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </>
  );
}
