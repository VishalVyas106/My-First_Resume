import React from 'react';
import { 
  FaGithub, 
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import {  FaExternalLinkAlt, FaTools } from 'react-icons/fa';
// import { IoAdd } from 'react-icons/io5';
import { IoAdd } from 'react-icons/io5';
import { BsCode } from 'react-icons/bs';

const Resume = () => {
  const projects = [
    {
      title: "Rajwen",
      description: "Modern restaurant platform featuring real-time ordering, secure payment processing, and an intuitive admin dashboard for menu management.",
      image: "Rajwen.jpg",
      techStack: ["React.js", "Node.js", "Express", "Firebase", "Stripe"],
      github: "public\Rajwen.jpg",
      live: "https://rajwen.demo",
    },
    {
      title: "Raaaz.io",
      description: "Real-time chat application with features like instant messaging, and user presence indicators.",
      image: "Raaaz.io.png",
      techStack: ["Socket.io", "Node.js", "MongoDB", "Express", "JWT"],
      github: "public\Raaaz.io.png",
      live: "https://raaaz.io",
    },
    {
      title: "Uber Clone",
      description: "Ride-booking app with real-time tracking, user authentication, and payment integration using React, Node.js, and MongoDB. ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4fpHeifo1l4Q7oI0kpRN-sS8W6ixi7oPuA&s",
      techStack: ["React", "node", "MongoDB", "next", "WebRTC"],
      github: "https://github.com/username/uber-clone",
      live: "https://uber-clone.demo",
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Image and Title */}
        <div className="relative">
          <img 
            src="me2.jpg"
            alt="Profile" 
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black/80 backdrop-blur-sm w-full">
            <h3 className="text-sm uppercase tracking-wider">FULL STACK</h3>
            <h2 className="text-xl font-bold mt-1">WEB DEVELOPER</h2>
            <p className="mt-2">Bachelor In Computer</p>
          </div>
        </div>

        {/* Right Column - Personal Info */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter">VISHAL VYAS</h1>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <FaPhone className="text-sm" />
              <p>9726270553</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-sm" />
              <p>vyasvishal.work@gmail.com</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
          
          <div className="border border-gray-950 rounded-lg p-4 mt-6">
            <div className="flex items-center gap-2 mb-3">
              <IoAdd className="text-white" />
              <h3 className="uppercase tracking-wider">About Me</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
            Hi, I'm Vyas Vishal, a Full Stack Software Engineer with extensive experience in developing and deploying end-to-end web applications. I've built numerous full-stack applications that address real-life problems and are actively used by real-world users. With strong expertise in full-stack development, I have successfully deployed multiple applications on the cloud. While I am a fresher, my hands-on experience in building impactful projects demonstrates my ability to deliver practical and efficient solutions.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <BsCode className="text-white" />
            <h3 className="uppercase tracking-wider">SKILLS</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Front-End", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
              { title: "Back-End", skills: ["Node.js", "Express.js"] },
              { title: "Database", skills: ["MongoDB", "SQL", "Firebase"] },
              { title: "Soft Skills", skills: ["Problem Solving", "Creative Thinking"] }
            ].map((category, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-gray-300 font-medium">{category.title}</h4>
                {category.skills.map((skill, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">{skill}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <IoAdd className="text-white" />
            <h3 className="uppercase tracking-wider">EDUCATION</h3>
          </div>
          
          <div>
            <p className="text-gray-400">2023/2026</p>
            <div className="flex items-center gap-4 mt-1">
              <p>Ganpat University [GUNI]</p>
              <div className="flex-1 border-b border-gray-800"></div>
              <p>BCA</p>
            </div>
            <p className="text-sm text-gray-400 mt-2">Ampics</p>
          </div>
        </div>

        {/* Projects Section - Full Width */}
        <div className="col-span-1 md:col-span-2 border-2 border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2  rounded-lg">
          <IoAdd className="text-white text-xl" />
        </div>
        <h3 className="text-xl font-bold tracking-wider text-white">PROJECTS</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border-2 border-gray-800 rounded-lg overflow-hidden transition-transform "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-5">
              <h4 className="font-bold text-xl mb-3 text-white">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaTools className="text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">
                    Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* Certifications Section - Full Width */}
        <div className="col-span-1 md:col-span-2 border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <IoAdd className="text-white" />
            <h3 className="uppercase tracking-wider">CERTIFICATIONS & INTERNSHIPS</h3>
          </div>
          
          <div>
            <h4 className="font-semibold">J.P. Morgan Chase</h4>
            <p className="text-gray-400">Virtual Internship • One Month</p>
            <p className="text-sm text-gray-400 mt-2">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;