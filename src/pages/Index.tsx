
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Navigation */}
      <nav className="border-b border-purple-500/30 bg-black/40 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/34fb2bfb-ee4f-4206-88a1-ea5b346224c7.png" 
                alt="WeAreWay" 
                className="h-10 transition-transform hover:scale-105 filter drop-shadow-lg"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium text-lg focus-ring relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium text-lg focus-ring relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium text-lg focus-ring relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl shadow-purple-500/30 transition-all duration-200 transform hover:-translate-y-0.5 text-lg px-6 py-3 border border-cyan-400/30">
                Book a call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" className="p-2 text-gray-200 hover:text-cyan-400 hover:bg-purple-800/50">
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-tight tracking-tight text-shadow-glow">
              We build decentralized platforms at the{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                intersection
              </span>{" "}
              of blockchain and artificial intelligence
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              AI that works for Web3. Building the future of decentralized intelligence.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold text-xl px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 hover-lift border border-cyan-400/30">
                Book a call
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={featuresRef}
        className="section-animate py-24 lg:py-40 bg-gradient-to-br from-black via-purple-900/50 to-black relative overflow-hidden"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-shadow-glow">
              Decentralized AI Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Revolutionary products that merge artificial intelligence with blockchain technology to create the next generation of decentralized applications.
            </p>
          </div>
          
          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="section-animate py-24 lg:py-40 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute top-10 left-1/4 w-40 h-40 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border border-pink-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-2 h-64 bg-gradient-to-b from-cyan-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-2 h-64 bg-gradient-to-b from-pink-500/30 to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight text-shadow-glow">
            Ready to Build the Future?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Join the community shaping the next wave of decentralized AI. Start building today.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xl px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 hover-lift border border-cyan-400/30">
              Book a call
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className="section-animate bg-gradient-to-br from-black via-purple-900 to-black py-20 border-t border-purple-500/30 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/34fb2bfb-ee4f-4206-88a1-ea5b346224c7.png" 
                alt="WeAreWay" 
                className="h-8 transition-transform hover:scale-105 filter drop-shadow-lg"
              />
            </div>
            <div className="flex items-center space-x-8 text-gray-300">
              <a href="#" className="hover:text-cyan-400 transition-colors font-medium relative group">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors font-medium relative group">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors font-medium relative group">
                Support
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="border-t border-purple-500/30 pt-8 text-center">
            <p className="text-gray-400 font-light leading-relaxed">
              &copy; 2024 WeAreWay. Building the future of decentralized artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
