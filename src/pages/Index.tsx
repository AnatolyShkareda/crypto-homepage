import { ArrowRight, Brain, ExternalLink, Users, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCarousel from "@/components/FeatureCarousel";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = [heroRef.current, featuresRef.current, ctaRef.current, footerRef.current];
    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
      title: "Train AI Models. Share Compute. Earn.",
      subtitle: "Decentralized AI Training Platforms",
      description: "Contribute data or GPU power to train AI collaboratively. Get rewarded in tokens — no central authority, just global intelligence.",
      gradient: "from-cyan-400 to-purple-500"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center",
      title: "Monetize Your Data. Fuel Smarter AI.",
      subtitle: "Decentralized Data Marketplaces",
      description: "Control your data. Sell it securely to AI developers and companies, ensuring privacy and fair compensation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=64&h=64&fit=crop&crop=center",
      title: "Create. Mint. Trade.",
      subtitle: "AI-Generated NFTs",
      description: "Turn AI-generated art, music, or characters into NFTs in seconds. Tokenize creativity and build interactive, intelligent collectibles.",
      gradient: "from-pink-500 to-cyan-400"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop&crop=center",
      title: "Compliant by Design",
      subtitle: "AI-Powered KYC on Blockchain",
      description: "Automated identity verification with on-chain audit logs. Built for DeFi, exchanges, and Web3 platforms needing scalable, regulatory-grade KYC.",
      gradient: "from-cyan-400 to-purple-500"
    },
    {
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=64&h=64&fit=crop&crop=center",
      title: "Web3 Access to Language Models",
      subtitle: "Decentralized LLM Services",
      description: "Tap into powerful LLMs without registration. Integrate via API, pay in ETH or USDC, and launch custom AI agents directly on-chain.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
      title: "Intelligent Agents for the Autonomous Web",
      subtitle: "AI Agents in Web3 Ecosystems",
      description: "Deploy bots that trade, govern, and interact autonomously with smart contracts and DAOs — redefining on-chain automation.",
      gradient: "from-pink-500 to-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/20 bg-slate-900/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="text-white font-bold text-xl tracking-wide hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                WeAreWay
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-slate-100 hover:text-cyan-300 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">Products</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-400/50"></span>
              </a>
              <a href="#about" className="text-slate-100 hover:text-cyan-300 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-400/50"></span>
              </a>
              <a href="#contact" className="text-slate-100 hover:text-cyan-300 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-400/50"></span>
              </a>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold shadow-xl hover:shadow-2xl shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 text-lg px-8 py-3 border border-cyan-400/50 hover:border-cyan-300 hover:scale-105">
                <span className="relative z-10">Book a call</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" className="p-3 text-slate-100 hover:text-cyan-300 hover:bg-purple-800/30 border border-transparent hover:border-cyan-400/30 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Cityscape Background */}
      <section 
        ref={heroRef}
        className="section-animate relative overflow-hidden min-h-[90vh] flex items-center cyber-cityscape"
      >
        {/* Animated Cityscape Background */}
        <div className="absolute inset-0 cyber-bg">
          {/* Starfield */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Cityscape Buildings */}
          <div className="absolute bottom-0 left-0 right-0 cityscape">
            {/* Background Buildings */}
            <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-purple-900/60 to-transparent transform -skew-x-1"></div>
            <div className="absolute bottom-0 right-0 w-full h-80 bg-gradient-to-t from-purple-800/50 to-transparent transform skew-x-1"></div>
            
            {/* Main Tower */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-96 bg-gradient-to-t from-purple-600 via-purple-500 to-purple-400 cyber-tower">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-cyan-400 animate-pulse"></div>
            </div>
            
            {/* Side Buildings */}
            <div className="absolute bottom-0 left-1/4 w-12 h-64 bg-gradient-to-t from-purple-700 to-purple-600 transform -skew-y-1"></div>
            <div className="absolute bottom-0 right-1/4 w-10 h-72 bg-gradient-to-t from-purple-800 to-purple-700 transform skew-y-1"></div>
            <div className="absolute bottom-0 left-1/6 w-8 h-48 bg-gradient-to-t from-purple-900 to-purple-800"></div>
            <div className="absolute bottom-0 right-1/6 w-14 h-56 bg-gradient-to-t from-purple-700 to-purple-600"></div>
          </div>

          {/* Floating Cyber Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400 rounded-full animate-spin-slow opacity-30">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-pink-500 rounded-full animate-pulse opacity-25"></div>

          {/* Grid Lines */}
          <div className="absolute inset-0 cyber-grid"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              <span className="block mb-2">We build decentralized platforms</span>
              <span className="block mb-2">at the{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-extrabold">
                  intersection
                </span>
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-slate-200">
                of blockchain and artificial intelligence
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 leading-relaxed font-light tracking-wide">
                AI that works for Web3.{" "}
                <span className="text-cyan-300 font-medium">Building the future</span>{" "}
                of decentralized intelligence.
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xl px-12 py-6 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-cyan-400/50 hover:border-cyan-300 hover:scale-105">
                <span className="relative z-10">Book a call</span>
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={featuresRef}
        className="section-animate py-24 lg:py-40 bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 border border-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 border border-pink-500/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Decentralized AI
              </span>
              <span className="block text-slate-200 mt-2">Solutions</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light tracking-wide">
                Revolutionary products that merge{" "}
                <span className="text-cyan-300 font-medium">artificial intelligence</span>{" "}
                with{" "}
                <span className="text-purple-300 font-medium">blockchain technology</span>{" "}
                to create the next generation of decentralized applications.
              </p>
            </div>
          </div>
          
          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="section-animate py-24 lg:py-40 bg-gradient-to-r from-purple-900 via-slate-900 to-purple-900 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute top-10 left-1/4 w-40 h-40 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border border-pink-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-2 h-64 bg-gradient-to-b from-cyan-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-2 h-64 bg-gradient-to-b from-pink-500/30 to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
            <span className="block mb-2">Ready to Build</span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              the Future?
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 leading-relaxed font-light tracking-wide">
              Join the community shaping the{" "}
              <span className="text-cyan-300 font-medium">next wave</span>{" "}
              of decentralized AI.{" "}
              <span className="text-purple-300 font-medium">Start building today.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-cyan-400/50 hover:border-cyan-300 group">
              <span className="relative z-10">Book a call</span>
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className="section-animate bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900 py-20 border-t border-cyan-500/20 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="text-white font-bold text-xl tracking-wide hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                WeAreWay
              </div>
            </div>
            <div className="flex items-center space-x-8 text-slate-300">
              <a href="#" className="hover:text-cyan-300 transition-all duration-300 font-medium relative group py-2">
                <span className="relative z-10">Privacy Policy</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-400/50"></span>
              </a>
              <a href="#" className="hover:text-cyan-300 transition-all duration-300 font-medium relative group py-2">
                <span className="relative z-10">Terms of Service</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-400/50"></span>
              </a>
              <a href="#" className="hover:text-cyan-300 transition-all duration-300 font-medium relative group py-2">
                <span className="relative z-10">Support</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full shadow-lg shadow-cyan-400/50"></span>
              </a>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8 text-center">
            <p className="text-slate-400 font-light leading-relaxed text-lg tracking-wide">
              &copy; 2024 WeAreWay. Building the future of decentralized artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
