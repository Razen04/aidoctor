import { useRef } from 'react'
import 'animate.css';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import aidoctorImage from "../../assets/aidoctor.svg"
import neuralNetworkImage from "../../assets/neuranetwork.png"

function Home() {

    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="mt-24 flex items-start justify-between">
                <div className="animate__animated animate__fadeInLeft content w-1/2 mt-10">
                    <h1 className='header text-5xl font-bold'>Welcome to AI Doctor: Your Health Companion</h1>
                    <p className="text mt-4 w-2/3">AI Doctor empowers you to predict potential health issues based on your symptoms. Simply input your symptoms, and let our advanced AI provide insights to guide your next steps.</p>
                    <div className="btn mt-28">
                        <Link
                            to="/predict"
                        >
                            <motion.button
                                className="btn-black px-6 py-4 mr-8 bg-black text-white rounded"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Get Started
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToSection} className="px-6 py-4 border-2 border-black rounded"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>
                <img src={aidoctorImage} alt="Ai doctor analyses image" className="animate__animated animate__fadeInRight w-1/2" />
            </div>
            <div ref={sectionRef} className="predict mt-24">
                <h2>Predict</h2>
                <div className="flex items-start justify-between">
                    <div className='animate__animated animate__fadeInLeft '>
                        <div className="content mt-10">
                            <h1 className='header text-5xl font-bold'>Your Health Starts with Accurate Predictions</h1>
                            <p className="text mt-4 w-2/3">AI Doctor simplifies the process of identifying potential health issues. With just a few clicks, you can input your symptoms and receive quick, reliable predictions.</p>
                        </div>
                        <div className="features mt-20 grid grid-cols-2 grid-flow-row gap-4">
                            <div className="feature w-64">
                                <h1 className="text-2xl">Easy Input</h1>
                                <p className="mt-4">Input symptoms effortlessly through our intuitive dropdown menus.</p>
                            </div>
                            <div className="feature w-64">
                                <h1 className="text-2xl">Instant Results</h1>
                                <p className="mt-4">Receive accurate predictions with the help of powerful Artificial Neural Network technology.</p>
                            </div>
                            <div className="feature w-64">
                                <h1 className="text-2xl">98% Accuracy</h1>
                                <p className="mt-4">Early Detection leads to better health management.</p>
                            </div>
                            <div className="feature w-64">
                                <h1 className="text-2xl">Secure</h1>
                                <p className="mt-4">Receive accurate predictions with visual aids for better understanding.</p>
                            </div>
                        </div>
                    </div>

                    <img src={neuralNetworkImage} alt="Neural Network Image" className="animate__animated animate__fadeInRight w-1/2" />
                </div>

            </div>
            <div className="started mt-40 text-center">
                <h1 className="text-6xl">Start Your Health Journey Today</h1>
                <p className="mt-4">Discover potential health issues with our AI Doctor.</p>
                <Link
                    to="/predict"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-10 text-2xl px-8 py-4 mr-8 bg-black text-white rounded"
                    >
                        Predict Now
                    </motion.button>
                </Link>

            </div>

        </div>
    )
}

export default Home
