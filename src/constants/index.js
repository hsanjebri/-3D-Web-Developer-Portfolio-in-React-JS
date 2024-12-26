import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  dari,
  accompanyConsulting,
  esprit,
  Freelancer,
  shopify,
  carrent,
  clinivia,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Full-Stack Developer",
    icon: web,
  },
  {
    title: "Flutter Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Visionary Tech Architect",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Student",
    company_name: "ESPRIT",
    icon: esprit,
    iconBg: "#383E56",
    date: "2022 - 2025",
    points: [
    "Building a strong foundation in software engineering through rigorous academic coursework.",
      "Engaged in various projects, enhancing problem-solving, teamwork, and leadership skills.",
      "Specializing in web and mobile application development, with a focus on real-world solutions.",
      "Collaborating with peers and mentors to drive innovative approaches to technology.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Accompany Consulting",
    icon: accompanyConsulting, // Replace with the actual icon variable or path
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Contributed to the migration of a legacy banking application, MRO BH, to a microservices architecture.",
      "Developed, tested, and deployed scalable microservices to enhance application performance and modularity.",
      "Collaborated with cross-functional teams to ensure a smooth transition and minimal downtime.",
      "Gained expertise in modern software engineering practices, including CI/CD and API integration.",
    ],
  },
  {
    title: "Mobile App Development Intern",
    company_name: "AccompanyConsulting",
    icon: accompanyConsulting,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and optimized mobile applications to improve user engagement and functionality.",
      "Collaborated with cross-disciplinary teams to deliver projects within defined timelines.",
      "Performed code debugging and ensured application performance met user expectations.",
      "Participated in the end-to-end lifecycle of app development, from ideation to deployment.",
    ],
  },
  {
    title: "Full Stack Developer (Personal Projects)",
    company_name: "Freelance",
    icon: Freelancer,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Designed and developed full-stack applications addressing real-world challenges.",
      "Demonstrated adaptability by utilizing diverse tools and frameworks to achieve project goals.",
      "Created user-centric, scalable, and efficient solutions for personal and community use.",
      "Continuously enhanced technical expertise through independent learning and innovation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Clinvia",
    description:
    "A healthcare management platform designed to streamline patient bookings, doctor schedules, and medical records. This platform bridges the gap between patients and healthcare providers by offering an intuitive and efficient solution for managing healthcare services.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "AI Integration",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "purple-text-gradient",
      },
      {
        name: "Healthcare Analytics",
        color: "teal-text-gradient",
      },
    ]
    ,
    image: clinivia,
    source_code_link: "https://github.com/hsanjebri/clinivia-angular",
  },
  {
    name: "Dari Real Estate Platform",
    description:
      "A feature-rich real estate application that empowers users to buy, sell, rent, and estimate property value with ease. Dari integrates advanced functionalities such as credit simulation, subscription management, and online furniture sales by navigating the real estate market.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "red-text-gradient",
        },
        {
          name: "Keycloak",
          color: "green-text-gradient",
        },
        {
          name: "Power BI",
          color: "purple-text-gradient",
        },
        {
          name: "Docker",
          color: "teal-text-gradient",
        },
        {
          name: "Jenkins",
          color: "yellow-text-gradient",
        },
      ],
      
    image: dari,
    source_code_link: "https://github.com/",
  },
  {
    name: "EduTrack LMS",
    description:
    "A comprehensive Learning Management System designed to enhance the educational experience for both students and educators. EduTrack offers tools for course management, progress tracking, and interactive learning, making education more accessible and efficient.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "Keycloak",
        color: "green-text-gradient",
      },
      {
        name: "Power BI",
        color: "purple-text-gradient",
      },
      {
        name: "Docker",
        color: "teal-text-gradient",
      },
      {
        name: "Jenkins",
        color: "yellow-text-gradient",
      },
    ]
    ,
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
