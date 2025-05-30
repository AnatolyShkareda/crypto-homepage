
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
          <Card className="h-full hover:shadow-2xl transition-all duration-300 border border-purple-500/30 shadow-lg hover:-translate-y-2 bg-black/60 backdrop-blur-sm hover:bg-black/80 hover:border-cyan-400/50 relative overflow-hidden">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                 style={{
                   backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            <CardHeader className="pb-6 relative z-10">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-purple-500/30 group-hover:ring-cyan-400/50 transition-all duration-300 relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {hoveredIndex === index ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {features.map((_, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="w-20 h-20">
                              <img
                                src={`https://images.unsplash.com/photo-151877066043${9 + imgIndex}-4636190af475?w=80&h=80&fit=crop&crop=center`}
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-110 contrast-110 relative z-10"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-2xl lg:text-3xl text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3 font-bold leading-tight text-shadow-glow">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-cyan-400 font-semibold text-lg lg:text-xl">
                    {feature.subtitle}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 relative z-10">
              <p className="text-gray-300 leading-relaxed text-lg lg:text-xl font-light group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Animated gradient indicator */}
              <div className={`mt-6 h-1 w-full bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}
                   style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>
              </div>
            </CardContent>
            
            {/* Subtle cyber lines */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeatureCarousel;
