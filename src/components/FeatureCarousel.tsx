
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Feature {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

const FeatureCarousel = ({ features }: FeatureCarouselProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {features.map((feature, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group"
        >
          <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-cyan-500/20 shadow-xl hover:-translate-y-3 bg-slate-900/90 backdrop-blur-sm hover:bg-slate-800/90 hover:border-cyan-400/60 relative overflow-hidden group">
            {/* Enhanced Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Enhanced Cyber Grid Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500"
                 style={{
                   backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/70 transition-all duration-500 relative shadow-lg">
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {hoveredIndex === index ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {features.map((_, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="w-24 h-24">
                              <img
                                src={`https://images.unsplash.com/photo-151877066043${9 + imgIndex}-4636190af475?w=96&h=96&fit=crop&crop=center`}
                                alt={`Feature ${imgIndex + 1}`}
                                className="w-full h-full object-cover filter brightness-110 contrast-110"
                                loading="lazy"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="hidden" />
                      <CarouselNext className="hidden" />
                    </Carousel>
                  ) : (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-110 contrast-110 relative z-10"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  {/* Enhanced typography for better readability */}
                  <CardTitle className="text-2xl lg:text-3xl text-white group-hover:text-cyan-300 transition-colors duration-300 mb-4 font-bold leading-tight tracking-tight">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-cyan-400 font-semibold text-lg lg:text-xl leading-relaxed">
                    {feature.subtitle}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 relative z-10">
              {/* Enhanced text readability */}
              <p className="text-slate-200 leading-relaxed text-lg lg:text-xl font-light group-hover:text-slate-100 transition-colors duration-300 tracking-wide">
                {feature.description}
              </p>
              
              {/* Enhanced animated gradient indicator */}
              <div className={`mt-6 h-1.5 w-full bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg transform scale-x-0 group-hover:scale-x-100 origin-left`}
                   style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }}>
              </div>
            </CardContent>
            
            {/* Enhanced cyber lines */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeatureCarousel;
