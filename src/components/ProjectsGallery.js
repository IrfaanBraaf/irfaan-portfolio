import React from "react";
import ProjectCard from "./ProjectCard";
import Styles from "../Styles";

const ProjectsGallery = ({ projects }) => {
  return (
    <div style={Styles.galleryContainer}>
      <div style={Styles.galleryHeader}>
        <span>══════════════════════════════════════════════════════════</span>
        <span style={Styles.galleryTitle}>PROJECTS</span>
        <span>══════════════════════════════════════════════════════════</span>
      </div>
      <div style={Styles.cardGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;