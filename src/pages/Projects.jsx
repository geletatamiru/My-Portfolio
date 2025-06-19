import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import apple from "../assets/images/apple-project.png";
import library from "../assets/images/library-project.png";
import taskmanager from "../assets/images/task-manager.png";
import github from "../assets/images/github-analyzer.png";
import snake from "../assets/images/snake-project.png";
import './Projects.css';

const projectData = [
  {
    title: 'Library Management System',
    description: 'A system to manage book borrowing, returns, and inventory in a physical library with admin approval.',
    techStack: 'PHP • MySQL • HTML • CSS • JavaScript',
    liveLink: null,
    codeLink: 'https://github.com/geletatamiru/LibraryManagementSystem',
    image: library
  },
  {
    title: 'GitHub Profile Analyzer',
    description: 'A tool that analyzes GitHub user profiles and displays useful statistics, insights, and charts.',
    techStack: 'React • CSS • GitHub API',
    liveLink: 'https://github-profile-analyzer-ruddy.vercel.app',
    codeLink: 'https://github.com/geletatamiru/Github-Profile-Analyzer',
    image: github
  },
  // {
  //   title: 'Weather App',
  //   description: 'A simple weather application that shows current weather conditions using OpenWeatherMap API.',
  //   techStack: 'HTML • CSS • JavaScript • OpenWeatherMap API',
  //   liveLink: '#',
  //   codeLink: 'https://github.com/geletatamiru/weather-app',
  //   image: null
  // },
  {
    title: 'Apple Clone',
    description: 'A responsive UI clone of the Apple homepage to practice design and front-end skills.',
    techStack: 'React • CSS',
    liveLink: 'https://apple-clone-zeta-nine.vercel.app',
    codeLink: 'https://github.com/geletatamiru/Apple-clone',
    image: apple
  },
  {
    title: 'Task Manager',
    description: 'A task management web app inspired by Todoist, with filtering and scheduling capabilities.',
    techStack: 'React • Firebase • CSS',
    liveLink: 'https://task-manager-delta-bice.vercel.app',
    codeLink: 'https://github.com/geletatamiru/Task-Manager',
    image: taskmanager
  },
  {
    title: 'Snake Game',
    description: 'A classic Snake game built using HTML5 Canvas and JavaScript with full mobile and desktop support.',
    techStack: 'HTML • CSS • JavaScript',
    liveLink: 'https://snake-game-mu-ivory.vercel.app',
    codeLink: 'https://github.com/geletatamiru/Snake-Game',
    image: snake
  }
];


const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    const handleScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
