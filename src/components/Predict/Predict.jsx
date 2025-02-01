// import React from 'react'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import spinnerLogo from '../../assets/spinner.svg'
import symptomsList from "../../symptoms.json"
import Report from "../Report/Report"

function Predict() {

    const [showSpinner, setShowSpinner] = useState(false)

    const [symptoms, setSymptoms] = useState([])
    const [patientDetails, setPatientDetails] = useState({
        "patientName": "",
        "patientAge": "",
        "patientGender": "",
        "patientWeight": "",
        "patientHeight": "",
        "patientBloodGroup": "",
        "symptoms": []
    })
    const [diseasePredicted, setDiseasePredicted] = useState({})

    const addSymptom = () => {
        setSymptoms([...symptoms, { id: Date.now(), value: '' }])
    }

    const handleSymptomChange = (event, index) => {
        let updatedSymptoms = [...symptoms];
        updatedSymptoms[index] = { ...updatedSymptoms[index], value: event.target.value };
        setPatientDetails((prevDetails) => ({
            ...prevDetails,
            symptoms: updatedSymptoms
        }))
        setSymptoms(updatedSymptoms)
    }

    const handlePatientDetailsChange = (event) => {
        let { name, value } = event.target
        setPatientDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }))
    }

    const predictDisease = async () => {
        setDiseasePredicted([])
        setShowSpinner(true)
        console.log(patientDetails.symptoms)
        try {
            const response = await fetch('https://aidoctor-backend.onrender.com/predict-disease', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ symptoms: patientDetails.symptoms })
            })
            const data = await response.json();
            setDiseasePredicted(data)
            console.log(data)
        } catch (error) {
            console.error("Error fetching prediction:", error)
        }
    }

    useEffect(() => {
        console.log(diseasePredicted)
    }, [diseasePredicted])

    return (
        <div className="predict mt-24">
            <h1 className="text-5xl capitalize text-center">Discover What&apos;s Behind Your Symptoms</h1>
            <div className="flex justify-around items-start">
                <div className="info mt-20 w-2/5">
                    <h2 className="text-xl font-semibold">Enter Your Personal Details</h2>

                    <div className="info-input mt-10">
                        <h3 className="font-semibold">Name</h3>
                        <input
                            type="text"
                            name="patientName"
                            value={patientDetails.patientName}
                            className="px-2 py-1 min-w-28 border-2 mt-2 w-full bg-gray-100 rounded"
                            onChange={(e) => handlePatientDetailsChange(e)}
                        />
                        <div className="measurements mt-4 grid grid-cols-3 grid-flow-row gap-2">
                            <div>
                                <h3 className="mb-4 font-semibold">Gender</h3>
                                <select
                                    name="patientGender"
                                    id="patientGender"
                                    value={patientDetails.patientGender}
                                    onChange={(e) => handlePatientDetailsChange(e)}
                                    className="px-2 py-2 min-w-28"
                                >
                                    <option value="" disabled>--Select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Age</h3>
                                <input
                                    type="number"
                                    name="patientAge"
                                    value={patientDetails.patientAge}
                                    onChange={(e) => handlePatientDetailsChange(e)}
                                    className="px-2 py-1 min-w-28 border-2 mt-2 w-2/5 bg-gray-100 rounded"
                                />
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Height (in cm)</h3>
                                <input
                                    type="number"
                                    name="patientHeight"
                                    value={patientDetails.patientHeight}
                                    onChange={(e) => handlePatientDetailsChange(e)}
                                    className="px-2 py-1 min-w-28 border-2 mt-2 w-2/5 bg-gray-100 rounded"
                                />
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Weight (in Kg)</h3>
                                <input
                                    type="number"
                                    name="patientWeight"
                                    value={patientDetails.patientWeight}
                                    onChange={(e) => handlePatientDetailsChange(e)}
                                    className="px-2 py-1 min-w-28 border-2 mt-2 w-2/5 bg-gray-100 rounded"
                                />
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold">Blood Group</h3>
                                <select
                                    name="patientBloodGroup"
                                    value={patientDetails.patientBloodGroup}
                                    onChange={(e) => handlePatientDetailsChange(e)}
                                    id="blood-group"
                                    className="px-2 py-2 min-w-28"
                                >
                                    <option value="" disabled>--Select--</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
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
                            onClick={predictDisease}
                            className="text-xl mt-12 px-8 py-4 mr-8 bg-black text-white rounded"
                        >
                            Predict Now
                        </motion.button>
                    </div>
                </div>

                <div className="symptoms mt-20 py-4 px-8 bg-gray-200 rounded w-2/5">
                    <h1>Add your Symptoms using the dropdown</h1>
                    <div className="max-h-80 overflow-scroll">
                        {symptoms.map((eachSymptom, index) => (
                            <div className="add-symptom mt-6" key={eachSymptom.id}>
                                <h2 className="font-semibold mb-2">Symptom {index + 1}</h2>
                                <select
                                    className="px-2 py-2 bg-white w-full rounded"
                                    onChange={(e) => handleSymptomChange(e, index)}
                                    value={eachSymptom.value}
                                >
                                    <option value="" disabled>
                                        Select a symptom
                                    </option>
                                    {symptomsList.map((eachSymptomInTheList, idx) => (
                                        <option value={eachSymptomInTheList} key={idx}>
                                            {eachSymptomInTheList}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-10 px-8 py-4 bg-black text-white rounded"
                        onClick={addSymptom}
                    >
                        Add more symptoms
                    </motion.button>
                </div>
            </div>
            <div className="relative">
                {diseasePredicted.predictions ? <Report patientDetails={patientDetails} diseasePredicted={diseasePredicted} /> : showSpinner?  <img src={spinnerLogo} alt="Spin Logo" className="w-20 absolute top-1/2 left-1/2 text-center mt-8" /> : null}
            </div>
            
        </div>
    )
}

export default Predict
