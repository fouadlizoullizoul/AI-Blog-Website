import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import NewsBanner from "./NewsBanner";

const page = () => {
  return (
    <>
     <section className="px-4 lg:px-20 xl:px-40 flex flex-col justify-around h-[100vh] my-20 lg:gap-20 md:gap-20">
      <div className="flex flex-col gap-5 flex-wrap">
        <div className="text-4xl">
          <h1>Today's Headlines: Stay</h1>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <h1 className="text-2xl ">Informed</h1>
          <span className="text-sm text-[#98989A]">
            Explore the latest news from around the world. We bring you
            up-to-the-minute updates on the most significant events, trends, and
            stories. Discover the world through our news coverage.
          </span>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap max-sm:my-4">
        <div>
          <Image src="/Image (10).png" alt="" width={300} height={300}/>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold">
              <h1>Global Climate Summit Addresses Urgent Climate Action</h1>
          </div>
          <div>
            <p className="text-sm text-[#98989A]">
            World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-3 flex-col">
              <h3 className="text-sm text-[#98989A]">Category</h3>
              <h2 className="text-sm">Environment</h2>
            </div>
            <div className="flex gap-3 flex-col">
              <h3 className="text-sm text-[#98989A]">Publication Date</h3>
              <h2 className="text-sm">October 10, 2023</h2>
            </div>
            <div className="flex gap-3 flex-col">
              <h3 className="text-sm text-[#98989A]">Author</h3>
              <h2 className="text-sm">Jane Smith</h2>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <Button variant="outline">
                  <Image src="/Icon (11).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">14K</span>
              </Button>
              <Button variant="outline">
                  <Image src="/Icon (12).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">207</span>
              </Button>
            </div>
            <div>
            <Button variant="outline">
                  <span className="text-[#98989A]">Read More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap lg:gap-3 md:gap-3 max-sm:gap-5">
        <div className="flex flex-col gap-2">
            <div>
              <Image src="/Image (11).png" alt="" width={400} height={300}/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-extralight text-sm">A Decisive Victory for Progressive Policies</h1>
              <h4 className="text-sm text-[#98989A]">Politics</h4>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-lg flex gap-1">
                  <Image src="/Icon (11).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">2.4K</span>
              </Button>
              <Button variant="outline" className="rounded-lg flex gap-1">
                  <Image src="/Icon (12).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">60</span>
              </Button>
              </div>
              <div>
              <Button variant="outline" >
                  <span className="text-[#98989A]">Read More</span>
                  <Image src="/Icon (1).png" alt="" width={15} height={15}/>
              </Button>
              </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div>
              <Image src="/Image (12).png" alt="" width={400} height={300}/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-extralight text-sm">Tech Giants Unveil Cutting-Edge AI Innovations</h1>
              <h4 className="text-sm text-[#98989A]">Technology</h4>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-lg flex gap-1">
                  <Image src="/Icon (11).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">6K</span>
              </Button>
              <Button variant="outline" className="rounded-lg flex gap-1">
                  <Image src="/Icon (12).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">90</span>
              </Button>
              </div>
              <div>
              <Button variant="outline" >
                  <span className="text-[#98989A]">Read More</span>
                  <Image src="/Icon (1).png" alt="" width={15} height={15}/>
              </Button>
              </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div>
              <Image src="/Image (13).png" alt="" width={400} height={300}/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-extralight text-sm">ACOVID-19 Variants</h1>
              <h4 className="text-sm text-[#98989A]">Health</h4>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-lg flex gap-1">
                  <Image src="/Icon (11).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">10K</span>
              </Button>
              <Button variant="outline" className="rounded-lg flex gap-1">
                  <Image src="/Icon (12).png" alt="" width={15} height={15}/>
                  <span className="text-[#98989A]">120</span>
              </Button>
              </div>
              <div>
              <Button variant="outline" >
                  <span className="text-[#98989A]">Read More</span>
                  <Image src="/Icon (1).png" alt="" width={15} height={15}/>
              </Button>
              </div>
            </div>
        </div>
      </div>
    </section>
    <NewsBanner/>
    </>
   
  );
};

export default page;
