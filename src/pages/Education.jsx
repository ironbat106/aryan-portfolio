import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const educationData = [
    {
      name: "2022 - Present",
      institution: "American International University-Bangladesh",
      location: "Dhaka, Bangladesh",
      degree: "Computer Science and Engineering",
      buttonClass: "bg-gradient-to-r from-purple-600 to-purple-800",
      cardClass: "bg-gray-900",
    },
    {
      name: "2018 - 2020",
      institution: "College of Science Business and Humanities",
      location: "Chittagong, Bangladesh",
      degree: "Completed Higher School Certificate in Science",
      buttonClass: "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400",
      cardClass: "bg-gray-900 bg-opacity-80",
    },
    {
      name: "2016 - 2018",
      institution: "Independent School and College",
      location: "Chittagong, Bangladesh",
      degree: "Completed Secondary School Certificate in Science",
      buttonClass: "bg-gradient-to-r from-purple-600 to-purple-800",
      cardClass: "bg-gray-900",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-center text-4xl md:text-5xl font-extrabold mb-12"
            data-aos="fade-up"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
              Education Journey
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((education, index) => {
            return (
              <div
                key={index}
                className={`${education.cardClass} rounded-3xl p-8 relative overflow-hidden transition-transform duration-300`}
                data-aos="zoom-in"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{education.name}</h3>
                  <div className="text-lg text-gray-400 mb-4">{education.institution}</div>
                  <div className="text-lg text-gray-400 mb-6">{education.location}</div>
                  <p className="text-gray-400 mb-6">{education.degree}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent opacity-30"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
