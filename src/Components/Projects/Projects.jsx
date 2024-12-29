import React, { useRef } from 'react';
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollBy({ left: -300, behavior: "smooth" });
      } else if (direction === "right") {
        current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.wrapper}>
        <button className={styles.scrollButton} onClick={() => scroll("left")}>
          &#8592;
        </button>
        <div className={styles.projects} ref={scrollRef}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
        <button className={styles.scrollButton} onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </section>
  );
};
