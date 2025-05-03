import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Pause, Play } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4" // make sure video path is correct relative to public/
        />
        {/* Reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark-blue to-medical-blue opacity-50" />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-4 right-4 z-50 bg-white/20 text-white backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Transforming<br />
            <span className="text-gradient bg-gradient-to-r from-white to-white/80">diabetes care</span>
          </h1>
          <p className="animate-fade-in text-xl md:text-2xl text-white/90 mb-10 max-w-xl leading-relaxed">
            Our advanced machine learning tool helps predict your risk of progression from prediabetes to Type 2 Diabetes, empowering you with personalized prevention strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/risk-assessment">
              <Button
                size="lg"
                className="animate-fade-in bg-gradient-to-r from-medical-blue to-medical-light-blue hover:from-medical-light-blue hover:to-medical-blue text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Check Your Risk
              </Button>
            </Link>
          </div>
        </div>

        {/* Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 max-w-4xl">
          <AnimateOnScroll
            className="p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-white"
            animation="fade-up"
            delay={100}
          >
            <h3 className="text-xl font-medium mb-2">77+ Million</h3>
            <p className="text-white/80">Indians with prediabetes at risk of progression</p>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="p-5 rounded-xl bg-gradient-to-br from-medical-accent/20 to-medical-accent/5 backdrop-blur-sm border border-white/10 text-white"
            animation="fade-up"
            delay={200}
          >
            <h3 className="text-xl font-medium mb-2">5–10X Higher</h3>
            <p className="text-white/80">Risk of T2DM among South Asian populations</p>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="p-5 rounded-xl bg-gradient-to-br from-medical-teal/20 to-medical-teal/5 backdrop-blur-sm border border-white/10 text-white"
            animation="fade-up"
            delay={300}
          >
            <h3 className="text-xl font-medium mb-2">70% Reduction</h3>
            <p className="text-white/80">In progression risk with early intervention</p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

