import React from "react";

// Import project images
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";

export default function Projects() {

    const images = [project1, project2, project3, project4, project5];

    return (
        <section className="container mx-auto px-4 py-12 pt-28">
            <h2 className="text-3xl md:text-4xl font-heading text-center mb-6 tracking-wide text-gray-800">
                Our Projects
            </h2>
            <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-10"></div>

            {/* Grid layout — 1 column mobile, 2 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-xl shadow-lg group relative">

                        {/* Image */}
                        <img
                            src={src}
                            alt={`project-${i}`}
                            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
