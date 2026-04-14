import React from "react";
import Styles from "../Styles";

const ProjectCard = ({ project = {} }) => {
    const {
        name = "Untitled Project",
        description = "Description is not available.",
        image,
        link,
        nda,
        tech = [],
    } = project || {};

    return (
        <div style={Styles.card}>
            {image ? (
                <img
                    src={image}
                    alt={name}
                    style={Styles.cardImage}
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                />
            ) : null}
            <div style={Styles.cardContent}>
                <h3 style={Styles.cardTitle}>{name}</h3>
                <p style={Styles.cardDescription}>{description}</p>
                {Array.isArray(tech) && tech.length > 0 ? (
                    <div style={Styles.techTags}>
                        {tech.map((t, i) => (
                            <span key={i} style={Styles.techTag}>
                                {t}
                            </span>
                        ))}
                    </div>
                ) : null}
                <div style={Styles.cardFooter}>
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={Styles.link}
                        >
                            View on GitLab →
                        </a>
                    ) : nda ? (
                        <span style={Styles.ndaBadge}>🔒 NDA Protected</span>
                    ) : (
                        <span style={Styles.privateBadge}>Private Repository</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;