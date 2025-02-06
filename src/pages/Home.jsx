import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import A from '../../public/assets/A.json';

const Home = () => {

    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative overflow-hidden">
            {/* Navigation */}
            <nav className="flex justify-between items-center py-6 px-6 sm:px-12" data-aos="fade-down">
                <div className="flex items-center gap-2">
                    {/* Lottie Animation Logo */}
                    <Lottie animationData={A} className="w-12 h-12" />
                    <div
                        className="text-2xl font-bold text-blue-500 cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Aryan
                    </div>
                </div>

                <div className="hidden sm:flex gap-8">
                    <a
                        href="#about"
                        className="hover:text-blue-400 cursor-pointer transition-colors px-4 py-2"
                        data-aos="fade-up"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        About Me
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-blue-400 cursor-pointer transition-colors px-4 py-2"
                        data-aos="fade-up"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-blue-400 cursor-pointer transition-colors px-4 py-2"
                        data-aos="fade-up"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Projects
                    </a>
                    {/* Book a call as a link */}
                    <a
                        href="#contact"
                        className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                        data-aos="fade-up"
                    >
                        Contact Me
                    </a>
                </div>
            </nav>

            {/* Main Banner Content */}
            <div className="flex items-center justify-center min-h-screen px-6 sm:px-12 py-24 text-left" data-aos="fade-up">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-x-12 gap-y-12 sm:gap-y-0">
                    {/* Left Side: Text Content */}
                    <div className="w-full sm:w-1/2">
                        <div className="mb-4 text-3xl font-semibold text-gray-100">
                            Building Digital Experiences with Precision:
                            <span className="text-blue-400"> Aryan Ahad Ateeq</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
                            <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Web Developer', 'Software Engineer', 'Gamer', 'Video Editor']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>

                        {/* Social Media Links */}
                        <nav>
                            <div className="flex gap-4 sm:gap-6 mt-4">
                                <a
                                    href="https://www.linkedin.com/in/aryan-ahad-ateeq"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    <FaLinkedin className="text-white text-3xl hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://github.com/ironbat106"
                                    aria-label="GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 transition-colors cursor-pointer"
                                >
                                    <FaGithub className="text-white text-3xl hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://www.facebook.com/aryan.ahad.7"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 transition-colors cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        className="fill-current text-white hover:scale-110 transition-transform"
                                    >
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                            </div>
                        </nav>

                        {/* Resume View Button */}
                        <div className="mt-6">
                            <a
                                href="https://i.ibb.co/27nSPSD4/Aryan-Ahad-Ateeq-CV-Plain-1.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Profile Picture */}
                    <div className="w-full sm:w-1/2 flex justify-center">
                        <img
                            src="./assets/aryanaa-removebg-preview.png"
                            alt="Aryan Ahad Ateeq"
                            className="rounded-full border-4 border-blue-500 max-w-md shadow-lg mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        </div>
    );
};

export default Home;
