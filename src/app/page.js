"use client";

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import ProjectCard from "./components/ProjectCard.jsx";

import converterImage1 from "./lib/Top_Layer_2D.jpg";
import converterImage2 from "./lib/Top_Layer_3D.jpg";

import robotImage1 from "./lib/Robot.jpg";
import robotImage2 from "./lib/controller.jpg"; 

import controllerImage1 from "./lib/TempSensor.jpg";
import controllerImage2 from "./lib/Pulse.jpg";

import food4uImage1 from "./lib/food4u.jpeg";

import discoverLincolnImage1 from "./lib/discoverLincoln.jpeg";

import fluxImage from "./lib/DashboardDesktop.jpg";

import robotClawImage from "./lib/robotClaw.jpg";

import lab6Image from "./lib/lab6.jpg";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('hardware');

  const dabconverter = {
    type: "hardware",
    title: "DC-DC Dual Active Bridge Converter",
    subtitle: "EE 365 | EPFL",
    date: "June 2025",
    images: [
      converterImage1,
      converterImage2,
    ],
   "description": [
  "Derived phase-shift control parameters and calculated component values for the series inductor, H-bridge MOSFETs, and high-frequency transformer to step 50V down to 5V at a 160kHz switching frequency",
  "Designed a galvanically isolated Dual Active Bridge topology with two full H-bridges and a center transformer, selecting gate driver ICs and protection circuitry based on analytical current and voltage limit verification",
  "Translated full schematic into a multi-layer PCB layout in Altium Designer, applying best practices for high-frequency switching layout including ground plane management and component placement for EMI reduction",
  "Soldered and assembled all surface-mount and through-hole components, conducted staged hardware validation including gate timing verification and current limit checks to confirm switching behavior matched simulation"
],
    skills: ["Sensors", "Circuitry", "Prototyping", "Control", "Debugging", "Testing", "Calibration"],
  };

  const elec291project2 = {
    type: "hardware",
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
    skills: ["C", "Git", "Firmware", "Embedded", "Automation", "Sensors", "Circuitry"],
    documentationUrl: "https://drive.google.com/file/d/1LR_fHoD2zY1S5dqwhz8-en0VsioScQ09/view?usp=sharing",
    codebaseUrl: "https://github.com/colepybus/coin-detecting-robot-project",
    videoUrl: "https://youtu.be/r7DsbAJ_780?si=tZ12u6niXaYatLJn",
  };

  const elec291project1 = {
    type: "hardware",
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

  const food4u = {
    type: "software",
    title: "Food4U Web Application",
    subtitle: "Civiconnect",
    date: "August 2024",
    images: [
      food4uImage1,
    ],
    description: [
      "Engineered a full-stack dietary tracking application using Next.js and React to deliver personalized meal recommendations, integrating a Strapi CMS to filter restaurant data based on user-defined profiles, resulting in a highly tailored and efficient food discovery experience",
      "Architected a flexible content management system using Strapi to manage complex data relationships for users, restaurants, and dietary criteria, leveraging Lucid ERD for database schema design which ensured data integrity and supported scalable query performance",
      "Designed and constructed a responsive user interface with React and advanced CSS, meticulously translating high-fidelity Figma mockups into a pixel-perfect application that provides an intuitive workflow for managing dietary preferences and browsing personalized meal suggestions",
      "Implemented a robust version control strategy using Git and GitHub for collaborative development, managing feature branches, pull requests, and code reviews to maintain a high-quality, stable codebase throughout the project lifecycle from initial concept to deployment",
    ],
    skills: ["JavaScript", "React", "Git", "HTML", "CSS", "NodeJS", "Figma", "Strapi"],
    documentationUrl: "https://drive.google.com/file/d/1I6abcjxaLM_A27p0wAn5yZ8-kOVRaXOq/view?usp=sharing",
  };

  const discoverlincoln = {
    type: "software",
    title: "Discover Lincoln Web Application",
    subtitle: "Civiconnect",
    date: "May 2024",
    images: [
      discoverLincolnImage1,
    ],
    description: [
      "Engineered a dynamic tourism discovery platform using Next.js and React to provide users with interactive destination guides, leveraging a Strapi backend to serve real-time content on attractions and events, which improved content retrievability and user engagement",
      "Designed and implemented a responsive, component-based user interface using React and advanced CSS, faithfully translating intricate Figma design prototypes into a visually immersive web application that delivers a seamless user experience across desktop and mobile devices",
      "Architected a scalable content infrastructure with a headless Strapi CMS to manage diverse tourism data such as destinations, accommodations, and tour packages, ensuring efficient content updates and API-driven delivery to the front-end application without downtime",
      "Established a disciplined development workflow utilizing Git for version control and GitHub for collaborative code management, orchestrating feature development and issue tracking to ensure consistent code quality and successful project progression from concept to a live prototype",
    ],
    skills: ["JavaScript", "React", "Git", "HTML", "CSS", "NodeJS", "Figma", "Strapi"],
  };

  const robotclaw = {
    type: "hardware",
    title: "Two Arm Robotic Claw",
    subtitle: "APSC 101 | UBC",
    date: "February 2024",
    images: [
      robotClawImage,
    ],
    description: [
      "Spearheaded a multi-stage design process by conducting collaborative sketching, screening, and weighted decision matrix evaluations to select an optimal two-arm, double-hinge grabber design, resulting in a 26% higher performance score over the next best alternative",
      "Executed a comprehensive risk management strategy by creating a risk matrix and register to identify and classify 7 potential project failures, leading to the implementation of targeted mitigation actions like securing wiring which increased connection integrity by up to 67%",
      "Conducted rigorous physical experiments to validate design choices, performing torque analysis that confirmed the servo's 7.98 N·cm capacity was sufficient for all target objects and prototyping with elastics which proved a 70% reduction in object variety, directly informing the final design",
      "Programmed and integrated an autonomous retrieval system using an Arduino, servo, and sonar sensor to achieve object detection and grasping, successfully creating a comprehensive prototype capable of picking up 100% of the 15 designated objects prior to the final build",
    ],
    skills: ["C", "Electronics", "Circuitry", "Firmware", "Embedded", "Automation", "Calibration"],
    documentationUrl: "https://drive.google.com/file/d/1juI0G19sEPWpp3_ifer36zREllnJgHSp/view?usp=share_link",
  };

  const fluxproductivity = {
    type: "software",
    title: "Flux Productivity Web Application",
    subtitle: "Civiconnect",
    date: "October 2025",
    images: [
      fluxImage,
    ],
    description: [
      "Engineered a full-stack productivity application using Next.js and React to empower users to track habits, tasks, and work sessions, integrating a Strapi CMS to manage user data and provide actionable insights into personal efficiency and time management",
      "Architected a scalable backend content system using Strapi to manage complex data interdependencies between users, tasks, and habit logs, designing a data schema that guaranteed integrity and supported robust, high-performance analytical features",
      "Designed and developed a responsive and intuitive user interface with React and advanced CSS, meticulously translating high-fidelity Figma mockups into a pixel-perfect dashboard that provides a seamless experience for goal setting and progress visualization",
      "Implemented a disciplined version control workflow using Git and GitHub to manage collaborative development, utilizing feature branches and systematic code reviews to maintain a high-quality, stable codebase throughout the entire project lifecycle from conception to deployment",
    ],
    skills: ["JavaScript", "React", "Git", "HTML", "CSS", "NodeJS", "Figma", "Strapi"],
  };

  const capacitancemeter = {
    type: "hardware",
    title: "Capacitance Meter",
    subtitle: "ELEC 291 | UBC",
    date: "March 2025",
    images: [
      lab6Image,
    ],
    description: [
      "Engineered a precision capacitance meter by integrating an STM32 microcontroller with a 555 timer circuit, developing a system capable of accurately measuring and displaying capacitance values from 1 nF to 1 µF on a dedicated LCD screen",
      "Developed and deployed C-based firmware for the STM32 platform, programming hardware timers and input capture peripherals to precisely measure the frequency of the 555 astable oscillator for capacitance calculation",
      "Designed and constructed a complete hardware-software solution, interfacing an analog 555 timer circuit with the STM32's digital processing capabilities to successfully convert signal frequency into a direct capacitance reading, fulfilling all project requirements",
      "Demonstrated proficiency with ARM Cortex-M architecture by successfully adapting project requirements to the STM32 microcontroller, managing the entire project lifecycle from component selection and circuit assembly to final system demonstration",
    ],
    skills: ["C", "Git", "Firmware", "Embedded", "Circuitry", "Electronics", "Optimzation"],
    codebaseUrl: "https://github.com/colepybus/stm32-capacitance-meter"
  };

  const allProjects = [
    elec291project2,
    elec291project1,
    robotclaw,
    capacitancemeter,
    fluxproductivity,
    food4u,
    discoverlincoln
  ];

  const filteredProjects = allProjects.filter(project => project.type === activeFilter);

  return (
    <div className="page-root">
      <div className="page-container">
        <div className="title-container">
          <div className="top-container">
            <h1>Cole Pybus</h1>
            <div className="icon-container">
              <a href="https://linkedin.com/in/cole-pybus" target="_blank" rel="noopener noreferrer" className="icon">
                <FaLinkedin size="40px" color="white"/>
              </a>
              <a href="https://github.com/colepybus" target="_blank" rel="noopener noreferrer" className="icon">
                <FaGithub size="40px" color="white"/>
              </a>
              <a href="mailto:colepybus@gmail.com" className="icon">
                <FaEnvelope size="40px" color="white"/>
              </a>
            </div>
          </div>
          <div className="divider"/>
          <h1>Engineering Portfolio</h1>
        </div>
        <div className="intro-container">
          <p>I’m a third year electrical engineering student at the University of British Columbia in Vancouver, Canada</p>
          <p>Currently on an exchange semester in Switzerland at École Polytechnique Federale de Lausanne</p>
          <p>Was previously on a CO-OP term as a software engineering team lead at Civiconnect</p>
          <p>My projects below showcase my skills in computer, software, and electrical engineering</p>
        </div>

        {/* Toggle Switch */}
        <div className="toggle-container">
          <div className={`slider-bg ${activeFilter === 'software' ? 'slide-right' : ''}`} />
          
          <button 
            className={`toggle-btn ${activeFilter === 'hardware' ? 'active' : ''}`}
            onClick={() => setActiveFilter('hardware')}
          >
            Hardware
          </button>
          <button 
            className={`toggle-btn ${activeFilter === 'software' ? 'active' : ''}`}
            onClick={() => setActiveFilter('software')}
          >
            Software
          </button>
        </div>

        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
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
          margin-bottom: 0px;
        }

        .top-container{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .icon-container {
          display: flex;
          gap: 16px; /* Space between icons */
        }
        
        /* Toggle Switch Styles */
        .toggle-container {
          position: relative;
          display: flex;
          background-color: #2A2A2A;
          /* CHANGE: Reduced border radius for rectangular look */
          border-radius: 12px;
          padding: 4px;
          /* CHANGE: Fixed width for consistent sliding calculations */
          width: 300px; 
          height: 48px;
          margin: 16px auto 24px auto; 
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* The sliding background pill */
        .slider-bg {
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px); /* Half width minus padding */
          height: calc(100% - 8px);
          background-color: #FFFFFF;
          /* CHANGE: Reduced border radius for rectangular look */
          border-radius: 8px;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 1; /* Behind the text */
        }

        .slider-bg.slide-right {
          transform: translateX(100%); /* Moves exactly one width over */
        }

        .toggle-btn {
          flex: 1;
          position: relative;
          z-index: 2; /* Text sits on top */
          background: transparent;
          border: none;
          color: #A0A0A0;
          font-family: inherit;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .toggle-btn.active {
          color: #000000;
        }

        .toggle-btn:hover:not(.active) {
          color: #FFFFFF;
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