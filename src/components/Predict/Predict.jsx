// import React from 'react'
import { motion } from "framer-motion"

function Predict() {
    return (
        <div className="predict mt-24">
            <h1 className="text-5xl capitalize text-center">Discover What&apos;s Behind Your Symptoms</h1>
            <div className="flex justify-around items-start">
                <div className="info mt-20 w-2/5">
                    <h2 className="text-xl font-semibold">Enter Your Personal Details</h2>

                    <div className="info-input mt-10">
                        <h3 className="font-semibold">Name</h3>
                        <input type="text" className="px-2 py-1 border-2 mt-2 w-full bg-gray-100 rounded" />
                        <div className="measurements mt-4 grid grid-cols-3 grid-flow-row gap-2">
                            <div>
                                <h3 className="mb-4 font-semibold">Gender</h3>
                                <select name="gender" id="gender" className="px-2 py-2">
                                    <option value="Male">Male</option>
                                    <option value="Male">Female</option>
                                </select>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Age</h3>
                                <input type="number" className="px-2 py-1 border-2 mt-2 w-2/5 bg-gray-100 rounded" />
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Height (in cm)</h3>
                                <input type="number" className="px-2 py-1 border-2 mt-2 w-2/5 bg-gray-100 rounded" />
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Weight (in Kg)</h3>
                                <input type="number" className="px-2 py-1 border-2 mt-2 w-2/5 bg-gray-100 rounded" />
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Blood Group</h3>
                                <input type="number" className="px-2 py-1 border-2 mt-2 w-2/5 bg-gray-100 rounded" />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="text-xl mt-12 px-8 py-4 mr-8 bg-black text-white rounded"
                        >
                            Predict Now
                        </motion.button>
                    </div>
                </div>

                <div className="symptoms mt-20 py-4 px-8 bg-gray-200 rounded overflow-scroll w-2/5">
                    <h1>Add your Symptoms using the dropdown</h1>
                    <div className="add-symptom mt-6">
                        <h2 className="font-semibold mb-2">Symptom 1</h2>
                        <select name="symptom" id="symptom1" className="px-2 py-2 bg-white w-full rounded">
                            <option value="Sneeze">Sneeze</option>
                            <option value="Sneeze">Cough</option>
                            <option value="Sneeze">Rash</option>
                            <option value="Sneeze">Difficult Breathing</option>
                        </select>
                    </div>
                    <div className="add-symptom mt-6">
                        <h2 className="font-semibold mb-2">Symptom 2</h2>
                        <select name="symptom" id="symptom1" className="px-2 py-2 bg-white w-full rounded">
                            <option value="Sneeze">Sneeze</option>
                            <option value="Sneeze">Cough</option>
                            <option value="Sneeze">Rash</option>
                            <option value="Sneeze">Difficult Breathing</option>
                        </select>
                    </div>
                    <div className="add-symptom mt-6">
                        <h2 className="font-semibold mb-2">Symptom 3</h2>
                        <select name="symptom" id="symptom1" className="px-2 py-2 bg-white w-full rounded">
                            <option value="Sneeze">Sneeze</option>
                            <option value="Sneeze">Cough</option>
                            <option value="Sneeze">Rash</option>
                            <option value="Sneeze">Difficult Breathing</option>
                        </select>
                    </div>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-10 px-8 py-4 bg-black text-white rounded"
                    >
                        Add more symptoms
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default Predict
