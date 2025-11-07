import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/mrtidbury" target="_blank" rel="noreferrer"><img src="/bccc.png" className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mrtidbury" target="_blank" rel="noreferrer"><h2>BCCC Booking Management</h2></a>
                <p>BCCC Bookings is a full-stack booking management system for the Berkshire Center Caravan Club. Built with React 18 and Material-UI v7, it provides a responsive interface for managing rally events and bookings. The Python/Flask backend uses Firestore for data storage and JWT for authentication, with role-based access for admins, users, and rally officers. The system includes automated email notifications via Google Cloud Functions, user management, and specialized tools for rally officers. It features a modern UI, Redux Toolkit for state management, and is deployed on Google App Engine.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mrtidbury" target="_blank" rel="noreferrer"><img src="/binbot.png" className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mrtidbury" target="_blank" rel="noreferrer"><h2>The Bin Bot</h2></a>
                <p>TheBinBot is a bin collection reminder system that sends SMS reminders for waste collection. It scrapes council websites (Bracknell, Reading, West Berkshire) using Puppeteer to fetch collection schedules, stores user data and cached collection dates in Google Cloud SQL, and sends automated reminders via Twilio. Built on GCP Cloud Functions (Python and Node.js), it uses Cloud PubSub for component communication. Users can interact with the bot via SMS to check collection dates and manage reminders. The system includes retry logic with a dead-letter queue for failed scraping operations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;