import Image from "next/image";
import React from "react";

const FutureTechMain = () => {
  return (
    <section className="xl:px-40 lg:px-20 px-4 my-10">
      <div className="xl:flex lg:flex md:flex justify-between flex-1 flex-wrap xl:gap-3 lg:gap-5 md:gap-5  items-center ">
        <div className="flex flex-col xl:gap-3 lg:gap-6 md:gap-5 max-sm:gap-2">
          <Image
            src="/Icon (4).png"
            alt=""
            width={25}
            height={25}
            className="xl:w-[2rem] lg:w-[3rem]"
          />
          <h2 className="xl:text-3xl lg:text-3xl md:text-xl">
            Future Technology Blog
          </h2>
          <p className="text-[#98989A] text-sm">
            Stay informed with our blog section dedicated to future technology.{" "}
          </p>
        </div>
        <div className="flex-1 max-sm:mt-2">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <div className="bg-[#1A1A1A] rounded-sm p-8 flex flex-col gap-3">
              <h3 className="xl:text-xl">Quantity</h3>
              <p className="text-sm  text-[#98989A]">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-sm p-8 flex flex-col gap-3">
              <h3 className="xl:text-xl">Variety</h3>
              <p className="text-sm  text-[#98989A]">
                Articles cover fields like AI, robotics, biotechnology, and
                more.{" "}
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-sm p-8 flex flex-col gap-3">
              <h3 className="xl:text-xl">Frequency</h3>
              <p className="text-sm  text-[#98989A]">
                Fresh content added daily to keep you up to date.{" "}
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-sm p-8 flex flex-col gap-3">
              <h3 className="xl:text-xl">Authoritative</h3>
              <p className="text-sm  text-[#98989A]">
                Written by our team of tech experts and industry professionals.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechMain;
