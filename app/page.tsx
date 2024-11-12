import FutureTech from "./components/FutureTech/FutureTech";
import FutureTechMain from "./components/FutureTech/FutureTechMain";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FutureTech/>
      <FutureTechMain/>
    </div>
  );
}
