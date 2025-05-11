import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the risk prediction tool?",
    answer: "Our machine learning model has been validated with an accuracy of 91% and an AUC-ROC of 0.94. The tool is continuously updated and validated against new clinical data to ensure ongoing accuracy. However, it's important to note that the tool provides predictions based on statistical analysis, and individual outcomes may vary based on factors not captured by the model."
  },
  {
    question: "What health metrics do I need to use the tool?",
    answer: "To get the most accurate prediction, you'll need recent values for: age, BMI (or height and weight), blood pressure, HbA1c levels, fasting glucose, lipid profile (HDL, LDL, triglycerides), family history of diabetes, physical activity levels, and smoking status. If you're missing some values, the tool can still provide an assessment, but with potentially reduced accuracy."
  },
  {
    question: "How is my data used and is it kept private?",
    answer: "We take data privacy very seriously. All health data you input is encrypted and processed securely. Your data is not stored on our servers after your session unless you explicitly create an account and opt to save your results. We never share your personal health information with third parties. For detailed information, please review our Privacy Policy."
  },
  {
    question: "What are SHAP values and how do they help me understand my risk?",
    answer: "SHAP (SHapley Additive exPlanations) values are a method from game theory that explains how each factor contributes to your overall risk prediction. In your report, SHAP values show which factors are pushing your risk up or down, and by how much. This transparency helps you and your healthcare provider understand exactly which factors are most important to address in your personalized prevention plan."
  },
  {
    question: "How should I interpret my risk timeline?",
    answer: "Your risk timeline estimates the number of years before potential progression to Type 2 Diabetes based on your current health metrics. For example, a prediction of 5.3 years means that, without intervention, you might develop Type 2 Diabetes in approximately 5.3 years. This timeline is not a certainty but rather a statistical prediction to help guide prevention efforts. The good news is that with appropriate interventions, this timeline can often be extended or progression can be prevented entirely."
  },
  {
    question: "Can this tool replace medical advice from my doctor?",
    answer: "No, this tool is designed to supplement, not replace, professional medical advice. We recommend sharing your risk assessment report with your healthcare provider to develop a comprehensive prevention plan. Your doctor can interpret the results in the context of your complete medical history and help you implement the suggested interventions appropriately."
  },
  {
    question: "How often should I recheck my risk?",
    answer: "We recommend rechecking your risk every 3-6 months, especially after implementing lifestyle changes or if you experience significant health changes. Regular reassessment helps track your progress and adjusts recommendations based on your changing health status. Your healthcare provider might suggest a different schedule based on your individual situation."
  },
  {
    question: "What if I already have prediabetes?",
    answer: "This tool is specifically designed for individuals with prediabetes to predict their risk of progression to Type 2 Diabetes. If you've been diagnosed with prediabetes, this tool can be particularly valuable for you, providing a personalized risk timeline and targeted intervention recommendations to help prevent or delay progression."
  }
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our diabetes risk prediction tool and how to interpret your results.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-medical-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 py-4 px-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <a href="mailto:support@diabetespredict.org" className="text-medical-blue hover:text-medical-light-blue font-medium inline-flex items-center">
              Contact our support team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
