import React from "react";
import ProjectCard from "./ProjectCard";
import Styles from "../Styles";
import SectionHeader from "./SectionHeader";

const ProjectsGallery = ({ projects }) => {
    const safeProjects = Array.isArray(projects) ? projects : [];

    return (
        <div style={Styles.galleryContainer}>
            <SectionHeader title="PROJECTS" />
            <div style={Styles.cardGrid} className="project-grid">
                {safeProjects.length > 0 ? (
                    safeProjects.map((project) => (
                        <ProjectCard key={project?.id || project?.name || Math.random()} project={project} />
                    ))
                ) : (
                    <div style={{ color: "#ccffcc", padding: "1rem" }}>
                        No projects are available right now. Please try again later.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsGallery;