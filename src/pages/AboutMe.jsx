import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id='about' className="bg-black text-white py-20">
            <h2
                className="text-center text-4xl md:text-5xl font-extrabold mb-12"
                data-aos="fade-up"
            >
                Get to know{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
                    Aryan Ahad Ateeq
                </span>
            </h2>
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4"
                data-aos="fade-up"
            >
                <div className="p-6 bg-gray-900 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-2xl font-bold mb-4 text-purple-500">Programming Journey</h3>
                    <ul>
                        <li>- Currently pursuing a Computer Science degree</li>
                        <li>- CGPA of 3.27, aiming for 3.50+</li>
                        <li>- Experience in C++, Java, SQL, HTML</li>
                        <li>- Proficient in MERN Stack</li>
                        <li>- Passionate about Software Engineering</li>
                    </ul>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg" data-aos="zoom-in" data-aos-delay="100">
                    <h3 className="text-2xl font-bold mb-4 text-purple-500">My Work</h3>
                    <ul>
                        <li>- Developed a car management system (Java)</li>
                        <li>- Built a hotel management system (SQL)</li>
                        <li>- Created a project marketplace (C#)</li>
                        <li>- Designed 12+ engaging websites using HTML, CSS, and React JavaScript</li>
                    </ul>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
                    <h3 className="text-2xl font-bold mb-4 text-purple-500">Hobbies & Interests</h3>
                    <ul>
                        <li>- Love gaming and creating content around it 🎮</li>
                        <li>- Passionate about video editing on Da Vinci Resolve</li>
                        <li>- Creating montages for my YouTube channel</li>
                        <li>- Mixing creativity with technical skills 🎥</li>
                    </ul>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg" data-aos="zoom-in" data-aos-delay="300">
                    <h3 className="text-2xl font-bold mb-4 text-purple-500">Let's Connect!</h3>
                    <ul>
                        <li>- Always open to connecting with like-minded professionals</li>
                        <li>- Interested in discussing tech, opportunities, and collaborations</li>
                        <li>- Let’s explore new ideas together 🤝</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
