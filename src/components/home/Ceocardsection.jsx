import React from "react";

const Ceocardsection = () => {
  return (
    <section className="bg-[#dff5ed] py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a4a4a] text-center mb-2">
          Our Visionary Leadership
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Card 1 - Late Alhaj Ahmad Bin Abood Chause */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-dashed border-[#5a9b8a] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#3a6b5e]">
                  <img
                    src="/Ahmad_Bin_Abood_Chause.jpg"
                    alt="Late Alhaj Ahmad Bin Abood Chause"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-black uppercase mb-1">
              LATE ALHAJ AHMAD BIN ABOOD CHAUSE
            </h3>
            <p className="text-xs text-[#2a9d8f] font-semibold">
              EX. SECRETARY ANJUMAN ISHAT E TALEEM BEED
            </p>
          </div>

          {/* Card 2 - Mr. Dr. Sakeem Bin Mahfooz */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-dashed border-[#5a9b8a] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/Mr.Dr.Sakeem_Bin_Mahfooz.jpeg"
                    alt="Mr. Dr. Sakeem Bin Mahfooz"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-black uppercase mb-1">
              MR. DR. SAKEEM BIN MAHFOOZ
            </h3>
            <p className="text-xs text-[#2a9d8f] font-semibold">
              PRESIDENT ANJUMAN ISHAT E TALEEM BEED
            </p>
          </div>

          {/* Card 3 - Mrs. Khan Sabiha Begum */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-dashed border-[#5a9b8a] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/Mrs.Khan_Sabiha_Begum.jpg"
                    alt="Mrs. Khan Sabiha Begum"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-black uppercase mb-1">
              MRS. KHAN SABIHA BEGUM
            </h3>
            <p className="text-xs text-[#2a9d8f] font-semibold">
              SECRETARY ANJUMAN ISHAT E TALEEM BEED
            </p>
          </div>

          {/* Card 4 - Mr. Dr. Mohammad Irfan Sadullah */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-dashed border-[#d17a4a] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#e67e50]">
                  <img
                    src="/Mr.Dr.Mohammad_Irfaan_Sadullah.jpeg"
                    alt="Mr. Dr. Mohammad Irfan Sadullah"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-black uppercase mb-1">
              MR. DR. MOHAMMAD IRFAN SADULLAH
            </h3>
            <p className="text-xs text-[#2a9d8f] font-semibold">
              PRINCIPAL MILLIYA GIRLS' HIGH SCHOOL & JR. COLLEGE
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ceocardsection;
