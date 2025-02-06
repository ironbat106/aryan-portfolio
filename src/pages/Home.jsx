import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import A from '../../public/assets/A.json';

const Home = () => {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8" data-aos="fade-down">
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

        <div className="flex gap-6">
          <a 
            href="#about" 
            className="hover:text-blue-400 transition-colors px-4 py-2"
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
            className="hover:text-blue-400 transition-colors px-4 py-2"
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
            className="hover:text-blue-400 transition-colors px-4 py-2"
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
            href="mailto:your.email@example.com" // Change this to your calendar link or email
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            data-aos="fade-up"
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* Main Banner Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-24 text-center" data-aos="fade-up">
        <div className="mb-4 text-2xl font-semibold text-gray-400">
          Top Developer: <span className="text-blue-500">Aryan Ahad Ateeq</span>
        </div>

        <h1 className="text-7xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
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
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default Home;
