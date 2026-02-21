// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import cLogo from "./assets/tech_logo/c.png";

import javaLogo from "./assets/tech_logo/java.png";

import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import csharpLogo from "./assets/tech_logo/csharp.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/munger.png";
import bsaLogo from "./assets/education_logo/bseb.jpg";
import vpsLogo from "./assets/education_logo/bseb.jpg";

// Project Section Logo's
import portfolioPage from "./assets/work_logo/my2ndPortfolio.png";
import githubSearch from "./assets/work_logo/githubSearch.JPG"

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
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
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
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Internation college Ghosait, Lakhisari (Munger university)",
    date: "2023 - 2026",
    desc: "Prsuing BCA with strong interest in Frontend Development.Worked on multiple web projects using React, Tailwind CSS and JavaScript.Developed problem-solving and practical coding skills.",
    degree: "Bachelor of Computer Applications-BCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "BSEB(S.R.S +2 H/S Persaban, Lakhisarai)",
    date: "2017 - 2019",
    grade: "67.8%",
    desc: "Completed Higher Secondary Education in Science (PCM) with a strong foundation in Mathematics, Physics, and logical problem-solving. Developed analytical thinking and interest in technology during this period.",
    degree: "Higher Secondary Education (PCM - Science)",
  },
  {
    id: 2,
    img: vpsLogo,
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
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sachin-lkr/sachin-lkr.github.io",
    webapp: "https://sachin-lkr.github.io/",
  },
  {
    id: 1,
    title: "GitHub Profile Search App",
    description:
      "A responsive web application that fetches GitHub user data using GitHub API. Displays profile details like avatar, repositories, followers, and following with real-time search functionality.",
    image: githubSearch,
    tags: ["HTML", "CSS", "JavaScript", "GitHub API"],
    github: "https://github.com/sachin-lkr/github-profile-search",
    webapp: "https://sachin-lkr.github.io/github-profile-search/",
  },
];
