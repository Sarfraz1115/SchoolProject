import React from 'react'


const Gallery = () => {
    return (
        <section className="py-20 bg-[#dff5ed]">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center text-3xl font-bold text-blue-900">School Gallery</h2>
                <p className="mt-2 text-center text-gray-500">
                    Discover the vibrant environment where our students grow.
                </p>


                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <img className="w-full h-64 object-cover rounded-xl shadow" src="/Gallery/Gallery1.jpeg" alt="School Gallery 1" />
                    <img className="w-full h-64 object-cover rounded-xl shadow" src="/Gallery/Gallery2.jpeg" alt="School Gallery 2" />
                    <img className="w-full h-64 object-cover rounded-xl shadow" src="/Gallery/Gallery3.jpeg" alt="School Gallery 3" />
                    <img className="w-full h-64 object-cover rounded-xl shadow" src="/Gallery/Gallery4.jpeg" alt="School Gallery 4" />
                    <img className="w-full h-64 object-cover rounded-xl shadow" src="/Gallery/Gallery5.jpeg" alt="School Gallery 5" />
                    <img className="w-full h-64 object-cover rounded-xl shadow" src="/Gallery/Gallery6.jpeg" alt="School Gallery 6" />
                </div>
            </div>
        </section>
    )
}


export default Gallery