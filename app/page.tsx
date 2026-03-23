import Image from "next/image";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Whyus from "@/components/home/Whyus";
import Testimonials from "@/components/home/Testimonials"; // Fixed: added 'from'
import Work from "@/components/home/Work";
import Container from "@/components/common/Container";
import CTA from '@/components/home/CTA'
export default function Home() {
  return (
    <div>
      <Hero />
      <Container/>
      <Work />
       <Container/>
      <Services />
       <Container/>
      <Whyus />
       <Container/>
      <Process />
       <Container/>
      <Testimonials />
       <Container/>
       <CTA/>
       <Container/>
    </div>
  );
}
