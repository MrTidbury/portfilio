import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Corp Ops Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dropbox</h4>
            <p>
              Develop and maintain custom internal applications and administer SaaS platforms like Slack and Google Workspace. Built a compliance training tracker that saved an estimated 1,500 hours annually. Co-developed an AI-powered Slack app that won two company-wide awards. Modernized infrastructure from manual scripts to scalable, automated architecture using AWS Lambda and deployment pipelines.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2020 - Sep 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Flowmoco</h4>
            <p>
              Contributed to the transition from a legacy application base to a modern, flexible distributed system. Developed nodes in multiple languages (Node.js, Python, Clojure), set up Kubernetes environments, and implemented CI/CD pipelines to streamline deployments.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - Dec 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">AppogeeHR</h4>
            <p>
              Contributed to the development and maintenance of a cloud-based HR and leave management system using JavaScript/Python stack on Google Cloud. Led multiple projects including integrations with Google Workspace, Microsoft Office, and Xero. Spearheaded push notifications implementation that processed over 250,000 notifications with no major issues.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;