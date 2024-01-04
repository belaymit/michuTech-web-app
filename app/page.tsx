import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/GetApp";
import Hero from "@/components/Hero";
import MissionVision from '@/components/MissionVision';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <MissionVision/>
      <TeamSection/>
      <Guide />
      <Features />
      <Services/>
      <Partners/>
      <Testimonials/>
      <GetApp />
      
    </>
  )
}
