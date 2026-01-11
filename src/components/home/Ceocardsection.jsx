import React from "react";

const Ceocardsection = () => {
  return (
    <section className="bg-[#e9f3ee] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* PRESIDENT */}
        <div className="bg-white border-l-8 border-[#1f3d2b] rounded-lg shadow p-6 flex gap-6">
          <img
            src="/president.jpg"
            alt="President"
            className="w-28 h-32 object-cover rounded"
          />
          <div>
            <h3 className="text-xl font-bold text-[#1f3d2b]">
              President’s Message
            </h3>
            <p className="font-semibold mt-1">
              Hon. Shri. Rupchand Narayan Shinde
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Education is the foundation upon which we build our future
              generations with discipline, integrity, and excellence...
            </p>
            <span className="text-yellow-600 text-sm cursor-pointer">
              Read more →
            </span>
          </div>
        </div>

        {/* PRINCIPAL */}
        <div className="bg-white border-l-8 border-[#274c37] rounded-lg shadow p-6 flex gap-6">
          <img
            src="/principal.jpg"
            alt="Principal"
            className="w-28 h-32 object-cover rounded"
          />
          <div>
            <h3 className="text-xl font-bold text-[#274c37]">
              Principal’s Message
            </h3>
            <p className="font-semibold mt-1">
              Prof. Dr. Lahu Pawar
            </p>
            <p className="text-sm text-gray-600 mt-2">
              We strive to provide a nurturing environment where students
              excel academically and morally...
            </p>
            <span className="text-yellow-600 text-sm cursor-pointer">
              Read more →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ceocardsection;
