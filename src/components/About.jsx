import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container max-w-4xl mx-auto mt-3 px-6">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                    About Us
                </h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Welcome to our platform, where we combine innovation, design, and functionality to bring you top-tier digital experiences. Our mission is to provide you with the latest trends, breaking news, and insightful analysis, all crafted with a user-centric approach.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Inspired by the clean and minimalist Nordic design, we aim to create an online environment that's not only visually stunning but also easy to navigate. Whether you're here for the latest stories or simply browsing, we strive to make your experience seamless and enjoyable.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This website is designed with attention to detail, influenced by the creative works of{' '}
                    <a
                        className="text-blue-500 hover:text-blue-700 underline"
                        href="https://themeforest.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Theme Site
                    </a>{' '}
                    and{' '}
                    <a
                        className="text-blue-500 hover:text-blue-700 underline"
                        href="https://motionarray.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Theme Video
                    </a>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                    Join us on this journey as we continue to bring fresh, relevant content to our audience. Our team is passionate about delivering quality information and enhancing your overall experience. We believe in the power of design to make the complex simple and engaging.
                </p>
            </div>
        </section>
    );
};

export default About;
