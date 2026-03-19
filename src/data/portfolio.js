export const personalInfo = {
  name: "RK Saykot",
  title: "Web Developer",
  email: "rksaikatkhan999@gmail.com",
  phone: "+880 1981 736667",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/rksaykot999/",
  linkedin: "https://www.linkedin.com/in/rk-saikat-khan-591366253/",
  twitter: "https://x.com/rksaykot999/",
  instagram: "https://www.instagram.com/rksaykot999/",
  profileImage: "https://avatars.githubusercontent.com/u/180281030?v=4",
  aboutImage: "https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg",
  bio: "I'm a passionate Computer Engineering student and aspiring Full-Stack Developer with a strong interest in creating innovative digital solutions. My journey in technology began during my high school years when I built my first website, and since then, I've been constantly learning and expanding my skills.",
  bio2: "I believe in the power of technology to solve real-world problems and improve people's lives. My approach to development combines technical expertise with creative problem-solving to deliver solutions that are both functional and user-friendly.",
  bio3: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.",
  typewriterTexts: [
    "A Passionate Web Developer",
    "A Creative Problem Solver",
    "A Tech Enthusiast",
    "A Lifelong Learner",
  ],
};

export const skills = {
  frontend: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "React.js", level: 60 },
    { name: "Vue.js", level: 50 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 75 },
  ],
  backend: [
    { name: "PHP", level: 75 },
    { name: "Node.js", level: 55 },
    { name: "Express.js", level: 50 },
    { name: "Python", level: 45 },
  ],
  database: [
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 50 },
    { name: "SQLite", level: 60 },
  ],
  tools: [
    { name: "Git & GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 65 },
    { name: "IntelliJ IDEA", level: 70 },
  ],
};

export const skillCards = [
  {
    icon: "fab fa-html5",
    title: "Frontend",
    desc: "HTML, CSS, JavaScript, React, Vue.js",
  },
  {
    icon: "fas fa-server",
    title: "Backend",
    desc: "Node.js, Express, MongoDB, MySQL",
  },
  {
    icon: "fas fa-tools",
    title: "Tools",
    desc: "Git, VS Code, Figma, IntelliJ IDEA",
  },
];

export const projects = [
  {
    id: 1,
    title: "Student Management System",
    desc: "A comprehensive web-based application for managing student records, grades, and academic information. The system includes admin dashboard, student portal, and faculty modules.",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80",
    category: "system",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://student-managemant-system.free.nf/",
    githubUrl: "https://github.com/rksaykot999/st-management",
    featured: true,
    stats: { efficiency: "95%", users: "500+", rating: "4.8" },
  },
  {
    id: 2,
    title: "Seat Plan Management System",
    desc: "An automated system for creating and managing exam seating arrangements with drag-and-drop functionality and real-time updates.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    category: "system",
    tags: ["JavaScript", "PHP", "MySQL", "Tailwind"],
    liveUrl: "https://seat-management.is-great.org/",
    githubUrl: "https://github.com/rksaykot999/st-management",
    featured: false,
  },
  {
    id: 3,
    title: "Queue Management System",
    desc: "A digital solution for managing customer queues with real-time updates, notifications, and analytics for service optimization.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    category: "system",
    tags: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "https://rksaykot999.github.io/Queue-System/",
    githubUrl: "https://github.com/rksaykot999/Queue-System",
    featured: false,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with payment integration, admin dashboard, and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    category: "web",
    tags: ["JavaScript", "PHP", "MySQL"],
    liveUrl: "https://rksaykot999.github.io/Influencer-products/",
    githubUrl: "https://github.com/rksaykot999/Influencer-products",
    featured: false,
  },
  {
    id: 5,
    title: "Task Management App",
    desc: "A productivity application with drag-and-drop functionality, team collaboration features, and real-time notification system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Hospital Management System",
    desc: "A comprehensive healthcare management system for managing patients, appointments, staff, and medical records.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    category: "system",
    tags: ["PHP", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const education = [
  {
    date: "2023 - Present",
    title: "Diploma in Computer Engineering",
    subtitle: "Barishal Polytechnic Institute",
    desc: "Focus on Software Engineering, Database Systems, and Web Development.",
  },
  {
    date: "2021 - 2022",
    title: "Secondary School Certificate",
    subtitle: "Science Group",
    desc: "Completed with distinction, focusing on Physics, Chemistry, and Mathematics. GPA 4.86",
  },
  {
    date: "2020 - 2021",
    title: "Junior School Certificate",
    subtitle: "Barishal Board",
    desc: "Graduated with top marks in Computer Science and Mathematics.",
  },
];

export const experience = [
  {
    date: "2024 - Present",
    title: "Freelancing in Web Development",
    subtitle: "Self-Employed",
    desc: "Developed custom websites and web applications for various clients, focusing on responsive design and user experience.",
  },
  {
    date: "2023 - Present",
    title: "Studying Diploma",
    subtitle: "Barishal Polytechnic Institute",
    desc: "Studying front-end development using React.js and assisted in backend API development with Node.js and Express.",
  },
  {
    date: "2022 - 2023",
    title: "Computer Basic Instructor",
    subtitle: "Youth Coding Academy",
    desc: "Taught programming fundamentals to students aged 12-18 using Python and JavaScript.",
  },
];

export const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer a range of services including web development, responsive design, full-stack development, database design, and technical consulting.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-4 months.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, I work with clients from all over the world. I'm comfortable working across different time zones and can accommodate various communication preferences.",
  },
  {
    q: "What are your rates?",
    a: "My rates vary depending on the project scope, complexity, and timeline. I offer competitive pricing for both fixed-price and hourly engagements.",
  },
];
