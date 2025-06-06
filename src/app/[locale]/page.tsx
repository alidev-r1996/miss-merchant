
import Header from "@/components/header";
import Herosection from "@/components/herosection";
import Services from "@/components/services";
import FAQSection from "@/components/faqsection";
import ConsultantSection from "@/components/consultantSection";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PortSection from "@/components/PortsSection";

export default function Home() {
  return (
    <div className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300 min-h-screen max-w-screen snap-y snap-mandatory scroll-smooth">
      <main className="w-full">
        <Header />
        <Herosection />
        <Services />
        <PortSection />
        <FAQSection />
        <ConsultantSection />
        <Contact />
        <div className="w-full h-max snap-y snap-start snap-mandatory  p-4"></div>
        <Footer />
      </main>
    </div>
  );
}
