import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Array of all 27 gallery images
  const galleryImages = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    src: `/Gallery/Gallery${i + 1}.jpeg`,
    alt: `School Gallery ${i + 1}`
  }))

  return (
    <div className="min-h-screen bg-linear-to-t from-[#dff5ed] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            School Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the vibrant moments and memories captured at our school. From academic achievements to extracurricular activities, witness the journey of our students.
          </p>
        </div>

        {/* Masonry Grid Layout - Pinterest Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">
                    {image.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button - Fixed at top-right corner, fully visible */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 z-60 text-white hover:text-red-400 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image Title */}
              <div className="text-center mt-4">
                <p className="text-white text-lg font-semibold">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Gallery