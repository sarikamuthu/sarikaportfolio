import GlobeDemo from "@/components/About";
import {TabsDemo} from "../components/StatsTab";
import Image from "next/image";
import Hero from "@/components/Hero";
// import { Grid } from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import MeteorsDemo from "@/components/Contact";
import About from "@/components/About";
import Publications from "@/components/Publications";
import SpaceJourney from "@/components/SpaceJourney";
export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <Hero />
      <About/>
      {/* <Grid/> */}
      {/* <GlobeDemo/> */}
      <RecentProjects/>
      {/* <TabsDemo/>
      <Experience/> */}
      <Publications/>
      <SpaceJourney />
      
      <MeteorsDemo/>

      <Footer/>
    </div>
  </main>
  );
}
