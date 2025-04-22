import React from 'react';

export default function Project({ title, image, description, repo, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a href={repo} target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href={demo} target="_blank" rel="noopener noreferrer"> Live Demo</a>
      </div>
    </div>
  );
}