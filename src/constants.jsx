// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import javaLogo from "./assets/tech_logo/java.png";

import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanlogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import csharpLogo from "./assets/tech_logo/csharp.png";
//backend skills section logo's
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import mongooseLogo from "./assets/tech_logo/mongoose.png";
import restApiLogo from "./assets/tech_logo/restApi.png";
import jwtLogo from "./assets/tech_logo/jwtLogo.png";

// Education Section Logo's
import mungerLogo from "./assets/education_logo/munger.png";
import bsebLogo from "./assets/education_logo/bseb.jpg";

// Project Section Logo's
import portfolioPage from "./assets/work_logo/my2ndPortfolio.png";
import githubImage from "./assets/work_logo/github.jpg";
import newsapp from "./assets/work_logo/newsApp.png";
import foodhouse from "./assets/work_logo/foodhouseHome.png";
import travel from "./assets/work_logo/travel.png";
import resumeAnalyzer from "./assets/work_logo/resume_Ana.png";
import chatapp from "./assets/work_logo/real_time_chat.png";
import mailpilot from "./assets/work_logo/mailpilot_Ai.png"
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Mongoose", logo: mongooseLogo },
      { name: "REST API", logo: restApiLogo },
      { name: "JWT Authentication", logo: jwtLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "PostMan", logo: postmanlogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: mungerLogo,
    school: "Internation college Ghosait, Lakhisari (Munger university)",
    date: "2023 - 2026",
    desc: "Prsuing BCA with strong interest in Frontend Development.Worked on multiple web projects using React, Tailwind CSS and JavaScript.Developed problem-solving and practical coding skills.",
    degree: "Bachelor of Computer Applications-BCA",
  },
  {
    id: 1,
    img: bsebLogo,
    school: "BSEB(S.R.S +2 H/S Persaban, Lakhisarai)",
    date: "2017 - 2019",
    grade: "67.8%",
    desc: "Completed Higher Secondary Education in Science (PCM) with a strong foundation in Mathematics, Physics, and logical problem-solving. Developed analytical thinking and interest in technology during this period.",
    degree: "Higher Secondary Education (PCM - Science)",
  },
  {
    id: 2,
    img: bsebLogo,
    school: "BSEB(U.M.S. Surari (Lakhisarai))",
    date: "2016 - 2017",
    grade: "60%",
    desc: "Completed secondary school education.",
    degree: "Secondary School (10th)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Personal Portfolio (Vanilla JS)",
    description: "Built a fully responsive without any framework",
    image: portfolioPage,
    tags: ["HTML", "CSS", "JavaScript", "Toastify", "EmailJS"],
    github: "https://github.com/sachin-lkr/sachin-lkr.github.io",
    webapp: "https://sachin-lkr.github.io/",
  },
  {
    id: 5,
    title: "AI Resume Analyzer (MERN)",
    description:
      "An AI-powered resume analyzer that helps users evaluate their resumes, analyze job descriptions, and prepare for interviews. Features include user authentication, AI-based resume analysis, match scoring, and interview question generation.",
    image: resumeAnalyzer,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Gemini AI",
      "JWT",
    ],
    github: "https://github.com/sachin-lkr/resume-analyzer-mern.git",
    webapp: "https://resume-analyzer-mern-sepia.vercel.app/login",
  },
  {
    id: 6,
    title: "Real-Time Chat App (MERN)",
    description:
      "A real-time messaging application that allows users to communicate instantly. Features include user authentication, one-to-one messaging, online user status, and real-time message updates using Socket.IO with a responsive user interface.",
    image: chatapp,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/sachin-lkr/resume-analyzer-mern",
    webapp: "https://real-time-chat-app-jade-seven.vercel.app/",
  },
  {
    id: 7,
    title: "MailPilot AI (MERN)",
    description:
      "An AI-powered email assistant that generates professional emails, LinkedIn messages, and follow-up emails based on user prompts. Features include user authentication, AI-powered content generation, email history management, and a responsive user interface.",
    image: mailpilot,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Groq AI",
      "JWT Authentication",
    ],
    github: "https://github.com/sachin-lkr/mailpilot-ai",
    webapp: "https://mailpilot-ai-pi.vercel.app/",
  },
  {
    id: 1,
    title: "FoodHouse E-commerce Website (React)",
    description:
      "A modern and responsive e-commerce website built with React and Tailwind CSS. Users can browse food items, view product details, add items to cart and wishlist, and enjoy a smooth shopping experience with clean UI and reusable components.",
    image: foodhouse,
    tags: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Toastify",
      "React Router",
    ],
    github: "https://github.com/sachin-lkr/FoodHouse",
    webapp: "https://food-house-lake.vercel.app//",
  },
  {
    id: 2,
    title: "GitHub Profile Search App (Vanilla JS)",
    description:
      "A responsive web application that fetches GitHub user data using GitHub API. Displays profile details like avatar, repositories, followers, and following with real-time search functionality.",
    image: githubImage,
    tags: ["HTML", "CSS", "JavaScript", "GitHub API"],
    github: "https://github.com/sachin-lkr/github-profile-search",
    webapp: "https://sachin-lkr.github.io/github-profile-search/",
  },
  {
    id: 3,
    title: "Travel Website (React)",
    description:
      "A modern and responsive travel website that showcases popular destinations and travel packages. Built with HTML, CSS, and JavaScript with smooth scroll animations using AOS to enhance user experience.",
    image: travel,
    tags: ["HTML", "CSS", "JavaScript", "AOS"],
    github: "https://github.com/sachin-lkr/explore-travel-website",
    webapp: "https://explore-travel-website.vercel.app/",
  },
  {
    id: 4,
    title: "News App (React)",
    description:
      "A responsive news web application that fetches the latest news using News API. Users can browse different categories like technology, sports, and business with real-time updates and a clean user interface.",
    image: newsapp,
    tags: ["React", "CSS", "News API"],
    github: "https://github.com/sachin-lkr/react-news-api-app",
    webapp: "https://react-news-api-app.vercel.app/",
  },
];
