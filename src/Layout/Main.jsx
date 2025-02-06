import React from "react";
import { Outlet } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skill";
import Education from "../pages/Education";
import Projects from "../pages/Projects";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Main;