
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Badge from './ui/badge';
import { TbQuote } from 'react-icons/tb';

import zhong from "../assets/member/Zhong.jpg";

const TestimonialSection = () => {
  const testimonials = [
    {
      icon: TbQuote,
      quote: "BlueLink's developers are sharp, dependable, and a real asset to our blockchain projects.",
      author: "Zhong",
      position: "Co-Founder",
      avatar: zhong
    },
    {
      icon: TbQuote,
      quote: "The team's expertise in DeFi development helped us launch our platform in record time. Their ongoing support has been invaluable.",
      author: "Michael Chen",
      position: "Founder at FinBlock",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      icon: TbQuote,
      quote: "Working with BlueLink was a seamless experience. Their smart contract audit identified critical issues before launch, potentially saving us millions.",
      author: "Jessica Miller",
      position: "CTO at SecureAssets",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="w-full bg-[#0F172A] py-10 md:py-20" id="blog">
      <div className="container mx-auto px-4 md:w-2/3 xl:w-1/2">
        <div className="text-center mb-4 md:mb-12 lg:mb-16">
          <Badge label="Testimonials" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with our blockchain solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <CarouselItem key={index} className="base-1/1">
                  <div className="bg-[#0b1623] border border-[#223043] rounded-lg p-8 flex flex-col items-center justify-center">
                    <div className="bg-[#14B8A633] p-3 rounded-full w-fit h-fit mb-6">
                      <Icon className="text-[#2DD4BF] text-2xl" />
                    </div>
                    <p className="text-white text-2xl font-medium italic mb-8">"{testimonial.quote}"</p>
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <h4 className="text-white font-medium">{testimonial.author}</h4>
                        <p className="text-gray-400 text-xs">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static bg-[#0b1623] border-[#223043] text-white hover:bg-[#223043]" />
            <CarouselNext className="relative static bg-[#0b1623] border-[#223043] text-white hover:bg-[#223043]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
