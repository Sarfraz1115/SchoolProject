import React from "react";

const Threebox = () => {
  return (
    <section className="bg-[#1a4a4a] py-18">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* DESKTOP STACKED VIEW */}
        <div className="relative h-105 hidden md:block">

          {/* LEFT CARD */}
          <div className="absolute left-0 top-10 w-[32%] bg-[#147267] text-white p-8 rounded-xl shadow-xl min-h-80 z-10">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Notice Board
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>• Admission Open for 2026–27</li>
              <li>• Annual Exam Schedule Released</li>
              <li>• Parent–Teacher Meeting Notice</li>
              <li>• Holiday List Updated</li>
              <li>• Scholarship Guidelines</li>
              <li>• Scholarship Guidelines</li>
              <li>• Scholarship Guidelines</li>
              <li>• Scholarship Guidelines</li>
            </ul>
          </div>

          {/* CENTER CARD */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[36%] bg-[#147267] text-white p-10 rounded-xl shadow-2xl min-h-90 z-20">
            <h3 className="text-2xl font-bold mb-5 text-yellow-400">
              Download Forms
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li>• Admission Application Form</li>
              <li>• Transfer Certificate Form</li>
              <li>• Bonafide Certificate Request</li>
              <li>• Scholarship Application Form</li>
              <li>• Exam Revaluation Form</li>
              <li>• Exam Revaluation Form</li>
              <li>• Student Information Update Form</li>
              <li>• Student Information Update Form</li>

            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="absolute right-0 top-10 w-[32%] bg-[#147267] text-white p-8 rounded-xl shadow-xl min-h-80 z-10">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Important Links
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>• Maharashtra Education Board</li>
              <li>• National Scholarship Portal</li>
              <li>• School Education Department</li>
              <li>• School Education Department</li>
              <li>• School Education Department</li>
              <li>• Online Result Portal</li>
              <li>• Student Login Dashboard</li>
              <li>• Student Login Dashboard</li>
            </ul>
          </div>

        </div>

        {/* MOBILE STACK (NO OVERLAP) */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          <div className="bg-[#147267] text-white p-8 rounded-xl shadow min-h-70">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              Notice Board
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Admission Open 2026–27</li>
              <li>• Exam Schedule</li>
              <li>• PTM Notice</li>
              <li>• Scholarship Info</li>
            </ul>
          </div>

          <div className="bg-[#147267] text-white p-8 rounded-xl shadow min-h-75">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              Download Forms
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Admission Form</li>
              <li>• TC Form</li>
              <li>• Bonafide Form</li>
              <li>• Scholarship Form</li>
            </ul>
          </div>

          <div className="bg-[#147267] text-white p-8 rounded-xl shadow min-h-70">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              Important Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Education Board</li>
              <li>• Scholarship Portal</li>
              <li>• Govt Education Dept</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Threebox;
