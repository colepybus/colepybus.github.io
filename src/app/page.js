import Image from "next/image";
import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard.jsx";

export default function Home() {
  return (
    <div>
      <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          <ProjectCard/>
    </div>
  );
}