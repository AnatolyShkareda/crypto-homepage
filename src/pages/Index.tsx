
import { ArrowRight, Brain, Database, Palette, Shield, MessageSquare, Bot, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Train AI Models. Share Compute. Earn.",
      subtitle: "Decentralized AI Training Platforms",
      description: "Contribute data or GPU power to train AI collaboratively. Get rewarded in tokens — no central authority, just global intelligence.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Monetize Your Data. Fuel Smarter AI.",
      subtitle: "Decentralized Data Marketplaces",
      description: "Control your data. Sell it securely to AI developers and companies, ensuring privacy and fair compensation.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Create. Mint. Trade.",
      subtitle: "AI-Generated NFTs",
      description: "Turn AI-generated art, music, or characters into NFTs in seconds. Tokenize creativity and build interactive, intelligent collectibles.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Compliant by Design",
      subtitle: "AI-Powered KYC on Blockchain",
      description: "Automated identity verification with on-chain audit logs. Built for DeFi, exchanges, and Web3 platforms needing scalable, regulatory-grade KYC.",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Web3 Access to Language Models",
      subtitle: "Decentralized LLM Services",
      description: "Tap into powerful LLMs without registration. Integrate via API, pay in ETH or USDC, and launch custom AI agents directly on-chain.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Bot,
      title: "Intelligent Agents for the Autonomous Web",
      subtitle: "AI Agents in Web3 Ecosystems",
      description: "Deploy bots that trade, govern, and interact autonomously with smart contracts and DAOs — redefining on-chain automation.",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-blue-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DecentralAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Empowering the Future of AI with Web3
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We build decentralized platforms at the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                intersection
              </span>{" "}
              of blockchain and artificial intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Designed for transparency, collaboration, and permissionless innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8">
                View Documentation
                <ExternalLink className="ml-2 w-5 h-5" />
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
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Decentralized AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Revolutionary products that merge artificial intelligence with blockchain technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {feature.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the community shaping the next wave of decentralized AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
              <ExternalLink className="mr-2 w-5 h-5" />
              Explore Developer Docs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
              <Users className="mr-2 w-5 h-5" />
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DecentralAI</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 DecentralAI. Building the future of decentralized artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
