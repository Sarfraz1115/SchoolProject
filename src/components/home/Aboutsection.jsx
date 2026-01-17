import React from "react";

const Aboutsection = () => {
  return (
    <section className="bg-[#dff5ed] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1f3d2b]">
            About Our Institution
          </h2>
          <div className="mt-2 h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#274c37]">
              World-Class Education for the Next Generation
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Founded on the principles of integrity and excellence, our
              institution has been a beacon of academic brilliance for over
              three decades. We aim to nurture discipline, values, and
              leadership among students.
            </p>

            {/* VISION & MISSION */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-t-4 border-[#1f3d2b] min-h-40 shadow">
                <h4 className="text-xl font-bold text-[#1f3d2b]">
                  Our Vision
                </h4>
                <p className="mt-3 text-gray-600 text-sm">
                  To empower students with knowledge, discipline and strong
                  moral values to serve society.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-t-4 border-[#274c37] min-h-40 shadow">
                <h4 className="text-xl font-bold text-[#274c37]">
                  Our Mission
                </h4>
                <p className="mt-3 text-gray-600 text-sm">
                  To provide quality education through modern teaching and
                  holistic development.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Campus"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-400 px-6 py-4 rounded-xl font-bold text-[#1f3d2b] shadow">
              <p className="text-3xl">30+</p>
              <p className="text-xs uppercase">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
