"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Python</li> 
        <li>Excel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ahmadu Bello University</li>
        <li>Corporate Finance Institute</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Collaboration</li>
        <li>Adaptability</li>
        <li>Problem-solving</li> 
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete machine learning course from Zero to Expert</li>
        <li>Fullstack Javascript, React and Nodejs</li> 
        <li>Complete Python Course</li> 
        <li>Professional Diploma in Social Media Marketing</li> 
        <li>Master Course in Customer Relationship Management</li> 
        <li>Business Valuation Modeling I & II</li> 
        <li>Corporate Business Strategy</li>  
        <li>Math for Corporate Finance</li>  
        <li>Complete Python Course</li> 
        <li>Scenario and Sensitivity Analysis</li> 
        <li>Professional Ethics</li> 
        <li>Reading Financial Statements</li> 
        <li>Crisis Management Certificate</li> 
        <li>Powerpoint and Pitchbook Certificate</li> 
        <li>Digital Ad Certificate</li> 
        <li>Dashboards and Data Visualization</li> 
        <li>Corporate Finance Fundamentals</li> 
        <li>Excel Fundamentals - Formulas for finance</li> 
        <li>Financial Analysis Fundamentals</li> 
        <li>Accounting Fundamentals</li> 
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a seasoned full-stack developer, I bring a fervent dedication 
            to crafting dynamic and engaging web applications that seamlessly 
            adapt to user needs. With proficiency across a spectrum of technologies 
            including JavaScript, React, Redux, Node.js, Next.js, Express, MongoDB, 
            Python, HTML, CSS, and Git, I possess a comprehensive toolkit to execute 
            projects with precision and innovation. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("soft")}
              active={tab === "soft"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
