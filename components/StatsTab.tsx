"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Leetcode",
      value: "Leetcode",
      content: (
        <div className="w-full overflow-hidden relative h-full bg-gray-800 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Leetcode Stats</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "InterviewBit",
      value: "InterviewBit",
      content: (
        <div className="w-full overflow-hidden relative h-full bg-gray-800 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>InterviewBit Stats</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "CodeForces",
      value: "CodeForces",
      content: (
        <div className="w-full overflow-hidden relative h-full bg-gray-800 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>CodeForces Stats</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "GeekForGeeks",
      value: "GeekForGeeks",
      content: (
        <div className="w-full overflow-hidden relative h-full bg-gray-800 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>GeekForGeeks Stats</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="py-20">
       <h1 className="heading">
        Journey of My {" "}
        <span className="text-purple">Competitive Programming</span>
      </h1>
      
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      
      <Tabs tabs={tabs} />
    </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/leetcodestats.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
