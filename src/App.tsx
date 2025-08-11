import React from 'react';

// Main LandingPage component
const LandingPage = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-5">
                    <h1 className="text-3xl font-bold text-brown-800">Coffee Haven</h1>
                    <nav className="space-x-4">
                        <a href="#about" className="text-gray-800 hover:text-brown-600 transition duration-300">About</a>
                        <a href="#menu" className="text-gray-800 hover:text-brown-600 transition duration-300">Menu</a>
                        <a href="#contact" className="text-gray-800 hover:text-brown-600 transition duration-300">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center bg-cover bg-center h-96" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?coffee')" }}>
                <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg text-center">
                    <h2 className="text-4xl font-bold text-brown-800">Welcome to Your Coffee Paradise</h2>
                    <p className="mt-4 text-gray-700">Discover the finest coffee blends and experience the joy of a perfect cup.</p>
                    <a href="#menu" className="mt-6 inline-block bg-brown-600 text-white px-8 py-3 rounded-md hover:bg-brown-700 transition duration-300">Explore Menu</a>
                </div>
            </main>

            {/* About Section */}
            <section id="about" className="py-20 bg-yellow-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brown-800">About Us</h2>
                    <p className="mt-4 text-gray-700 max-w-lg mx-auto">At Coffee Haven, we are passionate about serving the best coffee sourced from the finest beans around the world. Join us for an unforgettable experience.</p>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brown-800">Our Menu</h2>
                    <p className="mt-4 text-gray-700">From espresso to lattes, we have something for every coffee lover.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold text-brown-800">Espresso</h3>
                            <p className="mt-2 text-gray-600">Rich and bold flavor in every sip.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold text-brown-800">Latte</h3>
                            <p className="mt-2 text-gray-600">Smooth and creamy with a hint of sweetness.</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-lg font-semibold text-brown-800">Cappuccino</h3>
                            <p className="mt-2 text-gray-600">Classic coffee with a frothy finish.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-yellow-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brown-800">Get in Touch</h2>
                    <form className="mt-6 max-w-lg mx-auto">
                        <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 w-full rounded-md mb-4" required />
                        <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 w-full rounded-md mb-4" required />
                        <textarea placeholder="Your Message" className="border border-gray-300 p-3 w-full h-32 rounded-md mb-4" required></textarea>
                        <button type="submit" className="bg-brown-600 text-white px-8 py-3 rounded-md hover:bg-brown-700 transition duration-300">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-white p-4 text-center">
                <p className="text-gray-600">© 2023 Coffee Haven. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;