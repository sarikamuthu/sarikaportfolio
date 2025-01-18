"use client";

import React from "react";
import { Meteors } from "./ui/mateor";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

import { useState } from "react";
import MagicButton from "./MagicButton";

export default function MeteorsDemo() {
  const [copied, setCopied] = useState(false);

  const [copied2, setCopied2] = useState(false);

  const handleCopy = () => {
    const text = "sarikamuthu222@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleDownloadResume = () => {
    // Replace the URL with the actual path to your resume file
    const resumeUrl = "https://drive.google.com/file/d/1qIWhCfrT4YMP6wyzb6ZwD_fXF1bDpcbA/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Sarika_Resume.pdf"); // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    navigator.clipboard.writeText(resumeUrl);
    setCopied2(true);
  };

  return (
    <div className="py-40 w-full mb-20">
      <h1 className="heading">
      Ready to <span className="text-purple">Collaborate?</span>
      </h1>
      <div className="flex justify-center mt-24">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-40">
          <div className="">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Let&apos;s Build Something Amazing Together!
                </h1>

                <p className="font-normal text-base text-slate-500 mb-1 relative z-50">
                  Looking to start a new project or need help with an existing
                  one? Reach out to discuss ideas, collaborations, or just to
                  say hi! Let&apos;s turn your vision into reality.
                </p>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>

          <div className="">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Download My Resume
                </h1>

                <p className="font-normal text-base text-slate-500 mb-2 relative z-50">
                  Welcome! If you&apos;re considering my profile for an opportunity
                  at your esteemed company, you can download my resume here.
                  Let&apos;s discuss how I can contribute to your team&apos;s success.
                </p>

                <MagicButton
                  title={copied2 ? "Downloaded" : "My Resume"}
                  icon={<IoMdDownload />}
                  position="left"
                  handleClick={handleDownloadResume}
                  otherClasses="!bg-[#161A31]"
                />

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
