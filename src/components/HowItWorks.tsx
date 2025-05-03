
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Enter Your Health Data",
    description: "Provide key health metrics including age, BMI, blood pressure, HbA1c levels, lipid profile, and lifestyle factors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: 2,
    title: "ML Model Analysis",
    description: "Our advanced machine learning algorithm processes your data to calculate your personalized risk of progression to T2DM.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Receive Risk Assessment",
    description: "Get your personalized risk timeline showing the predicted progression from prediabetes to T2DM in years.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Get Personalized Report",
    description: "Download a detailed PDF report including SHAP analysis explaining how each factor impacts your prediction and personalized interventions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our tool simplifies the complex process of risk prediction through an intuitive, step-by-step approach that provides clear, actionable information.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Step indicators with connecting lines */}
          <div className="hidden md:flex justify-between mb-8 relative">
            {steps.map((step, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="w-16 h-16 rounded-full bg-medical-blue flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute h-1 bg-medical-blue" style={{ 
                    width: `${100 / (steps.length - 1)}%`, 
                    left: `${(index * 100 / (steps.length - 1)) + (50 / (steps.length - 1))}%`,
                    top: '8px',
                    transform: 'translateX(-50%)'
                  }}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Steps cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-medical-blue mb-4 md:hidden">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="hidden md:flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
