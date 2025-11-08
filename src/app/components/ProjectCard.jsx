"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPython, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiStrapi, SiAssemblyscript } from 'react-icons/si';

// A mapping of skill names to their corresponding icon components and colors.
// This is a scalable way to manage and add new skills.
const skillIcons = {
  'c++': { icon: <SiCplusplus />, color: '#00599C' },
  'git': { icon: <FaGitAlt />, color: '#F05032' },
  'react': { icon: <FaReact />, color: '#61DAFB' },
  'javascript': { icon: <SiJavascript />, color: '#F7DF1E' },
  'css': { icon: <FaCss3Alt />, color: '#1572B6' },
  'html': { icon: <FaHtml5 />, color: '#E34F26' },
  'python': { icon: <FaPython />, color: '#3776AB' },
  'nodejs': { icon: <FaNodeJs />, color: '#339933' },
  'x86 assembly': { icon: <SiAssemblyscript />, color: '#007ACC' },
  'figma': { icon: <FaFigma />, color: '#F24E1E' },
  'strapi': { icon: <SiStrapi />, color: '#2F2E8B' },
};

/**
 * SkillIcon component renders an icon and name for a given skill.
 * It looks up the icon and its specific color from the skillIcons map.
 */
const SkillIcon = ({ skill }) => {
  const skillKey = skill.toLowerCase();
  const { icon, color } = skillIcons[skillKey] || { icon: null, color: '#FFFFFF' };
  
  if (!icon) {
    return null; // Or a default icon
  }

  return (
    <div className="skill-item">
      {React.cloneElement(icon, { style: { color, marginRight: '8px' } })}
      <span>{skill}</span>
      <style jsx>{`
        .skill-item {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #E0E0E0;
        }
      `}</style>
    </div>
  );
};

/**
 * ProjectCard component displays a project with an image carousel, description, and skills.
 * @param {object} props - The properties for the project.
 * @param {string} props.title - The title of the project.
 * @param {string} props.subtitle - A subtitle or course number (e.g., "ELEC 291").
 * @param {string} props.date - The completion date of the project.
 * @param {string[]} props.images - An array of image URLs for the carousel.
 * @param {string} props.description - A detailed description of the project.
 * @param {string[]} props.skills - An array of skills used in the project.
 * @param {string} [props.documentationUrl] - Optional URL for project documentation.
 * @param {string} [props.codebaseUrl] - Optional URL for the project's codebase.
 * @param {string} [props.videoUrl] - Optional URL for the project's video.
 */
export default function ProjectCard({
  title,
  subtitle,
  date,
  images = [],
  description,
  skills = [],
  documentationUrl,
  codebaseUrl,
  videoUrl,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="project-card-container">
      {/* Photo Carousel Container */}
      <div className="photo-container">
        {images.length > 0 && (
          <Image
            src={images[currentIndex]}
            alt={`${title} - image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        )}
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={goToPrevious}><FaChevronLeft /></button>
            <button className="carousel-btn next" onClick={goToNext}><FaChevronRight /></button>
            <div className="dots-container">
              {images.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(slideIndex)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Text and Details Container */}
      <div className="text-container">
        <div className="header">
          <h2>{title} <span>{subtitle}</span></h2>
          <p className="date">{date}</p>
        </div>
        <p className="description">{description}</p>
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => <SkillIcon key={skill} skill={skill} />)}
          </div>
        </div>
        <div className="links">
          {documentationUrl && <a href={documentationUrl} target="_blank" rel="noopener noreferrer">Project Documentation</a>}
          {codebaseUrl && <a href={codebaseUrl} target="_blank" rel="noopener noreferrer">GitHub Codebase</a>}
          {videoUrl && <a href={videoUrl} target="_blank" rel="noopener noreferrer">Project Video</a>}
        </div>
      </div>

      <style jsx>{`
        .project-card-container {
          width: 100%;
          min-height: 570px;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: row;
          background-color: #1A1A1A; /* Dark background for the card */
          overflow: hidden; /* Ensures child elements conform to border-radius */
        }
        
        .photo-container {
          position: relative;
          width: 45%;
          height: 570px;
          border-right: 2px solid rgba(255, 255, 255, 0.2);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .photo-container:hover .carousel-btn {
          opacity: 1;
        }
        .prev { left: 10px; }
        .next { right: 10px; }

        .dots-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .dot.active {
          background-color: white;
        }
        
        .text-container {
          width: 55%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #FFFFFF;
        }
        
        .header h2 {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
        }
        .header h2 span {
          font-weight: 400;
          color: #B0B0B0;
        }
        .header .date {
          font-size: 16px;
          color: #A0A0A0;
          margin: 4px 0 0 0;
        }
        
        .description {
          font-size: 16px;
          line-height: 1.6;
          color: #D0D0D0;
          flex-grow: 1;
          margin-top: 24px;
        }

        .skills-section h3 {
          font-size: 18px;
          margin-bottom: 12px;
          color: #FFFFFF;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
        }
        
        .links {
          margin-top: 24px;
          display: flex;
          gap: 20px;
        }
        .links a {
          color: #1E90FF;
          text-decoration: none;
          font-weight: 600;
        }
        .links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .project-card-container {
            flex-direction: column;
            height: auto;
          }
          .photo-container, .text-container {
            width: 100%;
          }
          .photo-container {
            height: 300px; /* Adjust height for mobile */
            border-right: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </div>
  );
}