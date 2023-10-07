import React from "react";

export default function ProjectLink({ link }) {
  const hasLink = link && link.length > 0;

  if (hasLink) {
    return (
      <div className="project-link" >
        <a href={link[0]} target="_blank" rel="noopener noreferrer">
         👁️‍🗨️​ Voir le projet en ligne ➔
        </a>
      </div>
    );
  }

  return null;
}