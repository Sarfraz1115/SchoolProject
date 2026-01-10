import React from 'react'


const Gallery = () => {
return (
<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-center text-3xl font-bold text-blue-900">School Gallery</h2>
<p className="mt-2 text-center text-gray-500">
Discover the vibrant environment where our students grow.
</p>


<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
<img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" />
<img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1517649763962-0c623066013b" />
<img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" />
<img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1581091215367-59ab6b0c41c4" />
<img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1580582932707-520aed937b7b" />
<img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
</div>
</div>
</section>
)
}


export default Gallery