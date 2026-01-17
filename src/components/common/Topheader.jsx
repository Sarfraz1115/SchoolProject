import React from 'react'

const Topheader = () => {
    return (
        <div className="bg-[#3DD5C3] ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="shrink-0">
                    <img
                        src="/Milliya-SchooLogo.png"
                        alt="School Logo"
                        className="h-36 w-36 object-contain"
                    />
                </div>

                {/* School Name */}
                <div className="flex-1 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1f3d2b] mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        ANJUMAN ISHAT E TALEEM BEED
                    </h1>
                    <h2 className="text-lg md:text-2xl font-bold text-pink-600 mb-4" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>
                        ملیہ گرلز ہائی اسکول و جونیئر کالج بیڑ
                    </h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#1f3d2b] mt-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        MILLIYA GIRLS' HIGH SCHOOL & JR.COLLEGE BEED
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Topheader