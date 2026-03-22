import React from "react";

// Import project images
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";

export default function Projects() {

    const projects = [
        {
            img: project1,
            title: "Heavy Erection Work",
            description:
                "Installation and Erection of a large Liquid CO2 storage tank using heavy cranes in a challenging industrial environment.",
            client: "Pioneer Industrial Corporation",
        },
        {
            img: project2,
            title: "Chemical Plant Utilities",
            description:
                "Successful installation of Reactors (SSR & GLR), Condensers, and complex piping at 16-meter height.",
            client: "ABC Chemicals Ltd.",
        },
        {
            img: project3,
            title: "Process Equipment Installation",
            description:
                "Detailed engineering, fabrication, and installation of Spray Dryers and vacuum systems.",
            client: "XYZ Process Pvt Ltd.",
        },
        {
            img: project4,
            title: "Process Equipment Installation",
            description:
                "Detailed engineering, fabrication, and installation of Spray Dryers and vacuum systems.",
            client: "XYZ Process Pvt Ltd.",
        },
        {
            img: project5,
            title: "Process Equipment Installation",
            description:
                "Detailed engineering, fabrication, and installation of Spray Dryers and vacuum systems.",
            client: "XYZ Process Pvt Ltd.",
        },
        {
            img: project6,
            title: "Process Equipment Installation",
            description:
                "Detailed engineering, fabrication, and installation of Spray Dryers and vacuum systems.",
            client: "XYZ Process Pvt Ltd.",
        },
    ];

    return (
        <>
            {/* 🔵 BIG BLUE HEADER */}
            <section className="bg-blue-700 text-white text-center py-28 md:py-32 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Our Executed Projects
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    A showcase of successful PMC & Fabrication work in the Tarapur MIDC region.
                </p>
            </section>

            {/* 🔽 PROJECT GRID */}
            <section className="container mx-auto px-4 py-16">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-7">

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 leading-snug">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Client */}
                                <p className="text-base md:text-lg text-gray-800">
                                    <span className="font-semibold">Client:</span> {project.client}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </>
    );
}