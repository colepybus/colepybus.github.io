"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard.jsx";

export default function Home() {
  return (
    <div className="page-root">
      <div className="page-container">
        <h1>Cole Pybus</h1>
        <ProjectCard />
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

        /* Heading: match Figma Heading (Pontano Sans Bold 32) */
        .page-container h1 {
          font-size: 32px;            /* Figma heading size */
          line-height: 1.2;
          font-weight: 700;           /* bold weight per Figma */
          margin: 0 0 0.5rem 0;
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