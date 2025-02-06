import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        name: "VertiTask",
        image: "https://github.com/user-attachments/assets/8285b21e-bca7-4616-adc2-b2f9ca919a3f",
        liveLink: "https://vertitask.web.app",
        githubLink: "https://github.com/yourusername/vertitask-client", // Replace with your actual repo
        techStack: "React.js, Tailwind CSS, Axios, Stripe.js, Node.js, Express.js, MongoDB, Firebase",
        description: "A powerful admin dashboard for payroll and task management.",
        challenges: "Stripe integration, real-time updates, role-based authentication.",
        improvements: "Add advanced analytics and reporting features, optimize payment gateway.",
    },
    {
        name: "ScarletTable",
        image: "https://github.com/user-attachments/assets/01c6403e-f6dc-46ed-9fc5-e627272d3702",
        liveLink: "https://scarlettable-5165e.web.app",
        githubLink: "https://github.com/yourusername/scarlettable-client", // Replace with your actual repo
        techStack: "React.js, TailwindCSS, Node.js, Express.js, MongoDB, Firebase",
        description: "A restaurant management app for food ordering and customer management.",
        challenges: "Creating dynamic menus, handling group orders, responsive design.",
        improvements: "Improve menu filtering options, add loyalty features for customers.",
    },
    {
        name: "EquiSports",
        image: "https://github.com/user-attachments/assets/8c28f279-9a84-4ef1-96b1-6ee19f0ed9c6",
        liveLink: "https://equisports-aryan.web.app/",
        githubLink: "https://github.com/yourusername/equisports-client", // Replace with your actual repo
        techStack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase Authentication",
        description: "A web app for managing sports equipment with interactive animations.",
        challenges: "Securing user data, implementing interactive animations, real-time updates.",
        improvements: "Expand equipment categories, enhance animations and user experience.",
    },
];

const ProjectCard = ({ project }) => {
    return (
        <div
            className="bg-gray-900 p-8 relative overflow-hidden transition-transform duration-300"
            data-aos="zoom-in"
        >
            <img
                className="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={project.image}
                alt={project.name}
            />
            <div className="relative z-10 mt-4">
                <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between mt-4">
                    <Link
                        to={`/${project.name}`}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg"
                    >
                        View More / Details
                    </Link>

                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gray-800 text-white rounded-lg"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent opacity-30"></div>
        </div>
    );
};

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-purple-900 to-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold mb-12"
                        data-aos="fade-up"
                    >
                        My{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
                            Projects
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
