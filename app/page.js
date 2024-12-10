'use client'
import HeroSection from "@/components/heroSection";
import Demo from '@/components/demo';
import CreditsSection from "@/components/credits"
import AITaskAutomation from "@/components/ai-task";
import ProblemStatement from "@/components/problem";
import Procedure from "@/components/procedure";
import ApplicationsFutureWork from "@/components/applicatins";

export default function Home() {
  return (
    <>
          <HeroSection />
          <AITaskAutomation/>
          <ProblemStatement/>
          <Procedure />
          <ApplicationsFutureWork />
          <Demo />
          <CreditsSection />
    </>
  );
}