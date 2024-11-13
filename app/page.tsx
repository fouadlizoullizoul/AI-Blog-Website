import Footer from "./components/Footer";
import FutureTech from "./components/FutureTech/FutureTech";
import FutureTechMain from "./components/FutureTech/FutureTechMain";
import MainSection from "./components/FutureTechBaner/MainSection";
import SectionOne from "./components/FutureTechBaner/SectionOne";
import SectionTwo from "./components/FutureTechBaner/SectionTwo";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FutureTech/>
      <FutureTechMain/>
      <SectionOne/>
      <MainSection/>
      <SectionTwo/>
      <Footer/>
    </div>
  );
}
