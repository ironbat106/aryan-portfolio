import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import contactAnimation from "../assets/Contact.json"; // Import the JSON file

const ContactMe = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div id="contact" className="flex flex-col min-h-screen bg-black text-white">
            <div className="flex-1 flex flex-col justify-center items-center p-8">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
                    {/* Lottie Animation */}
                    <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
                        <Lottie
                            animationData={contactAnimation} // Use the imported animation data
                            loop={true}
                            className="w-full max-w-md"
                        />
                    </div>

                    {/* Contact Info Box */}
                    <div className="w-full md:w-1/2 bg-black border border-purple-700 rounded-lg p-8 shadow-lg" data-aos="fade-left">
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 mb-6 text-center">
                            Contact Me
                        </h2>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-purple-500">My Contact Information</h3>
                            <p className="text-gray-400">
                                <strong>Email:</strong> aryanahadateeq02@gmail.com
                                <br />
                                <strong>Phone:</strong> +88 01969480067
                            </p>
                            <div className="mt-4">
                                <h3 className="text-2xl font-bold text-purple-500">Business Hours</h3>
                                <p className="text-gray-400">
                                    Sunday - Thursday: 9:00 AM - 6:00 PM
                                    <br />
                                    Friday - Saturday: 9:00 AM - 12:00 AM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
