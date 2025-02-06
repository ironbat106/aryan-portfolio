import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillRatings = {
    frontend: 95,
    tools: 85,
    videoEditing: 80,
    backend: 75,
    database: 70,
  };

  // Chart Data
  const data = {
    labels: ["Frontend", "Tools", "Video Editing", "Backend", "Database"],
    datasets: [
      {
        label: "Skill Ratings",
        data: [
          skillRatings.frontend,
          skillRatings.tools,
          skillRatings.videoEditing,
          skillRatings.backend,
          skillRatings.database,
        ],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "My Skill Ratings",
        font: { size: 20 },
        color: "#fff",
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#444",
        },
      },
      y: {
        min: 0, // Set minimum value of the y-axis to 0
        max: 100, // Optional: Set the maximum value to 100 for clarity
        ticks: {
          color: "#fff",
          stepSize: 10, // Adjust the step size of ticks if needed
        },
        grid: {
          color: "#444",
        },
      },
    },
  };

  return (
    <div id="skills" className="bg-black text-white py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold">
          My Skills in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            Web Development & Tools
          </span>
        </h2>
      </div>

      <div
        className="md:mr-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6"
        data-aos="fade-up"
      >
        {/* Frontend */}
        <div className="flex items-start space-x-4" data-aos="zoom-in" data-aos-delay="100">
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="text-xl font-semibold">Frontend</h3>
            <div className="flex gap-4 mt-2">
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-start space-x-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="text-xl font-semibold">Backend</h3>
            <div className="flex gap-4 mt-2">
              <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
              <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="flex items-start space-x-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="text-xl font-semibold">Database</h3>
            <div className="flex gap-4 mt-2">
              <img src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" alt="SQL Server" />
              <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="flex items-start space-x-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="text-xl font-semibold">Tools</h3>
            <div className="flex gap-4 mt-2">
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
              <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" />
            </div>
          </div>
        </div>

        {/* Video Editing */}
        <div className="flex items-start space-x-4" data-aos="zoom-in" data-aos-delay="500">
          <div className="border-l-4 border-purple-600 pl-4">
            <h3 className="text-xl font-semibold">Video Editing</h3>
            <p className="mt-2 text-gray-300">Da Vinci Resolve</p>
          </div>
        </div>
      </div>

      {/* Skill Rating Chart */}
      <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Skills;
