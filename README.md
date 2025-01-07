📋 Table of Contents

🤖 Introduction

⚙️ Tech Stack

🔋 Features

🤸 Quick Start

🕸️ Code Snippets

🔗 Links

🤖 Introduction

This project showcases an immersive web experience combining cutting-edge design, interactive animations, and 3D modeling. It demonstrates expertise in web development and creative problem-solving, focusing on delivering user-centric and visually appealing digital solutions.

The project is a testament to technical proficiency and innovative thinking, making it an ideal example of professional web development.

 

⚙️ Tech Stack

React.js

Three.js

React Three Fiber

React Three Drei

EmailJS

Vite

Tailwind CSS

🔋 Features

Customizable 3D Hero Section: Includes a dynamic 3D desktop model tailored to meet specific requirements.

Interactive Sections: Utilizes animations powered by Framer Motion for engaging user experiences.

3D Skills Section: Showcases skills through 3D geometries rendered with Three.js and React Three Fiber.

Animated Projects and Feedback: Features seamless animations for project showcases and user testimonials.

Contact Section: Integrates a 3D Earth model with functional email sending capabilities using EmailJS.

Dynamic 3D Stars: Adds a visually appealing starry background generated in real-time.

Responsive Design: Ensures optimal display and usability across devices of all screen sizes.

🤸 Quick Start

Follow these steps to set up the project locally on your machine.

Prerequisites

Ensure you have the following installed:

Git

Node.js

npm (Node Package Manager)

Installation

Install the dependencies:


npm install

Set Up Environment Variables

Create a .env file in the root of the project and add the following:
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_SERVICEID=your_emailjs_service_id
Running the Project
npm run dev
Code Snippets

constants.js:
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Web Developer", icon: "path-to-icon" },
  { title: "React Native Developer", icon: "path-to-icon" },
  { title: "Full-Stack Developer", icon: "path-to-icon" },
  { title: "Content Creator", icon: "path-to-icon" },
];


Motion.js:
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});