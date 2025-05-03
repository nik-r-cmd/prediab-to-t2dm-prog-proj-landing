
import { Card, CardContent } from "@/components/ui/card";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ value, label, delay }: StatCardProps) => {
  return (
    <AnimateOnScroll delay={delay} animation="scale-in">
      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-3xl md:text-4xl font-bold text-medical-blue mb-2">{value}</div>
          <div className="text-gray-600">{label}</div>
        </CardContent>
      </Card>
    </AnimateOnScroll>
  );
};

const ProblemSolution = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Challenge We're Addressing
          </h2>
          <div className="w-20 h-1 bg-medical-blue mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimateOnScroll animation="fade-in">
            <h3 className="text-2xl font-bold mb-4 text-medical-dark">The Problem</h3>
            <p className="text-gray-700 mb-4">
              Prediabetes affects approximately 77 million Indians—yet most don't know they have it. Without intervention, prediabetes often progresses to Type 2 Diabetes within 5-10 years, leading to serious health complications.
            </p>
            <p className="text-gray-700">
              The transition from prediabetes to Type 2 Diabetes is not inevitable, but identifying those at highest risk and implementing targeted interventions remains a challenge for healthcare providers, particularly within the Indian context.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={200}>
            <h3 className="text-2xl font-bold mb-4 text-medical-dark">Our Solution</h3>
            <p className="text-gray-700 mb-4">
              Our machine learning tool analyzes multiple risk factors to predict an individual's likelihood of progression from prediabetes to Type 2 Diabetes, providing a personalized risk timeline focused on the Indian population.
            </p>
            <p className="text-gray-700">
              By identifying specific contributing factors through advanced SHAP analysis, we provide tailored intervention recommendations that target each patient's unique risk profile, empowering both healthcare providers and patients with actionable insights specific to Indian demographics.
            </p>
          </AnimateOnScroll>
        </div>
        
        {/* Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            value="77M" 
            label="Indians with prediabetes" 
            delay={0} 
          />
          <StatCard 
            value="80%" 
            label="Don't know they have prediabetes" 
            delay={200} 
          />
          <StatCard 
            value="70%" 
            label="Risk reduction with intervention" 
            delay={400} 
          />
          <StatCard 
            value="5-10yrs" 
            label="Typical progression timeline" 
            delay={600} 
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
