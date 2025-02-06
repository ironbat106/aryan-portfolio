import React from "react";
import { Outlet } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skill";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Main;