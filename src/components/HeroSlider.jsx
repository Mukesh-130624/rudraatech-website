import React, { useEffect, useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

export default function HeroSlider() {

    const slides = [
        { img: img1, caption: 'Project Management Excellence' },
        { img: img2, caption: 'Engineering & Fabrication' },
        { img: img3, caption: 'Supervision & Inspection' }
    ];

    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setI((x) => (x + 1) % slides.length), 4000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="w-full relative pt-20"> {/* space for fixed navbar */}
            <div
                style={{ backgroundImage: `url(${slides[i].img})` }}
                className="w-full h-[80vh] md:h-[90vh] bg-center bg-cover transition-all duration-700"
            >
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 md:p-6">
                    <h2 className="text-xl md:text-3xl font-bold">
                        {slides[i].caption}
                    </h2>
                </div>
            </div>
        </section>
    );
}
