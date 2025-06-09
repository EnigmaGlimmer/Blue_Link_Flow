
import React from 'react';
import AOS from "aos";
import { useEffect } from "react";

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BridgingTechnologySection from '@/components/BridgingTechnologySection';
import BlockchainSolutionsSection from '@/components/BlockchainSolutionsSection';
import TechnologyStackSection from '@/components/TechnologyStackSection';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <div className="w-full max-w-[var(--width-screen)] z-50 fixed top-0 backdrop-blur-xl">
        <Header />
      </div>
      <main className="mt-12 md:mt-16 lg:mt-20">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <HeroSection />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <BridgingTechnologySection />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <BlockchainSolutionsSection />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <TechnologyStackSection />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <TestimonialSection />
        </div>
        {/* <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <TeamSection />
        </div> */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="scroll-mt-32"
        >
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
