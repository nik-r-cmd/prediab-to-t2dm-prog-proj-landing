import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 DiabetesPredict. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-medical-blue">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-medical-blue">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-medical-blue">Cookie Policy</a>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-8">
  Disclaimer: This tool is intended for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. 
  Always consult a licensed healthcare provider for diagnosis or treatment decisions. Diagnostic criteria and intervention strategies are informed by guidelines from the  
  <a href="https://www.icmr.nic.in" target="_blank" rel="noopener noreferrer" className="underline text-medical-blue"> Indian Council of Medical Research (ICMR)</a> and the  
  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="underline text-medical-blue"> World Health Organization (WHO)</a>.
</p>

      </div>
    </footer>
  );
};

export default Footer;
