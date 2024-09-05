import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/fragments/HeroSection";
import CardSection from "@/components/fragments/CardSection";
import AboutSection from "@/components/fragments/AboutSection";
import WhyChoose from "@/components/fragments/WhyChoose";
import ServicesSection from "@/components/fragments/ServicesSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection/>
      <CardSection/>
      <AboutSection/>
      <WhyChoose/>
      <ServicesSection/>
    </>
  );
}
