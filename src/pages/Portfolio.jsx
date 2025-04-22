import React from 'react';
import Project from '../components/Project';
import musicImg from '../assets/IMG_8548.jpg';
import mixerImg from '../assets/IMG_8452.jpg';
import blogImg from '../assets/trees.png';

const projects = [
  {
    title: "Music Connection App",
    image: musicImg,
    description: "Fullstack app that helps users discover artists and music via the Discogs API.",
    repo: "https://github.com/Prismryu/music-connection",
    demo: "https://music-connection.netlify.app"
  },
  {
    title: "Color Mixer",
    image: mixerImg,
    description: "Play with RGB sliders to create custom colors.",
    repo: "https://github.com/Prismryu/color-mixer",
    demo: "https://color-mixer.netlify.app"
  },
  {
    title: "Personal Blog",
    image: blogImg,
    description: "Submit and save blog entries with localStorage, toggle dark/light mode.",
    repo: "https://github.com/Prismryu/personal-blog",
    demo: "https://my-personal-blog.netlify.app"
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}