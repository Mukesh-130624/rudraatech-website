import React from 'react';
import img1 from '../assets/img1.jpg';

export default function HeroSlider() {

    return (
        <section className="w-full relative pt-20"> {/* space for fixed navbar */}
            <div
                style={{ backgroundImage: `url(${img1})` }}
                className="w-full h-[70vh] md:h-[80vh] bg-center bg-cover"
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center 
                 text-white bg-blue-700 text-center px-10 pt-14 ">

                    <h2 className="text-2xl md:text-6xl font-bold mb-8">
                        End-to-End Industrial Project Management
                    </h2>

                    <h3 className="text-base md:text-2xl mb-10 max-w-3xl">
                        Leveraging 13 Years of Engineering Expertise to Deliver Greenfield Projects On Time.
                    </h3>

                    <a
                        href="/contact"
                        className="inline-block bg-blue-800 hover:bg-blue-900 
                   text-white font-semibold px-6 py-3 rounded-md 
                   transition duration-300"
                    >
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
