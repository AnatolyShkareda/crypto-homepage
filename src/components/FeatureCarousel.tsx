
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
          <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm hover:bg-white">
            <CardHeader className="pb-6">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                  {hoveredIndex === index ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {features.map((_, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="w-20 h-20">
                              <img
                                src={`https://images.unsplash.com/photo-151877066043${9 + imgIndex}-4636190af475?w=80&h=80&fit=crop&crop=center`}
                                alt={`Feature ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-2xl lg:text-3xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3 font-bold leading-tight">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-lg lg:text-xl">
                    {feature.subtitle}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light">
                {feature.description}
              </p>
              
              {/* Subtle gradient indicator */}
              <div className={`mt-6 h-1 w-full bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </CardContent>
            
            {/* Subtle background pattern on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/30 group-hover:to-cyan-50/30 transition-all duration-300 rounded-lg pointer-events-none"></div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeatureCarousel;
