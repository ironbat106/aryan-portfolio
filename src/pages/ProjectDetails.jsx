import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const projects = [
    {
        name: "VertiTask",
        image: "https://github.com/user-attachments/assets/8285b21e-bca7-4616-adc2-b2f9ca919a3f",
        liveLink: "https://vertitask.web.app",
        githubLink: "https://github.com/yourusername/vertitask-client",
        techStack: "React.js, Tailwind CSS, Axios, Stripe.js, Node.js, Express.js, MongoDB, Firebase",
        description: "A powerful admin dashboard for payroll and task management.",
        challenges: "Stripe integration, real-time updates, role-based authentication.",
        improvements: "Add advanced analytics and reporting features, optimize payment gateway.",
    },
    {
        name: "ScarletTable",
        image: "https://github.com/user-attachments/assets/01c6403e-f6dc-46ed-9fc5-e627272d3702",
        liveLink: "https://scarlettable-5165e.web.app",
        githubLink: "https://github.com/yourusername/scarlettable-client",
        techStack: "React.js, TailwindCSS, Node.js, Express.js, MongoDB, Firebase",
        description: "A restaurant management app for food ordering and customer management.",
        challenges: "Creating dynamic menus, handling group orders, responsive design.",
        improvements: "Improve menu filtering options, add loyalty features for customers.",
    },
    {
        name: "EquiSports",
        image: "https://github.com/user-attachments/assets/8c28f279-9a84-4ef1-96b1-6ee19f0ed9c6",
        liveLink: "https://equisports-aryan.web.app/",
        githubLink: "https://github.com/yourusername/equisports-client",
        techStack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase Authentication",
        description: "A web app for managing sports equipment with interactive animations.",
        challenges: "Securing user data, implementing interactive animations, real-time updates.",
        improvements: "Expand equipment categories, enhance animations and user experience.",
    },
];

const ProjectDetails = () => {
    const { projectName } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.name === projectName);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-purple-900 to-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12">{project.name}</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <img className="w-full h-64 object-cover" src={project.image} alt={project.name} />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Technology Stack</h3>
                        <p className="text-gray-400 mb-4">{project.techStack}</p>

                        <h3 className="text-2xl font-semibold mb-4">Description</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>

                        <h3 className="text-2xl font-semibold mb-4">Challenges Faced</h3>
                        <p className="text-gray-400 mb-4">{project.challenges}</p>

                        <h3 className="text-2xl font-semibold mb-4">Potential Improvements</h3>
                        <p className="text-gray-400 mb-4">{project.improvements}</p>

                        <div className="mt-8 flex gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg"
                            >
                                Live Project
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-gray-800 text-white rounded-lg"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg cursor-pointer"
                    >
                        Back to Home
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
