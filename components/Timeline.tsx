"use client";

import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Timeline = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = {
    education: [
      {
        id: 1,
        institution: "SIES High School",
        degree: "Secondary School Certificate - Maharashtra State Board",
        duration: "2006 - 2018",
        location: "Mumbai, Maharshtra",
        achievements: " Percentage: 95.80%",
        details: "School Topper with Highest Marks in Maths, Science and Sanskrit."+
                   "Received various awards from organizations for standing first in Mumbai South Zone"
      },
      {
        id: 2,
        institution: "Ramnivas Ruia Junior College",
        degree: "Higher Secondary School Certificate - Maharashtra State Board",
        duration: "2018 - 2020",
        location: "Mumbai, Mahrashtra",
        achievements: " Percentage: 93.08%, Top 1% in Maharashtra State Board Examination",
        details: "."
      },
      {
        id: 3,
        institution: "SSN College of Engineering",
        role: "Bachelor of Engineering - Computer Science",
        duration: "2020 - 2024",
        location: "Chennai, Tamilnadu",
        achievements: "Grade: 9.138, Association for Computing Machinery (ACM), Student Chapter, SSN CE; Role: Vice-chair (Aug 2023 to May 2024)"+
        "Student Placement Coordinator, Computer Science department, SSN CE.(Jan 2023 to May 2024)",
       details: "."
      },
    ],
    work: [
      
      {
        id: 4,
        company: "Fideity Investments",
        role: "Full Stack Development Intern",
        duration: "Jun 2023 - Aug 2023",
        location: "Chennai, Tamilnadu",
        responsibilities: "Received a Pre-Placement Offer based on outstanding performance during the internship",
        details: "Worked on Angular and Springboot"
      },
      {
        id: 5,
        company: "Global Governance Initiative",
        role: "Analyst-Technology & Management",
        duration: "Aug 2023 - Dec 2023",
        location: "Remote",
        responsibilities: "Worked closely with the Co-Founders to design and implement business solutions",
        details: "Engaged in solving tech issues focused on promoting good governance and resolving various organizational issues related to tech. Maintained and improved the existing projects, efficiently resolving bugs to ensure smooth operation and stability. Developed new features in existing application of GGI for improving user experience. Implemented automated systems including Access deferral and Certificate Automation to eliminate manual work"
      },
      {
        id: 6,
        company: "Fidelity Investments",
        role: "Software Engineer Intern",
        duration: "Jan 2024 - Jun 2024",
        location: "Chennai, Tamilnadu",
        responsibilities: "Part of Core Brokerage Technology",
        details: " Developed a PL/SQL stored procedure to efficiently transfer partitioned data to an alternative table and remove original data based on predefined conditions, improving overall data handling and system organization. "+
                "Designed and implemented a user friendly Angular application for internal business operations for streamlining the workflow. "+
                "Played a pivotal role in a critical project by integrating Amazon S3 with Spring Batch. Enhanced the data processing pipeline, reducing the time required to process 2.5 million records from 1 hour to 15 minutes,significantly improving efficiency and performance. "+
                "Used Jenkins to deploy the project in multiple environments using the CI/CD pipeline"
      },
      {
        id: 7,
        company: "Fidelity Investments",
        role: "Associate Software Engineer",
        duration: "Aug 2024 - present",
        location: "Chennai, Tamilnadu",
        responsibilities: "Part of Core Brokerage Technology",
        details: " Underwent the LEAP training for the Full Stack Engineering track for Angular, Java, Relational Databases,Spring-MyBatis, RESTful Services and Node.js"
      }
    ]
  };

  const Modal = ({ card, onClose }) => {
    // If details are already an array, use them; otherwise, split into bullet points
    const detailsArray = Array.isArray(card.details)
      ? card.details
      : card.details.split(". ").filter((detail) => detail.trim() !== "");
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {card.institution || card.company}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mb-4">{card.degree || card.role}</p>
          <p className="text-gray-500 mb-2">
            <FaCalendarAlt className="inline mr-2" />
            {card.duration}
          </p>
          <p className="text-gray-500 mb-4">
            <FaMapMarkerAlt className="inline mr-2" />
            {card.location}
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {detailsArray.map((detail, index) => (
              <li key={index}>{detail.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

  const TimelineCard = ({ data, type, index }) => {
    const isEven = index % 2 === 0;
    const baseClasses = "relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full md:w-5/12 bg-transparent";
    const alignmentClasses = isEven ? "md:ml-auto" : "";

    return (
      <div
        className={`${baseClasses} ${alignmentClasses}`}
        onClick={() => setSelectedCard(data)}
      >
        <div className="absolute top-6 -left-3 md:-left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          {type === "education" ? (
            <FaGraduationCap className="text-white" />
          ) : (
            <FaBriefcase className="text-white" />
          )}
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {type === "education" ? data.institution : data.company}
          </h3>
          <p className="text-gray-600 mb-2">
            {type === "education" ? data.degree : data.role}
          </p>
          <div className="flex items-center text-gray-500 mb-2">
            <FaCalendarAlt className="mr-2" />
            <span>{data.duration}</span>
          </div>
          <div className="flex items-center text-gray-500 mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>{data.location}</span>
          </div>
          <p className="text-gray-700">
            {type === "education" ? data.achievements : data.responsibilities}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
      <h1 className="heading">
       My Journey and {" "}
        <span className="text-purple">Experience</span>
      </h1>
        <div className="relative pt-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block" />
          <div className="space-y-12">
            {[...experiences.education, ...experiences.work]
              .sort((a, b) => new Date(b.duration.split(" - ")[0]) - new Date(a.duration.split(" - ")[0]))
              .map((exp, index) => (
                <TimelineCard
                  key={exp.id}
                  data={exp}
                  type={experiences.education.includes(exp) ? "education" : "work"}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
      {selectedCard && (
        <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default Timeline;