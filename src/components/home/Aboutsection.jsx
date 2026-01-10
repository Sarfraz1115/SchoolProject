import React from 'react'


const Aboutsection = () => {
return (
<section className="bg-gray-50 py-20">
<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
<div>
<span className="text-sm font-semibold text-blue-700">ABOUT OUR INSTITUTION</span>
<h2 className="mt-3 text-4xl font-bold text-blue-900">
World-Class Education for the Next Generation
</h2>
<p className="mt-4 text-gray-600">
Founded on the principles of integrity and excellence, Edu-Tech Institution
has been a beacon of academic brilliance for over three decades.
</p>


<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-xl bg-white p-5 shadow">
<h4 className="font-semibold text-blue-900">Excellence</h4>
<p className="text-sm text-gray-500">Top-tier academic standards.</p>
</div>
<div className="rounded-xl bg-white p-5 shadow">
<h4 className="font-semibold text-blue-900">Community</h4>
<p className="text-sm text-gray-500">Inclusive and diverse environment.</p>
</div>
</div>


<button className="mt-8 rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800">
Learn More
</button>
</div>


<div className="relative">
<img
src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
alt="Library"
className="rounded-2xl shadow-lg"
/>
<div className="absolute -bottom-6 -left-6 rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-blue-900 shadow">
<p className="text-3xl">30+</p>
<p className="text-xs">YEARS OF HISTORY</p>
</div>
</div>
</div>
</section>
)
}


export default Aboutsection