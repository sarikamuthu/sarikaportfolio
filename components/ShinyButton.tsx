"use client";

import React, { useState } from "react";
import { ButtonsCard } from "@/components/magicui/shiny-button";

import { SiChatbot } from "react-icons/si";

const ShinyButtonDemo: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "14px",
          left: "10px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleIframe}
          className="shadow-inset-0-0-0-2px-#616467 px-5 py-3 rounded-full tracking-widest font-bold bg-black-300 hover:bg-616467 hover:text-white dark:text-neutral-200 transition duration-200 flex items-center justify-center"
          style={{
            display: "inline-flex", // Ensure button behaves as a flex container
            alignItems: "center", // Center items vertically
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <SiChatbot style={{ fontSize: "1.6em", verticalAlign: "middle" }} />{" "}
            {/* Adjust font size and vertical alignment */}
            {/* <span className="align-middle text-lg">ChatBot</span> */}
          </div>
        </button>
      </div>

      {showIframe && (
        <>
          <div className="blur-background"></div>
          <div className="iframe-popup">
            <span className="close-btn" onClick={toggleIframe}>
              &times;
            </span>
            <iframe
               src="https://www.chatbase.co/chatbot-iframe/e6tDX75caScJ2d22b4xY1"
              //src="https://www.chatbase.co/chatbot-iframe/xVIH8t1OfvdHHyZyMx29j"
              width="100%"
              height="500px"
              style={{ border: "none", borderRadius: "15px" }} // Rounded corners for iframe
              frameBorder="0"
            ></iframe>
          </div>
        </>
      )}

      <style jsx>{`
        .iframe-popup {
          position: fixed;
          top: 15%;
          left: 0;
          width: 40%; // Adjust width as needed
          height: 100%;
          z-index: 2000;
          display: flex;
          align-items: flex-start; // Align popup to the top
          justify-content: center; // Center popup horizontally
          padding: 30px;
        }

        .blur-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); // Semi-transparent black background
          backdrop-filter: blur(10px); // Blur effect
          z-index: 1500;
        }

        .close-btn {
          position: fixed;
          top: 25px;
          right: 30px;
          cursor: pointer;
          font-size: 24px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ShinyButtonDemo;
