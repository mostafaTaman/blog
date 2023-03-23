import React from "react"

const Hero: React.FC = () => <header className="bg-gray-900 pattern">
    <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">Davinci Blog</h2>

                <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                    <span className="text-blue-400">Hey 👋</span>
                </h3>

                <p className="mt-4 text-gray-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?</p>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                    <div className="px-6 py-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign Up To Our News Letter</h2>

                        <div className="mt-4">
                            <input className="block w-full px-4 py-2  text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="text" placeholder="Name ..." />
                            <input className="block w-full px-4 py-2 mt-2  text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" type="email" placeholder="Email ..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

export default Hero