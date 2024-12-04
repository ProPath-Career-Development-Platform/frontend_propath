import * as React from "react";
import { useState } from "react";
import Chip from "@mui/joy/Chip";
import { Box, Typography } from "@mui/material";

export default function CourseOverview() {
  const dbContent = `
    <div>
      <p>This Flutter course is offered through Skillup by Simplilearn and is of a 2-hour duration. This course helps you to learn about UI software developed to create platform applications for iOS, Android, Windows, Mac, etc. This is a beginner-level course, where advanced programming knowledge is not necessary. Then, you will learn how to create screens and application logic and use Figma. By the end of this course, you will know how to launch an app written in Flutter on the App Store and Google Play Store. You can have access for 90 days once you enroll in the course. In the end, you will receive a course completion certificate.</p>
      <h6>Topics Covered</h6>
      <p>Topics covered in the Flutter course free are:</p>
      <ul>
        <li>Introduction to Flutter</li>
        <li>Dart Programming</li>
        <li>Flutter Widgets</li>
        <li>Specific features-Platform</li>
        <li>UI Design</li>
        <li>Navigation</li>
        <li>Working with API</li>
        <li>Testing and Debugging</li>
        <li>Interview Question</li>
      </ul>
      <h6>Benefits of Completing the Course</h6>
      <p>Completing the course can offer many benefits:</p>
      <ul>
        <li>Mobile App Development skill: It is a versatile framework for mobile apps. On completing the Flutter course, you will gain the skills and knowledge to create apps for Android and iOS.</li>
        <li>In-Demand Skill: It is a demand job program in the market, and you can have many job opportunities after completing the course.</li>
        <li>Career Opportunities: You can open up new career opportunities as an app developer. Flutter can help you to add value to your resume.</li>
        <li>Cost-Efficient development: Flutter course is a free course, and also the best choice for business as it can maintain a single codebase for various platforms and maintenance costs.</li>
        <li>Certification: At the end, you will receive a flutter online course free with a certificate, which can help you build a strong foundation in the field and also add an advantage to your resume.</li>
        <li>Exploring: Technology always evolves, and this free flutter course creates a step to your journey of learning and staying up-to-date with the latest developments of apps.</li>
      </ul>
      <p>A free Flutter course can be a great start in your career if you are interested in app development. You will likely need to learn some additional resources, practical experience, and self-improvement by doing master courses in Flutter.</p>
      <h6>How to Build a Career after Completing the Course</h6>
      <p>Follow the steps to build a successful career after completing the course:</p>
      <ul>
        <li>Master Flutter and Dart: Practise the basics and continue learning and understanding the programming language. Also, work on some projects to apply your knowledge of Flutter courses.</li>
        <li>Create a Portfolio: Showcase the project or work you have carried out during and after the course. A strong profile allows you to reach professionals easily and show your skills and capabilities.</li>
        <li>Social media Profile: Share your flutter-free certification to GitHub and LinkedIn profile also add to your profile. This shows your potential and the client to see your work.</li>
        <li>Participate in Open Source: Use the open source flutter project opportunity. This will help you to gain experience and network with people.</li>
        <li>Freelancing: You can work as a freelancer with the skills you gained and use websites like Upwork and LinkedIn to offer opportunities.</li>
      </ul>
      <h6>Start your Upskilling Journey with Skillup</h6>
      <p>Start your journey with SkillUp, an education platform that helps you to identify your learning goals, choose the right courses, and make your learning experience efficient.</p>
    </div>
  `;
  const [length, setLength] = useState(500);
  const [read, setread] = useState("read more...");

  const readmore = () => {
    if (length == 500) {
      const l = dbContent.length;
      setread("Read Less ...");
      setLength(l);
    } else {
      setread("Read More ...");
      setLength(500);
    }

    console.log(setLength);
  };
  return (
    <Box sx={{ padding: 2, bgcolor: "background.level1" }}>
      <Typography>{dbContent.slice(0, length)}</Typography>
      <button onClick={readmore}>
        <Typography sx={{ marginTop: "30px", color: "blue" }}>
          {read}
        </Typography>
      </button>
    </Box>
  );
}
