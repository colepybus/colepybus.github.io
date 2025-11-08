"use client";

import ProjectCard from "./components/ProjectCard.jsx";

import robotImage1 from "./lib/Robot.jpg";
import robotImage2 from "./lib/controller.jpg"; 

export default function Home() {

  const project1 = {
    title: "Fully Autonomous Coin Detecting Robot",
    subtitle: "ELEC 291 | UBC",
    date: "March 2025",
    images: [
      robotImage1,
      robotImage2,
    ],
    description: [
      "Programmed STM32 and EFM8 microcontrollers in C to coordinate an autonomous robot via radio communication, implementing UART protocols and resolving interrupt-based timing conflicts.",
      "Engineered hardware subsystems including H-bridge motor drivers, servo-actuated robotic arms, and electromagnets for precise motion control and coin collection.",
      "Designed and tuned a Colpitts oscillator-based metal detector, achieving consistent detection of Canadian coins through calibrated inductive sensing and software thresholding.",
      "Integrated multi-sensor feedback and control logic, validating system performance through iterative testing that demonstrated stable autonomous navigation and high coin-picking accuracy."
    ],
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