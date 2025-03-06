import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ImportantDates from "@/components/ImportantDates";
import OrganisedBy from "@/components/OrganisedBy";
import AboutConference from "@/components/AboutConference";
import HowToReach from "@/components/HowToReach";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
        <HeroSection />
        <ImportantDates />
        <OrganisedBy />
        <AboutConference />
        <HowToReach />
    </div>
  );
}
