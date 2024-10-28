// import React from 'react'
import defaultImage from "D:/aidoctor/src/assets/default.svg"
import githubImage from "D:/aidoctor/src/assets/github.svg"

function About() {

    const people = [
        {
            name: "Saurav Pathak",
            githubUrl: "https://github.com/Razen04",
            position: "Designer and Frontend Developer"
        },
        {
            name: "Shivam Shekhar",
            githubUrl: "https://github.com/Razen04",
            position: "Designer and Frontend Developer"
        },
        {
            name: "Shivam Shekhar",
            githubUrl: "https://github.com/Razen04",
            position: "Designer and Frontend Developer"
        },
        {
            name: "Shivam Shekhar",
            githubUrl: "https://github.com/Razen04",
            position: "Designer and Frontend Developer"
        },
        {
            name: "Shivam Shekhar",
            githubUrl: "https://github.com/Razen04",
            position: "Designer and Frontend Developer"
        },
    ]

    return (
        <div className="about mt-24">
            <h1 className="text-5xl capitalize text-center">Meet the team behind this idea</h1>
            <p className="mt-24">At AI Doctor, our mission is to make healthcare insights more accessible and convenient for everyone. We harness the power of artificial intelligence to provide quick, data-driven predictions based on user-reported symptoms. Our goal is to empower individuals to make informed decisions about their health, all while emphasizing that our tool is a supplementary resource, not a replacement for professional medical advice. Behind AI Doctor is a dedicated team of tech enthusiasts and healthcare advocates committed to using AI for good, helping bridge the gap between technology and personal well-being.</p>

            <div className="peoples mt-16 grid grid-rows-2 grid-flow-col gap-4">
                {people.map(eachPerson => {
                    return (
                        <div key={eachPerson.name} className="flex items-start gap-2 px-8 py-4 bg-gray-100 w-fit mb-4 rounded">
                            <img src={defaultImage} alt="Default Image" className="w-12" />
                            <div>
                                <div className="name flex items-center">
                                    <h1 className="mr-4 text-xl">{eachPerson.name}</h1>
                                    <a href={eachPerson.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={githubImage} alt="Github" className="w-5" />
                                    </a>

                                </div>
                                <p>{eachPerson.position}</p>
                            </div>

                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default About
