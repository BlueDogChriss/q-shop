import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Homepage/Navbar";
import { About } from "@/components/Homepage/About";
import { Hero } from "@/components/Homepage/Hero";
import { ScrollToTop } from "@/components/Homepage/ScrollToTop";
import { Footer } from "@/components/Homepage/Footer";
import { FAQ } from "@/components/Homepage/FAQ";
import { Newsletter } from "@/components/Homepage/Newsletter";
import { Pricing } from "@/components/Homepage/Pricing";
import { Team } from "@/components/Homepage/Team";
import { Testimonials } from "@/components/Homepage/Testimonials";
import { Cta } from "@/components/Homepage/Cta";
import { Services } from "@/components/Homepage/Services";
import { Features } from "@/components/Homepage/Features";
import { HowItWorks } from "@/components/Homepage/HowItWorks";

export default function Home() {
  return (
    <>
    <Navbar /> 
    <Hero/>
    <About />
    <HowItWorks />
    <Features />
    <Services />
    <Cta />
    <Testimonials />
    <Team />
    <Pricing />
    <Newsletter />
    <FAQ/>
    <Footer/>
    <ScrollToTop/>
    </>
  );
}
