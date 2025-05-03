import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";

const RiskAssessment = () => {
  const appUrl =
    "https://prediab-to-t2dm-prog-proj-8jcxbqevstp7qhvtqpfhgx.streamlit.app/";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">
            PrediX Risk Assessment Tool
          </h1>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Use our interactive tool to assess your personal risk of progressing
            from prediabetes to type 2 diabetes. Powered by the latest medical
            insights.
          </p>
          <Button
            onClick={() => window.open(appUrl, "_blank")}
            className="text-white bg-medical-blue hover:bg-blue-600 text-lg px-6 py-3 rounded-lg transition-all duration-300"
          >
            Launch 
          </Button>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RiskAssessment;


