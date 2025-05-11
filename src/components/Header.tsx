import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-medical-black font-bold text-xl md:text-2xl">
          Predi<span className="text-medical-dark-pink">X</span>
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">

              {/* About PrediX */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    About PrediX
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 w-[400px]">
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#about" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">Our Mission</div>
                            <p className="text-sm text-muted-foreground">
                              How we're addressing diabetes in India
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#how-it-works" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">How It Works</div>
                            <p className="text-sm text-muted-foreground">
                              Step-by-step overview of the risk tool
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Diabetes Library */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    Diabetes Library
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 w-[500px]">
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#education" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">Prediabetes</div>
                            <p className="text-sm text-muted-foreground">
                              Learn diagnostic criteria and risk factors
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#education" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">Type 2 Diabetes</div>
                            <p className="text-sm text-muted-foreground">
                              Symptoms, complications, and management
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Scientific Approach */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    Scientific Approach
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 w-[400px]">
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#science" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">Model & Method</div>
                            <p className="text-sm text-muted-foreground">
                              XGBoost, SHAP, and performance metrics
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#science" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">Evidence-Based Strategy</div>
                            <p className="text-sm text-muted-foreground">
                              Interventions based on Indian clinical guidelines
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-2 w-[400px]">
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#faq" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">FAQs</div>
                            <p className="text-sm text-muted-foreground">
                              Common questions and answers
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/risk-assessment" className="block p-3 rounded-md hover:bg-accent">
                            <div className="text-sm font-medium">Risk Tool</div>
                            <p className="text-sm text-muted-foreground">
                              Check your risk now
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right-aligned buttons/icons (optional) */}
        <div className="flex items-center space-x-4">
          {/* Reserved for future use */}
        </div>
      </div>
    </header>
  );
};

export default Header;
