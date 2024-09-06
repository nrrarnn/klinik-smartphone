import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/fragments/HeroSection";
import AboutSection from "@/components/fragments/AboutSection";
import WhyChoose from "@/components/fragments/WhyChoose";
import ServicesSection from "@/components/fragments/ServicesSection";
import Testimoni from "@/components/fragments/Testimoni";
import FAQSection from "@/components/fragments/FAQSection";
import ContactSection from "@/components/fragments/ContactSection";
import CardSection from "@/components/fragments/CardSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection/>
      <CardSection/>
      <AboutSection/>
      <WhyChoose/>
      <ServicesSection/>
      <Testimoni/>
      <FAQSection/>
      {/* <ContactSection/> */}
    </>
  );
}
