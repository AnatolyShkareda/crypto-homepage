
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
    <div className="grid lg:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative"
        >
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  {hoveredIndex === index ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {features.map((_, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="w-24 h-24">
                              <img
                                src={`https://images.unsplash.com/photo-151877066043${9 + imgIndex}-4636190af475?w=96&h=96&fit=crop&crop=center`}
                                alt={`Feature ${imgIndex + 1}`}
                                className="w-full h-full object-cover rounded-xl"
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
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium text-xl">
                    {feature.subtitle}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600 leading-relaxed text-xl">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeatureCarousel;
