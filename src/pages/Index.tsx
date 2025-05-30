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
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center",
      title: "Monetize Your Data. Fuel Smarter AI.",
      subtitle: "Decentralized Data Marketplaces",
      description: "Control your data. Sell it securely to AI developers and companies, ensuring privacy and fair compensation.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=64&h=64&fit=crop&crop=center",
      title: "Create. Mint. Trade.",
      subtitle: "AI-Generated NFTs",
      description: "Turn AI-generated art, music, or characters into NFTs in seconds. Tokenize creativity and build interactive, intelligent collectibles.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop&crop=center",
      title: "Compliant by Design",
      subtitle: "AI-Powered KYC on Blockchain",
      description: "Automated identity verification with on-chain audit logs. Built for DeFi, exchanges, and Web3 platforms needing scalable, regulatory-grade KYC.",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=64&h=64&fit=crop&crop=center",
      title: "Web3 Access to Language Models",
      subtitle: "Decentralized LLM Services",
      description: "Tap into powerful LLMs without registration. Integrate via API, pay in ETH or USDC, and launch custom AI agents directly on-chain.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
      title: "Intelligent Agents for the Autonomous Web",
      subtitle: "AI Agents in Web3 Ecosystems",
      description: "Deploy bots that trade, govern, and interact autonomously with smart contracts and DAOs — redefining on-chain automation.",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/34fb2bfb-ee4f-4206-88a1-ea5b346224c7.png" 
                alt="WeAreWay" 
                className="h-10 transition-transform hover:scale-105"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg focus-ring">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg focus-ring">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg focus-ring">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-lg px-6 py-3">
                Book a call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="section-animate relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-[size:50px_50px]" />
        
        {/* Moving Robot Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Bot className="w-96 h-96 text-blue-400/30 animate-pulse" />
          <div className="absolute w-80 h-80 animate-spin" style={{ animationDuration: '20s' }}>
            <Bot className="w-full h-full text-cyan-400/25" />
          </div>
          <div className="absolute w-72 h-72 animate-bounce" style={{ animationDuration: '3s' }}>
            <Bot className="w-full h-full text-indigo-400/20" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-10 leading-tight tracking-tight">
              We build decentralized platforms at the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                intersection
              </span>{" "}
              of blockchain and artificial intelligence
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              AI that works for Web3. Building the future of decentralized intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 hover-lift">
                Book a call
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold text-xl px-10 py-6 transition-all duration-200 hover:bg-blue-50 hover-lift">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={featuresRef}
        className="section-animate py-24 lg:py-40 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Decentralized AI Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Revolutionary products that merge artificial intelligence with blockchain technology to create the next generation of decentralized applications.
            </p>
          </div>
          
          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="section-animate py-24 lg:py-40 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Join the community shaping the next wave of decentralized AI. Start building today.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 hover-lift">
              <ExternalLink className="mr-2 w-6 h-6" />
              Book a call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-10 py-6 font-semibold transition-all duration-200 hover:shadow-xl hover-lift">
              <Users className="mr-2 w-6 h-6" />
              Book a call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className="section-animate bg-gray-50 py-20 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/34fb2bfb-ee4f-4206-88a1-ea5b346224c7.png" 
                alt="WeAreWay" 
                className="h-8 transition-transform hover:scale-105"
              />
            </div>
            <div className="flex items-center space-x-8 text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 font-light leading-relaxed">
              &copy; 2024 WeAreWay. Building the future of decentralized artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
