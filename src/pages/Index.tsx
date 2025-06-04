import { ArrowRight, Brain, ExternalLink, Users, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCarousel from "@/components/FeatureCarousel";
import ContactForm from "@/components/ContactForm";
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

  const scrollToContact = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [{
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
    title: "Train AI Models. Share Compute. Earn.",
    subtitle: "Decentralized AI Training Platforms",
    description: "Contribute data or GPU power to train AI collaboratively. Get rewarded in tokens — no central authority, just global intelligence.",
    gradient: "from-blue-400 to-cyan-500"
  }, {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center",
    title: "Monetize Your Data. Fuel Smarter AI.",
    subtitle: "Decentralized Data Marketplaces",
    description: "Control your data. Sell it securely to AI developers and companies, ensuring privacy and fair compensation.",
    gradient: "from-cyan-500 to-blue-500"
  }, {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=64&h=64&fit=crop&crop=center",
    title: "Create. Mint. Trade.",
    subtitle: "AI-Generated NFTs",
    description: "Turn AI-generated art, music, or characters into NFTs in seconds. Tokenize creativity and build interactive, intelligent collectibles.",
    gradient: "from-blue-500 to-indigo-500"
  }, {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop&crop=center",
    title: "Compliant by Design",
    subtitle: "AI-Powered KYC on Blockchain",
    description: "Automated identity verification with on-chain audit logs. Built for DeFi, exchanges, and Web3 platforms needing scalable, regulatory-grade KYC.",
    gradient: "from-indigo-500 to-blue-400"
  }, {
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=64&h=64&fit=crop&crop=center",
    title: "Web3 Access to Language Models",
    subtitle: "Decentralized LLM Services",
    description: "Tap into powerful LLMs without registration. Integrate via API, pay in ETH or USDC, and launch custom AI agents directly on-chain.",
    gradient: "from-blue-400 to-cyan-500"
  }, {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
    title: "Intelligent Agents for the Autonomous Web",
    subtitle: "AI Agents in Web3 Ecosystems",
    description: "Deploy bots that trade, govern, and interact autonomously with smart contracts and DAOs — redefining on-chain automation.",
    gradient: "from-cyan-500 to-blue-500"
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-blue-200/30 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/bf1418db-f8a9-4b0a-8136-7bf17e5dbd45.png" 
                alt="WeAreWay" 
                className="h-16 w-auto transition-transform hover:scale-105 filter drop-shadow-lg opacity-90 hover:opacity-100" 
              />
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">Products</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-blue-600/50"></span>
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-blue-600/50"></span>
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg focus-ring relative group py-2">
                <span className="relative z-10">Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-blue-600/50"></span>
              </a>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold shadow-xl hover:shadow-2xl shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 text-lg px-8 py-3 border border-blue-400/50 hover:border-blue-300 hover:scale-105"
              >
                <span className="relative z-10">Book a free consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" className="p-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 border border-transparent hover:border-blue-200/50 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <section ref={heroRef} className="section-animate relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Starfield */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Floating Elements */}
          <div 
            className="absolute top-20 left-10 w-16 h-16 border border-blue-200 rounded-full opacity-20"
            style={{ animation: 'spin 20s linear infinite' }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-200 rounded-full animate-pulse opacity-40"></div>
          </div>
          <div 
            className="absolute top-40 right-20 w-12 h-12 border border-cyan-300 rounded-full opacity-30"
            style={{ animation: 'bounce 4s ease-in-out infinite' }}
          ></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 border border-blue-300 rounded-full animate-pulse opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-[1.1] tracking-tight">
              <span className="block mb-2">Crypto + AI:</span>
              <span className="bg-gradient-to-r from-blue-700 via-cyan-700 to-blue-800 bg-clip-text text-transparent font-extrabold">
                Discover How They Merge
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light tracking-wide">
                <span className="text-slate-700 font-medium">We build decentralized platforms where blockchain and artificial intelligence converge</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xl px-12 py-6 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-blue-400/50 hover:border-blue-300 hover:scale-105"
              >
                <span className="relative z-10">Book a free consultation</span>
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="section-animate py-24 lg:py-40 bg-gradient-to-br from-white via-blue-50/60 to-slate-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/20 to-transparent"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 border border-blue-300/30 rounded-full animate-pulse"></div>
          <div 
            className="absolute bottom-40 left-10 w-24 h-24 border border-cyan-400/30 rounded-full animate-bounce"
            style={{ animationDuration: '4s' }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                Decentralized AI
              </span>
              <span className="block text-slate-700 mt-2 font-normal text-6xl">Solutions</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-600 leading-relaxed font-light tracking-wide md:text-3xl">
                Revolutionary products that merge{" "}
                <span className="text-blue-600 font-medium">artificial intelligence</span>{" "}
                with{" "}
                <span className="text-cyan-600 font-medium">blockchain technology</span>{" "}
                to create the next generation of decentralized applications.
              </p>
            </div>
          </div>
          
          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" ref={ctaRef} className="section-animate py-24 lg:py-40 bg-gradient-to-r from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-40 h-40 border-2 border-blue-300/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - CTA content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-10 tracking-tight leading-tight">
                <span className="block mb-2">Ready to Build</span>
                <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                  the Future?
                </span>
              </h2>
              <div className="max-w-2xl mb-16">
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light tracking-wide">
                  Join the community shaping the{" "}
                  <span className="text-blue-600 font-medium">next wave</span>{" "}
                  of decentralized AI.{" "}
                  <span className="text-cyan-600 font-medium">Start building today.</span>
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="section-animate bg-gradient-to-br from-white via-blue-50/40 to-slate-50 py-20 border-t border-blue-200/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Logo */}
            <div className="flex flex-col items-center lg:items-start">
              <img 
                src="/lovable-uploads/bf1418db-f8a9-4b0a-8136-7bf17e5dbd45.png" 
                alt="WeAreWay" 
                className="h-14 w-auto transition-transform hover:scale-105 filter drop-shadow-lg opacity-80 hover:opacity-100 mb-4" 
              />
              <p className="text-slate-600 text-center lg:text-left text-sm leading-relaxed max-w-xs">
                Building the future of decentralized artificial intelligence.
              </p>
            </div>

            {/* Company Information */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Company Information</h3>
              <div className="space-y-2 text-slate-600">
                <p className="font-medium">WEAREWAY.CO LTD</p>
                <div className="text-sm leading-relaxed">
                  <p>Amot Atrium Tower</p>
                  <p>2 Jabotinsky Street</p>
                  <p>Ramat Gan, Tel Aviv District, 5250501</p>
                  <p>Israel</p>
                </div>
                <div className="pt-2">
                  <a 
                    href="mailto:info@weareway.co" 
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                  >
                    info@weareway.co
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group py-1 inline-block">
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-blue-600/50"></span>
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group py-1 inline-block">
                  <span className="relative z-10">Terms of Service</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-blue-600/50"></span>
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group py-1 inline-block">
                  <span className="relative z-10"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-lg shadow-blue-600/50"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-blue-200/20 pt-8">
            <div className="text-center mb-6">
              <p className="text-sm text-slate-500 leading-relaxed max-w-4xl mx-auto">
                We develop blockchain software and do not provide financial services. Our activities do not require licensing in Israel. Full terms are available on the following page.
              </p>
            </div>
            <div className="text-center">
              <p className="text-slate-500 font-light leading-relaxed text-lg tracking-wide">
                &copy; 2024 WeAreWay. Building the future of decentralized artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
