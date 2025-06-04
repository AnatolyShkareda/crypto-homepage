
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

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = [heroRef.current, featuresRef.current, ctaRef.current, footerRef.current];
    elements.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const features = [{
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
    title: "Train AI Models. Share Compute. Earn.",
    subtitle: "Decentralized AI Training Platforms",
    description: "Contribute data or GPU power to train AI collaboratively. Get rewarded in tokens — no central authority, just global intelligence.",
    gradient: "from-indigo-400 to-purple-500"
  }, {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center",
    title: "Monetize Your Data. Fuel Smarter AI.",
    subtitle: "Decentralized Data Marketplaces",
    description: "Control your data. Sell it securely to AI developers and companies, ensuring privacy and fair compensation.",
    gradient: "from-purple-500 to-violet-500"
  }, {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=64&h=64&fit=crop&crop=center",
    title: "Create. Mint. Trade.",
    subtitle: "AI-Generated NFTs",
    description: "Turn AI-generated art, music, or characters into NFTs in seconds. Tokenize creativity and build interactive, intelligent collectibles.",
    gradient: "from-violet-500 to-indigo-400"
  }, {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop&crop=center",
    title: "Compliant by Design",
    subtitle: "AI-Powered KYC on Blockchain",
    description: "Automated identity verification with on-chain audit logs. Built for DeFi, exchanges, and Web3 platforms needing scalable, regulatory-grade KYC.",
    gradient: "from-indigo-400 to-purple-500"
  }, {
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=64&h=64&fit=crop&crop=center",
    title: "Web3 Access to Language Models",
    subtitle: "Decentralized LLM Services",
    description: "Tap into powerful LLMs without registration. Integrate via API, pay in ETH or USDC, and launch custom AI agents directly on-chain.",
    gradient: "from-purple-500 to-violet-500"
  }, {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
    title: "Intelligent Agents for the Autonomous Web",
    subtitle: "AI Agents in Web3 Ecosystems",
    description: "Deploy bots that trade, govern, and interact autonomously with smart contracts and DAOs — redefining on-chain automation.",
    gradient: "from-violet-500 to-indigo-400"
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-violet-200">
      {/* Navigation */}
      <nav className="border-b border-purple-500/20 bg-purple-100/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/5c2c262a-9b93-48b2-8580-6f01b4308c09.png" alt="WeAreWay" className="h-16 w-auto transition-transform hover:scale-105 filter drop-shadow-lg opacity-90 hover:opacity-100" />
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-purple-900 hover:text-purple-700 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">Products</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-purple-600/50"></span>
              </a>
              <a href="#about" className="text-purple-900 hover:text-purple-700 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-purple-600/50"></span>
              </a>
              <a href="#contact" className="text-purple-900 hover:text-purple-700 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-purple-600/50"></span>
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-semibold shadow-xl hover:shadow-2xl shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 text-lg px-8 py-3 border border-purple-400/50 hover:border-purple-300 hover:scale-105">
                <span className="relative z-10">Book a free consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" className="p-3 text-purple-900 hover:text-purple-700 hover:bg-purple-200/30 border border-transparent hover:border-purple-400/30 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <section ref={heroRef} className="section-animate relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-100 via-purple-200 to-violet-200">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Starfield */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-1 bg-purple-600 rounded-full animate-pulse" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }} 
              />
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-400 rounded-full animate-spin-slow opacity-30">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-violet-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-indigo-500 rounded-full animate-pulse opacity-25"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-900 mb-8 leading-[1.1] tracking-tight">
              <span className="block mb-2">Crypto + AI:</span>
              <span className="bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 bg-clip-text text-transparent font-extrabold">
                Discover How They Merge
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-purple-800 leading-relaxed font-light tracking-wide">
                <span className="text-purple-700 font-medium">We build decentralized platforms where blockchain and artificial intelligence converge</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-bold text-xl px-12 py-6 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-purple-400/50 hover:border-purple-300 hover:scale-105">
                <span className="relative z-10">Book a free consultation</span>
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="section-animate py-24 lg:py-40 bg-gradient-to-br from-purple-100 via-violet-200/60 to-indigo-200 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-200/20 to-transparent"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 border border-purple-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 border border-violet-500/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-900 mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                Decentralized AI
              </span>
              <span className="block text-purple-800 mt-2">Solutions</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-purple-700 leading-relaxed font-light tracking-wide">
                Revolutionary products that merge{" "}
                <span className="text-purple-600 font-medium">artificial intelligence</span>{" "}
                with{" "}
                <span className="text-violet-600 font-medium">blockchain technology</span>{" "}
                to create the next generation of decentralized applications.
              </p>
            </div>
          </div>
          
          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-animate py-24 lg:py-40 bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-40 h-40 border-2 border-purple-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border border-violet-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-2 h-64 bg-gradient-to-b from-purple-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-2 h-64 bg-gradient-to-b from-violet-500/30 to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-900 mb-10 tracking-tight leading-tight">
            <span className="block mb-2">Ready to Build</span>
            <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
              the Future?
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl text-purple-800 leading-relaxed font-light tracking-wide">
              Join the community shaping the{" "}
              <span className="text-purple-700 font-medium">next wave</span>{" "}
              of decentralized AI.{" "}
              <span className="text-violet-700 font-medium">Start building today.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-purple-400/50 hover:border-purple-300 group">
              <span className="relative z-10">Book a free consultation</span>
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="section-animate bg-gradient-to-br from-purple-100 via-violet-200/40 to-indigo-200 py-20 border-t border-purple-500/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-200/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <img src="/lovable-uploads/5c2c262a-9b93-48b2-8580-6f01b4308c09.png" alt="WeAreWay" className="h-14 w-auto transition-transform hover:scale-105 filter drop-shadow-lg opacity-80 hover:opacity-100" />
            </div>
            <div className="flex flex-col space-y-4 text-purple-700 max-w-md">
              <div className="flex items-center space-x-8">
                <a href="#" className="hover:text-purple-600 transition-all duration-300 font-medium relative group py-2">
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-purple-600/50"></span>
                </a>
                <a href="#" className="hover:text-purple-600 transition-all duration-300 font-medium relative group py-2">
                  <span className="relative z-10">Terms of Service</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-purple-600/50"></span>
                </a>
                <a href="#" className="hover:text-purple-600 transition-all duration-300 font-medium relative group py-2">
                  <span className="relative z-10">Support</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-purple-600/50"></span>
                </a>
              </div>
              <p className="text-sm text-purple-600 leading-relaxed">
                We develop blockchain software and do not provide financial services. Our activities do not require licensing in Israel. Full terms are available on the following page:
              </p>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-purple-600 font-light leading-relaxed text-lg tracking-wide">
              &copy; 2024 WeAreWay. Building the future of decentralized artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
