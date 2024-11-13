import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <>
    <section className="flex flex-col xl:flex-row lg:flex-row justify-between px-4 sm:px-10 lg:px-20 xl:px-40 my-7 min-h-[80vh] items-center gap-10">
      <div className="flex flex-col justify-center flex-1 gap-8 order-2 xl:order-1 lg:order-1 mt-8 xl:mt-0 lg:mt-0">
        <div className="flex flex-col gap-6">
          <Image
            src="/iconn.png"
            width={30}
            height={30}
            alt=""
            className="w-[2rem]"
          />
          <h3 className="text-lg md:text-xl font-medium">Ebooks</h3>
          <p className="text-sm text-[#98989A]">
            Explore our collection of ebooks covering a wide spectrum of future
            technology topics.
          </p>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 text-sm md:text-base"
          >
            Download Ebooks Now
            <Image src="/Icon (1).png" alt="" width={15} height={15} />
          </Button>
          <div className="flex gap-3 max-sm:gap-[6rem] items-center bg-[#1A1A1A] py-4 px-3 rounded-lg max-w-full sm:max-w-[45%] lg:w-[60%]">
            <div className="flex flex-col gap-2 ">
              <p className="text-[#98989A] text-sm">Downloaded By</p>
              <h2>10K + Users</h2>
            </div>
            <div className="flex -space-x-2">
              <Image src="/Image.png" alt="" width={40} height={40} />
              <Image src="/Image (1).png" alt="" width={40} height={40} />
              <Image src="/Image (2).png" alt="" width={40} height={40} />
              <Image src="/Image (3).png" alt="" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 flex-1 order-1 xl:order-2 lg:order-2">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h1 className="text-lg md:text-xl font-medium md:w-1/2 max-sm:uppercase max-sm:w-full">Variety of Topics</h1>
          <p className="text-sm text-[#98989A] md:flex-2">
            Topics include AI in education (25%), renewable energy (20%),
            healthcare (15%), space exploration (25%), and biotechnology (15%).
          </p>
        </div>
        <div>
          <Image src="/Image (4).png" alt="" layout="responsive" width={700} height={100} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col gap-2 bg-[#262626] px-2 py-3 rounded-md flex-2">
              <p className="text-sm text-[#98989A]">Total Ebooks</p>
              <h2 className="font-medium">Over 100 ebooks</h2>
            </div>
            <div className="flex justify-between items-center bg-[#262626] rounded-md px-2 py-3 flex-1">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#98989A]">Download Formats</p>
                <h2 className="font-medium">PDF format for access</h2>
              </div>
              <div>
                <Button variant="outline">
                  <h1 className="text-sm text-[#98989A]">Preview</h1>
                  <Image src="/icon (6).png" alt="" width={10} height={10} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-[#262626] rounded-md px-2 py-3">
            <p className="text-sm text-[#98989A]">Average Author Expertise</p>
            <h2 className="font-medium text-sm md:text-base">
              Ebooks are authored by renowned experts with an average of 15
              years of experience
            </h2>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default MainSection;
