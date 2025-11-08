"use client";

import ProjectCard from "./components/ProjectCard.jsx";

import robotImage1 from "./lib/Robot.jpg";
import robotImage2 from "./lib/controller.jpg"; 

import controllerImage1 from "./lib/TempSensor.jpg";
import controllerImage2 from "./lib/Pulse.jpg";

export default function Home() {

  const project1 = {
    title: "Autonomous Coin Detecting Robot",
    subtitle: "ELEC 291 | UBC",
    date: "March 2025",
    images: [
      robotImage1,
      robotImage2,
    ],
    description: [
      "Programmed STM32 and EFM8 microcontrollers in C to coordinate an autonomous robot via radio communication, implementing UART protocols and resolving interrupt-based timing conflicts",
      "Engineered hardware subsystems including H-bridge motor drivers, servo-actuated robotic arms, and electromagnets for precise motion control and coin collection",
      "Designed and tuned a Colpitts oscillator-based metal detector, achieving consistent detection of Canadian coins through calibrated inductive sensing and software thresholding",
      "Integrated multi-sensor feedback and control logic, validating system performance through iterative testing that demonstrated stable autonomous navigation and high coin-picking accuracy"
    ],
    skills: ["C++", "Git", "Firmware", "Embedded", "Automation", "Sensors", "Circuitry"],
    documentationUrl: "https://drive.google.com/file/d/1LR_fHoD2zY1S5dqwhz8-en0VsioScQ09/view?usp=sharing",
    codebaseUrl: "https://github.com/colepybus/coin-detecting-robot-project",
    videoUrl: "https://youtu.be/r7DsbAJ_780?si=tZ12u6niXaYatLJn",
  };

  const project2 = {
    title: "Reflow Oven Temperature Control System",
    subtitle: "ELEC 291 | UBC",
    date: "February 2025",
    images: [
      controllerImage1,
      controllerImage2,
    ],
    description: [
      "Developed firmware in 8051 Assembly to control a reflow oven via a finite state machine, managing temperature ramp-up, soak, and reflow stages with precise timing and safety abort conditions resulting in accurate PCB soldering within 3 degrees Celsius tolerance",
      "Engineered an analog front-end circuit with an OP07 op-amp for thermocouple voltage amplification and LM335 cold-junction compensation, performing resistor value calculations and validation tests to ensure reliable sensor readings across 25 to 240°C",
      "Implemented serial communication and Python-based data visualization, writing a program that received live temperature data from the microcontroller, generated a real-time strip chart using matplotlib, and issued mobile notifications via the Twilio API",
      "Integrated digital control and hardware testing by designing multiplexed pushbutton inputs with debouncing and safety constraints, verifying complete system operation through iterative bench tests and successful reflow of EFM8 PCB assemblies"
    ],
    skills: ["Assembly", "Python", "Git", "Firmware", "Embedded", "Circuitry", "Control"],
    documentationUrl: "https://drive.google.com/file/d/1WaSEEIW4RzVoRPQ2Ls94765pbYgXjYRl/view?usp=sharing",
    codebaseUrl: "https://github.com/colepybus/microwave-oven-reflow-controller"
  };

  return (
    <div className="page-root">
      <div className="page-container">
        <div className="title-container">
          <h1>Cole Pybus</h1>
          <div className="divider"/>
          <h1>Engineering Portfolio</h1>
        </div>
        <div className="intro-container">
          <p>I’m a third year electrical engineering student at the University of British Columbia in Vancouver, Canada</p>
          <p>Currently on a CO-OP term as a software engineering team lead at Civiconnect</p>
          <p>My projects below showcase my skills in computer, software, and electrical engineering</p>
        </div>
        <div className="projects-container">
          <ProjectCard {...project1}/>
          <ProjectCard {...project2}/>
        </div>
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
        }

        .title-container {
          margin-bottom: 32px;
        }

        .intro-container{
          margin-bottom: 32px;
        }

        .projects-container{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 40px;
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
          font-size: 16px;            /* Figma paragraph size */
          line-height: 1.5;           /* comfortable reading line-height */
          margin: 0 0 0.4rem 0;
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