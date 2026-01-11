import { useEffect, useState } from "react";
import React from "react";

const images = ["/school.jpg", "/school2.jpg", "/school3.jpg"];

const Herosection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-3xl rounded-2xl bg-white/30 p-8 text-center backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Empowering <span className="text-yellow-400">Future</span> Leaders
          </h1>
          <p className="mt-4 text-white/95">
            Excellence in education with discipline and values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
