import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (

      <section className="px-4 lg:px-20 xl:px-40   ">
      {/* LEFT SIDE*/}
      <div className="xl:flex lg:flex md:flex l">
        <div className="flex flex-col xl:w-1/2  lg:border-r-[1px] justify-between  py-9  md:border-r-[1px] sm:border-r-none">
          {/* TOP SECTION */}
          <div className="flex flex-col gap-9  ">
            <h3 className="text-[#98989A] font-light uppercase text-[12px]">
              Your Journey Tomorrow Begins Here
            </h3>
            <h1 className="text-4xl">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#98989A] text-[10px] w-[80%]">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          {/* BOTOM SECTION */}
          <div className="flex  items-center justify-between w-[70%]  my-7  border-gray-200 ">
            <div>
              <h2>
                300{" "}
                <span className="text-[#FFD11A] text-[20px] font-semibold">
                  +
                </span>
              </h2>
              <p className="text-[#98989A] text-[10px]">Resources available</p>
            </div>
            <div>
              <h2>
                12k{" "}
                <span className="text-[#FFD11A] text-[20px] font-semibold">
                  +
                </span>
              </h2>
              <p className="text-[#98989A] text-[10px]">Total Downloads </p>
            </div>
            <div>
              <h2>
                10k{" "}
                <span className="text-[#FFD11A] text-[20px] font-semibold">
                  +
                </span>
              </h2>
              <p className="text-[#98989A] text-[10px]">Active Users </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2  flex flex-col gap-3 ">
          <Image src="/Abstract Design.png" alt="" width={240} height={360} />
          <div className="flex flex-col gap-3  w-full  px-10">
            <div className="flex space-x-[-10px] bg-[#262626] p-1 rounded-full w-max">
              <Image src="/Image.png" alt="" width={40} height={40} />
              <Image src="/Image (1).png" alt="" width={40} height={40} />
              <Image src="/Image (2).png" alt="" width={40} height={40} />
              <Image src="/Image (3).png" alt="" width={40} height={40} />
            </div>
            <h2>
              Expolore 1000 <span>+</span> resources
            </h2>
            <p className="text-[#98989A] font-light  text-[12px]">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <Button variant="outline" className="flex items-center">
              Explore Resources
              <span>
                <Image src="/Icon (1).png" alt="" width={14} height={14} />
              </span>
            </Button>
          </div>
        </div>
      </div>



      <div className="justify-between flex flex-wrap ">
        <div className="flex gap-2 flex-col my-7">
          <div>
            <Image src="/Icon (2).png" alt="" width={20} height={20} />
          </div>
          <div className="flex  items-center xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 max-sm:gap-[15rem]">
            <div>
              <h2>Latest News Updates</h2>
              <p className="text-[#98989A] text-[10px]">Stay Current</p>
            </div>
            <div>
              <Image src="/Button.png" alt="" width={25} height={25} className="max-sm:w-[2.5rem]"/>
            </div>
          </div>
          <div>
            <p className="text-[#98989A] text-[14px] font-[100]">
              Over 1000 arcticles published monthly
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col my-7">
          <div>
            <Image src="/Group (1).png" alt="" width={20} height={20} />
          </div>
          <div className=" flex items-center xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 max-sm:gap-[15rem]">
            <div>
              <h2>Expert Contributors</h2>
              <p className="text-[#98989A] text-[10px]">Trusted Insights</p>
            </div>
            <div>
              <Image src="/Button.png" alt="" width={25} height={25} className="max-sm:w-[2.5rem]"/>
            </div>
          </div>
          <div>
            <p className="text-[#98989A] text-[14px] font-[100]">
              50+ renowned AI experts on our team
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col my-7">
          <div>
            <Image src="/Icon (3).png" alt="" width={20} height={20} />
          </div>
          <div className=" flex items-center xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 max-sm:gap-[15rem]">
            <div>
              <h2>Global Readership</h2>
              <p className="text-[#98989A] text-[10px]">Worldwide Impact</p>
            </div>
            <div>
              <Image src="/Button.png" alt="" width={25} height={25} className="max-sm:w-[2.5rem]"/>
            </div>
          </div>
          <div>
            <p className="text-[#98989A] text-[14px] font-[100]">
              2 million monthly readers
            </p>
          </div>
        </div>
      </div>
    </section>

  
  );
};

export default Hero;
