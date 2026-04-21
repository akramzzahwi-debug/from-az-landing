import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemBlock from "@/components/ProblemBlock";
import Pillars from "@/components/Pillars";
import GrowthChart from "@/components/GrowthChart";
import FeaturedClient from "@/components/FeaturedClient";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <ProblemBlock />
        <Pillars />
        <GrowthChart />
        <FeaturedClient />
        <Process />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
