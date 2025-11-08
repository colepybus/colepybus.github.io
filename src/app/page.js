"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard.jsx";

import robotImage1 from "./lib/Robot.jpg"; 

export default function Home() {

  const project1 = {
    title: "Fully Autonomous Coin Detecting Robot",
    subtitle: "ELEC 291",
    date: "March 2025",
    images: [
      robotImage1,
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: ["C++", "Git", "x86 Assembly"],
    documentationUrl: "#",
    codebaseUrl: "#",
    videoUrl: "#",
  };

  return (
    <div className="page-root">
      <div className="page-container">
        <h1>Cole Pybus</h1>
        <div className="divider"/>
        <h1>Engineering Portfolio</h1>
        <ProjectCard {...project1}/>
      </div>

      <style jsx>{`
        /* Wrapper that fills the viewport so we can center content */
        .page-root {
          min-height: 100vh;           /* fill the viewport height */
          display: flex;              /* enable flex centering */
          justify-content: center;    /* horizontal center */
          padding: 2rem;              /* prevents touching screen edges on small devices */
          box-sizing: border-box;
        }

        /* The centered content */
        .page-container {
          display: flex;
          flex-direction: column;
          width: 80%;
          max-width: 1200px;          /* optional: limit how wide it grows on large screens */
          background-color: blue;
        }

        /* Divider line under the heading */
        .page-container .divider {
          align-self: flex-start;                /* keep the line aligned with the heading */
          width: 160px;                           /* tweak to match Figma spacing */
          height: 2px;
          background-color: rgba(255, 255, 255, 0.9); /* subtle light line on dark bg */
          border-radius: 1px;                  /* space below divider before subtitle/content */
        }

        /* Heading: match Figma Heading (Pontano Sans Bold 32) */
        .page-container h1 {
          font-size: 32px;            /* Figma heading size */
          line-height: 1.2;
          font-weight: 700;           /* bold weight per Figma */
          /* font-family inherits from root (Pontano Sans) */
        }

        /* Paragraph: match Figma Paragraph (Pontano Sans 24) */
        .page-container p {
          font-size: 24px;            /* Figma paragraph size */
          line-height: 1.5;           /* comfortable reading line-height */
          margin: 0 0 1rem 0;
          color: inherit;
        }

        /* Responsive: use full width on very small screens */
        @media (max-width: 600px) {
          .page-container {
            width: 100%;
          }
          .page-container h1 {
            font-size: 28px; /* slightly smaller on small screens */
          }
          .page-container p {
            font-size: 18px; /* scale paragraphs down on small screens */
          }
        }
      `}</style>
    </div>
  );
}