
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import EducationalTabs from "@/components/EducationalTabs";
import HowItWorks from "@/components/HowItWorks";
import ScientificApproach from "@/components/ScientificApproach";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <EducationalTabs />
        <HowItWorks />
        <ScientificApproach />
        <CallToAction />
        <Faq />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
