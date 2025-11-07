import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Node.js",
    "JavaScript",
    "Clojure",
    "SQL",
    "NoSQL",
];

const labelsSecond = [
    "AWS",
    "GCP",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "Linux",
    "Agile Development",
    "Serverless Computing",
];

const labelsThird = [
    "Project Management",
    "Team Collaboration",
    "Stakeholder Communication",
    "Task Queues",
    "App Engine",
    "Lambda",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Engineering</h3>
                    <p>I have built diverse applications and internal tools using modern technologies. Skilled in multiple programming languages including Python, Node.js, JavaScript, and Clojure, with experience building scalable cloud-based systems and REST APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud Native Solutions</h3>
                    <p>I build applications designed for cloud platforms like AWS and GCP, leveraging containerization, orchestration, and modern deployment practices. I have experience working with Kubernetes, Docker, and CI/CD pipelines to create scalable, maintainable cloud-native solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Internal Tools & Automation</h3>
                    <p>I work closely with teams to understand their needs and deliver meaningful solutions that enhance productivity and streamline workflows. This includes collaborating on SaaS integrations, automation tools, and leveraging AI to solve complex issues and real business challenges that drive impact.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;