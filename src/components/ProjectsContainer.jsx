import {ExperienceCard} from "./ExperienceCard";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import {useMediaQuery, useTheme} from "@mui/material";
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import '../styles/experince-container.css'


const experiences = [
    {
        title: "Graduate Developer",
        organization: "New York University",
        description: "● Designed and deployed a user-friendly full stack application in React and Django to automate the grading process of 3D models , " +
            "reducing grading time by 75% \n"  +
            "● Implemented real-time feedback functionality for students, increasing assignment submissions before the " +
            "due date by 45%\n" +
            "● Integrated automatic plagiarism checker software within the application, detecting plagiarism cases with " +
            "a rate of 95%\n" +
            "● Streamlined frontend interface with React.js by using Chakra UI 45 components to achieve consistency " +
            "throughout the application\n" +
            "● Developed a standalone application using AWS Lambda, SES, S3, and AWS Cognito to automate a critical " +
            "business process, decreasing\n" +
            "processing time by 50%\n" +
            "● Collaborated with the security team to integrate applications with SSO server, streamlining " +
            "authentication process for end-users reducing security overhead by 90%",
        from: "Nov, 2021",
        to: "May, 2023",
        url: "https://engineering.nyu.edu/academics/fitl"
    },
    {
        title: "Software Engineer",
        organization: "Mediaocean",
        description: "● Accelerated a new microservice that integrated applications using DDD, resulting in a 50% reduction in integration time and boosting\n" +
            "application performance\n" +
            "● Reduced search time by 120% by implementing a faster search algorithm by optimizing SQL joins and guava cache\n" +
            "● Integrated a crucial module in the pricing engine used for 70% of calculations, leading to pricing accuracy and efficiency\n" +
            "● Facilitated a cross-functional meeting between the development, operations, and security teams to address concerns about application security and streamline the development process resulting in 40% reduction in errors\n" +
            "● Implemented a Rabbit MQ message queue to generate PDF reports asynchronously, improving application performance by 40% and reducing latency for users by 50%\n" +
            "● Designed and pioneered a streamlined API strategy, resulting in a 40% reduction in call time and enabling real-time data updates across all microservices using Oracle SQL\n" +
            "● Created 10 reusable React components that improved development efficiency and which is easier to build user interfaces, resulting in a more user-friendly experience\n",
        from: "Apr, 2019",
        to: "Jul, 2021"
    },{
        title: "Associate Software Engineer",
        organization: "Mediaocean",
        description: "Attended a comprehensive bootcamp covering design principles such as SOLID, SQL, full-stack development,Java,Spring,JavaScript,and AOP",
        from: "Jul, 2017",
        to: "Apr, 2019"
    },
]

export default function ExperienceContainer() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Timeline position={matches ? 'alternate' : 'right'}>
            <TimelineItem>
                <TimelineSeparator >
                        <WorkHistoryRoundedIcon className={"work-history-icon"} sx={{padding: 1}}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{color:'primary.abc'}}>
                    What's next ??
                </TimelineContent>
            </TimelineItem>
            {experiences.map((experience) => (
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary" >
                        {`${experience.from} to ${experience.to}`}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceCard
                            title={experience.title}
                            organization={experience.organization}
                            description={experience.description}
                            url={experience.url}
                        />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    // experiences.map(({title, organization, description, to, from}) => (
    //     <ExperienceCard title={title} organization={organization} description={description}/>))
    )
}