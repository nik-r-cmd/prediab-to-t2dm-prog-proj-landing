
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const EducationalTabs = () => {
  const [activeTab, setActiveTab] = useState("prediabetes");

  return (
    <section className="py-20 bg-medical-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Diabetes Risk
          </h2>
          <div className="w-20 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Education is the first step toward prevention. Learn about prediabetes, Type 2 Diabetes, and how they progress to make informed decisions about your health.
          </p>
        </div>

        <Tabs 
          defaultValue="prediabetes" 
          className="max-w-4xl mx-auto"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid grid-cols-3 w-[700px] mx-auto mb-10 bg-gray-100 rounded-lg p-1">
  <TabsTrigger value="prediabetes" className="text-base md:text-lg py-3">Prediabetes</TabsTrigger>
  <TabsTrigger value="t2dm" className="text-base md:text-lg py-3">Type 2 Diabetes</TabsTrigger>
  <TabsTrigger value="progression" className="text-base md:text-lg py-3">Progression Timeline</TabsTrigger>
</TabsList>

          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <TabsContent value="prediabetes" className="space-y-6">
              <h3 className="text-2xl font-bold text-medical-dark">What is Prediabetes?</h3>
              <p className="text-gray-700">
                Prediabetes is a serious health condition where blood sugar levels are higher than normal, but not yet high enough to be diagnosed as type 2 diabetes. It's a critical warning sign that your body's ability to regulate glucose is compromised.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Diagnostic Criteria</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Fasting blood glucose: 100-125 mg/dL</li>
                      <li>A1C levels: 5.7% to 6.4%</li>
                      <li>Oral glucose tolerance test: 140-199 mg/dL</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Common Risk Factors</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Being overweight or obese</li>
                      <li>Being 45 years or older</li>
                      <li>Family history of diabetes</li>
                      <li>Physical inactivity</li>
                      <li>History of gestational diabetes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  The good news is that prediabetes doesn't have to lead to type 2 diabetes. With timely intervention and lifestyle changes, it's often possible to restore normal blood sugar levels and prevent or delay the onset of diabetes.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="t2dm" className="space-y-6">
              <h3 className="text-2xl font-bold text-medical-dark">Understanding Type 2 Diabetes</h3>
              <p className="text-gray-700">
                Type 2 Diabetes is a chronic condition that affects the way your body metabolizes glucose, which is vital for providing energy to your body's cells. With type 2 diabetes, your body either resists the effects of insulin — a hormone that regulates glucose movement into your cells — or doesn't produce enough insulin to maintain normal glucose levels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Common Symptoms</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Increased thirst and frequent urination</li>
                      <li>Increased hunger</li>
                      <li>Unintended weight loss</li>
                      <li>Fatigue and irritability</li>
                      <li>Blurred vision</li>
                      <li>Slow-healing sores</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Potential Complications</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Heart disease and stroke</li>
                      <li>Nerve damage (neuropathy)</li>
                      <li>Kidney damage (nephropathy)</li>
                      <li>Eye damage (retinopathy)</li>
                      <li>Foot damage and amputations</li>
                      <li>Hearing impairment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  Although type 2 diabetes is a serious condition, it can be managed effectively with lifestyle changes, regular monitoring, and medications when necessary. Early detection and intervention are key to preventing complications.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="progression" className="space-y-6">
              <h3 className="text-2xl font-bold text-medical-dark">The Progression Timeline</h3>
              <p className="text-gray-700">
                The journey from normal glucose metabolism to type 2 diabetes is typically a gradual process that occurs over years. Understanding this progression can help identify intervention opportunities at each stage.
              </p>
              
              <div className="relative mt-8 mb-12 px-4">
                <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded">
                  <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-medical-blue rounded transition-all duration-500`} style={{width: activeTab === "progression" ? "100%" : "0%"}}></div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <div className="text-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Normal</p>
                    <p className="text-xs text-gray-500">A1C &lt; 5.7%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Prediabetes</p>
                    <p className="text-xs text-gray-500">A1C 5.7-6.4%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 rounded-full bg-medical-blue mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Early T2DM</p>
                    <p className="text-xs text-gray-500">A1C 6.5-7.0%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 rounded-full bg-red-500 mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Established T2DM</p>
                    <p className="text-xs text-gray-500">A1C &gt; 7.0%</p>
                  </div>
                </div>
              </div>
              
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">Key Factors Influencing Progression</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Modifiable Factors</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                        <li>Diet and physical activity</li>
                        <li>Weight management</li>
                        <li>Stress levels</li>
                        <li>Sleep patterns</li>
                        <li>Smoking and alcohol consumption</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Non-Modifiable Factors</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                        <li>Age</li>
                        <li>Genetics and family history</li>
                        <li>Ethnicity</li>
                        <li>History of gestational diabetes</li>
                        <li>Certain medical conditions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  Without intervention, about 10% of people with prediabetes will progress to type 2 diabetes each year. However, this progression is not inevitable—our tool can help identify your personal risk timeline and provide tailored recommendations.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default EducationalTabs;
