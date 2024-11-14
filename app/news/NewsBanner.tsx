import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Hero from "./Hero";

const NewsBanner = () => {
  return (
    <>
      <section className="flex flex-col   bg-[#1A1A1A] px-4 lg:px-20 xl:px-40 min-h-[20vh] justify-center my-10">
        <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
        <h3 className="text-[15px] bg-[#333333] rounded-sm mr-auto p-2 text-white">
          Featured Videos
        </h3>
        <h1 className="xl:text-4xl   lg:text-4xl md:text-4xl max-sm:text-xl text-white">
          Visual Insights for the Modern Viewer
        </h1>
      </div>
      <div>
        <Button variant="outline">
          <span className="text-[#98989A]">View All</span>
          <Image src="/Icon (1).png" alt="" width={15} height={15} />
        </Button>
      </div>
        </div>
    </section>
    <Hero/>
    </>
  
  );
};

export default NewsBanner;
