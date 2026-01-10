import React from 'react'


const Herosection = () => {
    return (
        <section className="relative h-[90vh] w-full">
            <img
                src="/school.jpg"
                alt="Campus"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />


            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="max-w-3xl rounded-2xl bg-white/20 p-10 text-center backdrop-blur-md">
                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Empowering <span className="text-yellow-400">Future</span> Leaders
                    </h1>
                    <p className="mt-4 text-white/90">
                        Join a global community of excellence, innovation, and academic achievement.
                        Your journey to greatness starts here.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-blue-900 hover:bg-yellow-300">
                            Apply Today
                        </button>
                        <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white/10">
                            Virtual Tour
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Herosection