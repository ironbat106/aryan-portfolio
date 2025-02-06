import React from 'react';
import { FaFacebookF, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import A from '../../public/assets/A.json';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";  

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up">
                <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex items-center space-x-3">
                        <div className="w-20 h-20">
                            <Lottie animationData={A} loop={true} />
                        </div>
                        <h1 className="text-3xl font-bold text-purple-500">Aryan <br /> Ahad <br /> Ateeq</h1>
                    </div>
                    <p className="text-sm mt-4">Web Developer & Content Creator.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/aryan.ahad.7" className="text-gray-400 hover:text-purple-500 transition">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.youtube.com/@ironbat106" className="text-gray-400 hover:text-purple-500 transition">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://github.com/ironbat106" className="text-gray-400 hover:text-purple-500 transition">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-ahad-ateeq" className="text-gray-400 hover:text-purple-500 transition">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <h2 className="font-bold text-white mb-4">CONTACT</h2>
                    <p className="text-sm">
                        Bashundhara R/A, Dhaka, Bangladesh
                    </p>
                    <p className="mt-4 text-sm">
                        <span className="font-semibold">Phone:</span> +88 01969480067
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Email:</span>{" "}
                        <a href="mailto:your.email@example.com" className="text-purple-500">
                            aryanahadateeq02@gmail.com
                        </a>
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <h2 className="font-bold text-white mb-4">PORTFOLIO</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#projects" className="hover:text-purple-500">
                                My Projects
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-purple-500">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-purple-500">
                                Skills
                            </a>
                        </li>
                    </ul>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <h2 className="font-bold text-white mb-4">USEFUL LINKS</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="https://www.linkedin.com/in/aryan-ahad-ateeq" className="hover:text-purple-500">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ironbat106" className="hover:text-purple-500">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:your.email@example.com" className="hover:text-purple-500">
                                Email Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm max-w-7xl mx-auto">
                <p className="text-gray-400">
                    Powered by <span className="font-bold">Aryan Ahad Ateeq</span>
                </p>
                <p className="flex space-x-4 mt-2 md:mt-0">
                    <a href="/privacy" className="hover:text-purple-500">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:text-purple-500">
                        Terms & Conditions
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
