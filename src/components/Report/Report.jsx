import aiDoctorImage from "../../assets/stethescope.svg"

const Report = ({ patientDetails, diseasePredicted }) => {

    return (
        <div className="mt-20 border-2 p-8">
            <h1 className="text-3xl text-center underline">Report</h1>
            <div className="report mt-10">
                <div className="personal-details flex justify-between items-center">
                    <div>
                        <div className="flex">
                            <h2 className="font-bold mr-2">Name: </h2>
                            <p>{patientDetails.patientName}</p>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold mr-2">Gender: </h2>
                            <p>{patientDetails.patientGender}</p>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold mr-2">Age: </h2>
                            <p>{patientDetails.patientAge}</p>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold mr-2">Blood Group: </h2>
                            <p>{patientDetails.patientBloodGroup}</p>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold mr-2">Height: </h2>
                            <p>{patientDetails.patientHeight} cm</p>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold mr-2">Weight: </h2>
                            <p>{patientDetails.patientWeight} Kg</p>
                        </div>
                    </div>
                    <img src={aiDoctorImage} alt="Logo" className="w-32" />
                    
                </div>
                <div className="predicted-diseases mt-6">
                    <h1>Your Top 5 Predicted Diseases:</h1>
                    <ol className="list-decimal ml-6 mt-4">
                        {diseasePredicted && diseasePredicted.predictions ? diseasePredicted.predictions.map((eachDisease) => (
                            <div className="diseases" key={eachDisease.disease}>
                                <li className="font-semibold">{eachDisease.disease} - {eachDisease.probability.toFixed(2)}%</li>
                                <p>{eachDisease.description}</p>
                            </div>
                        )) : null}
                    </ol>
                </div>
                <div className="precautions mt-6">
                    <h1 className="font-bold">Suggested Precautions to be taken: </h1>
                    <ol className="list-decimal ml-6 mt-4">
                        {diseasePredicted && diseasePredicted.precautions ? diseasePredicted.precautions.map((eachPrecautions, index) => (
                            <div className="precautions" key={index}>
                                <li className="">{eachPrecautions.charAt(0).toUpperCase() + eachPrecautions.slice(1)}</li>
                            </div>
                        )) : null}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Report
