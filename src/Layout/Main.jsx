import React from "react";
import { Outlet } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skill";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Main;