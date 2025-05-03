
import { Card, CardContent } from "@/components/ui/card";

const ScientificApproach = () => {
  return (
    <section id="science" className="py-20 bg-medical-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Scientific Approach</h2>
          <div className="w-20 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our tool is built on rigorous scientific research and advanced machine learning technology to deliver accurate, personalized risk predictions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="card-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-medical-dark">Machine Learning Methodology</h3>
              <p className="text-gray-700 mb-6">
                We've developed our prediction model using state-of-the-art machine learning algorithms trained on extensive longitudinal datasets of patients who progressed from prediabetes to Type 2 Diabetes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-medical-blue"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Ensemble Learning</h4>
                    <p className="text-sm text-gray-600">Utilizes multiple algorithms including gradient boosting and random forests to enhance prediction accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-medical-blue"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Feature Importance</h4>
                    <p className="text-sm text-gray-600">Identifies the most significant risk factors for each individual, enabling targeted intervention strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-medical-blue"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Continuous Validation</h4>
                    <p className="text-sm text-gray-600">The model undergoes regular validation against new clinical data to ensure ongoing accuracy and relevance.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Model Performance</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Accuracy:</p>
                    <p className="font-bold text-medical-blue">91%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Sensitivity:</p>
                    <p className="font-bold text-medical-blue">88%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Specificity:</p>
                    <p className="font-bold text-medical-blue">89%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">AUC-ROC:</p>
                    <p className="font-bold text-medical-blue">0.94</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-medical-dark">Explainable AI with SHAP</h3>
              <p className="text-gray-700 mb-6">
                We use SHAP (SHapley Additive exPlanations) to make our machine learning predictions transparent and interpretable for both healthcare providers and patients.
              </p>
              
              <div className="mb-8">
                <img 
                  src="https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Visualization of SHAP values" 
                  className="w-full h-32 object-cover rounded-lg mb-2" 
                />
                <p className="text-xs text-gray-500 text-center italic">Example visualization of SHAP values for a patient</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-medical-blue"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Personalized Insights</h4>
                    <p className="text-sm text-gray-600">SHAP values reveal how each factor specifically contributes to your individual risk assessment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-medical-blue"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Targeted Intervention Planning</h4>
                    <p className="text-sm text-gray-600">By understanding the impact of each risk factor, we generate evidence-based recommendations that target your highest-impact modifiable factors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-medical-blue"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Clinical Decision Support</h4>
                    <p className="text-sm text-gray-600">Healthcare providers can use these detailed explanations to guide clinical decisions and patient education.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Evidence-Based Intervention Strategies</h3>
          <p className="text-gray-700 mb-8 text-center">
            Our tool combines risk prediction with personalized intervention recommendations based on the latest clinical research and guidelines.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-2 text-medical-dark">Dietary Modifications</h4>
              <p className="text-sm text-gray-700">Tailored nutrition plans based on individual risk factors and metabolic profile.</p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-2 text-medical-dark">Physical Activity</h4>
              <p className="text-sm text-gray-700">Personalized activity recommendations considering current fitness level and health status.</p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-2 text-medical-dark">Weight Management</h4>
              <p className="text-sm text-gray-700">Sustainable approaches to achieving and maintaining a healthy weight.</p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-2 text-medical-dark">Stress Reduction</h4>
              <p className="text-sm text-gray-700">Techniques to manage stress and its impact on glucose metabolism.</p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-2 text-medical-dark">Sleep Optimization</h4>
              <p className="text-sm text-gray-700">Strategies for improving sleep quality to support metabolic health.</p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-2 text-medical-dark">Medication Guidance</h4>
              <p className="text-sm text-gray-700">Information on preventative medications when appropriate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificApproach;
