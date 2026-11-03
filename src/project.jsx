import React,{useState, useEffect} from 'react';
import Navbar from './navbar.jsx';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaPhp, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";

const iconMapping = {
  FaReact,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  IoLogoCss3
};

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || '';

    fetch(`${baseUrl}/projects`) 
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProjectList(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-green-400 flex items-center justify-center font-bold">
        Loading Projects...
      </div>
    );
  }


  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <Navbar />

      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-green-500">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of the applications, tools, and systems I have built or contributed to.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-2">
            Featured Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col justify-between hover:border-gray-600 transition-all duration-300"
              >
              
                {project.image_url && (
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-md bg-gray-900 border border-gray-700/50">
                    <img 
                      src={project.image_url} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="text-xl font-bold tracking-wide text-gray-100">
                      {project.title}
                    </h4>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded shrink-0 ${
                      project.status === "Completed" || project.status === "Active"
                        ? "bg-green-950 text-green-400 border border-green-500/30" 
                        : "bg-amber-950 text-amber-400 border border-amber-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, tIndex) => {
                      const IconComponent = iconMapping[tech.icon];
                      return (
                        <span 
                          key={tIndex} 
                          className="flex items-center gap-1.5 text-xs font-medium bg-gray-900 text-green-400 border border-gray-700 px-2.5 py-1 rounded-full"
                        >
                          {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>


                  <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                    {project.github_link && (
                      <a 
                        href={project.github_link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-green-400 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live_link && (
                      <a 
                        href={project.live_link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-semibold text-green-400 hover:underline transition-all"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md border border-gray-700 text-center max-w-2xl mx-auto my-8">
          <h1 className="text-2xl font-extrabold text-amber-500 tracking-wide uppercase mb-3">
            Disclaimer!
          </h1>
          <h3 className="text-base text-gray-300 font-medium leading-relaxed">
            This Are Selected few of my projects To view all other remaining
            <a href="https://github.com/Abisai367" className="text-green-400 hover:text-green-300 underline font-semibold transition-colors duration-200 ml-1">
              click here
            </a>
             To check on Github
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Projects;
