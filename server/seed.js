// Seeds the database with Muhammad Saykot's real profile data.
// Run with: npm run seed
import { db, initDb } from './db.js';

const certifications = [
  { id: 1, institute: 'Government of the People\'s Republic of Bangladesh (NSDA)', credential: 'Computer Operation, Level-3', category: 'Technology' },
  { id: 2, institute: 'UCEP, Barishal', credential: 'Diploma in Computer Science', category: 'Technology' },
  { id: 3, institute: 'Freelancing Hero Community', credential: 'Programming', category: 'Technology' },
  { id: 4, institute: 'Shomvob Academy', credential: 'Digital Marketing', category: 'Professional Skills' },
  { id: 5, institute: 'Shomvob Academy', credential: 'Graphic Design & Video Editing', category: 'Technology' },
  { id: 6, institute: 'Sajida Foundation', credential: 'Cyber Hygiene Training', category: 'Technology' },
  { id: 7, institute: 'Simplilearn', credential: 'Introduction to Cyber Security', category: 'Technology' },
  { id: 8, institute: 'Cambridge International Qualification, UK', credential: 'Basic of Safety Management', category: 'Safety & Health' },
  { id: 9, institute: 'HP LIFE', credential: 'Effective Leadership', category: 'Professional Skills' },
  { id: 10, institute: 'Bangladesh Road Transport Authority (BRTA)', credential: 'Motor Driving', category: 'Field & Vocational' },
  { id: 11, institute: 'Government of the People\'s Republic of Bangladesh (NSDA)', credential: 'Mobile Phone Servicing, Level-1', category: 'Field & Vocational' },
  { id: 12, institute: 'Department of Youth Development', credential: 'Aquaculture', category: 'Field & Vocational' },
  { id: 13, institute: 'Shomvob Academy', credential: 'Self-Confidence Technique', category: 'Professional Skills' },
  { id: 14, institute: 'Cursa', credential: 'First Aid Training', category: 'Safety & Health' },
  { id: 15, institute: 'UNICEF', credential: 'Public Health Reporting', category: 'Safety & Health' },
  { id: 16, institute: 'UNICEF', credential: 'CCCs in Humanitarian Action', category: 'Safety & Health' },
  { id: 17, institute: 'Shomvob Academy', credential: 'Smart Interview Technique', category: 'Professional Skills' },
  { id: 18, institute: 'HP LIFE', credential: 'Resume Writing and Job Interview', category: 'Professional Skills' },
  { id: 19, institute: 'HP LIFE', credential: 'AI for Beginners', category: 'Technology' },
  { id: 20, institute: 'HP LIFE', credential: 'Business Email', category: 'Professional Skills' },
  { id: 21, institute: 'ICT Division', credential: 'Digital Literacy Centre', category: 'Technology' },
];

const skills = [
  { id: 1, group: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React JS', 'Next JS', 'TypeScript', 'Responsive & Mobile-First Design', 'WordPress', 'CMS Platforms', 'Git / Version Control'] },
  { id: 2, group: 'Programming', items: ['Python Programming', 'Java Programming', 'Kotlin'] },
  { id: 3, group: 'Design & Tools', items: ['Adobe Photoshop & Illustrator', 'UI/UX Design Fundamentals', 'Graphics Design'] },
  { id: 4, group: 'Office & Computer', items: ['Microsoft Office Suite (Word, Excel, PowerPoint)', 'Typing Speed: 75 WPM', 'Hardware & OS Installation'] },
];

const experience = [
  {
    id: 1,
    role: 'Freelance Web Developer',
    org: 'Multiple Companies & Clients',
    period: '2023 – Present',
    type: 'Contract-Based',
    description: 'Delivered custom websites and web applications for local businesses and organizations. Developed responsive user interfaces using React, Tailwind CSS, JavaScript, and PHP. Configured domains, hosting environments, email services, and website security. Provided maintenance, bug fixing, and performance optimization services.',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'PHP']
  },
  {
    id: 2,
    role: 'Technical Trainer & Academic Tutor',
    org: 'Private / Online Tutoring',
    period: '2023 – Present',
    type: 'Freelance',
    description: 'Provide training in Web Development, including HTML, CSS, JavaScript, React, Git, and GitHub. Teach Programming Fundamentals and Computer Science concepts to beginner learners. Conduct private and online tutoring sessions for Mathematics, Science, and ICT subjects.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub']
  },
  {
    id: 3,
    role: 'Diploma in Engineering',
    org: 'Barisal Polytechnic Institute',
    period: 'Session: 2022–23',
    type: 'Education',
    description: 'Computer Science & Technology.',
    skills: []
  },
  {
    id: 4,
    role: 'Secondary School Certificate (S.S.C)',
    org: 'Gazipur Govt. Technical School & College',
    period: 'Passing Year: 2022',
    type: 'Education',
    description: 'Building Maintenance (1st Shift). GPA: 4.86',
    skills: []
  }
];

const projects = [
  {
    id: 1,
    name: 'Student Management System',
    type: 'Web App',
    description: 'A comprehensive system to manage student data and records.',
    tech: ['PHP', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Daisy UI', 'MySQL', 'Git / Version Control'],
    links: { demo: 'https://student-managemant-system.free.nf/', github: 'https://github.com/rksaykot999/Student-Management-System' }
  },
  {
    id: 2,
    name: 'Seat Plan Management System',
    type: 'Web App',
    description: 'An application to efficiently organize and manage examination seat plans.',
    tech: ['PHP', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Daisy UI', 'MySQL'],
    links: { demo: 'https://seat-management.is-great.org', github: 'https://github.com/rksaykot999/Seat-Plan-Management-System' }
  },
  {
    id: 3,
    name: 'Qadr Media & Communications Ltd.',
    type: 'Website',
    description: 'Official responsive website for Qadr Media & Communications Ltd.',
    tech: ['HTML', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Daisy UI', 'MySQL'],
    links: { demo: 'https://qadrmcl.com/', github: '' }
  },
  {
    id: 4,
    name: 'People E Sheba',
    type: 'Web App',
    description: 'A React-based community services platform.',
    tech: ['React JS', 'Node JS', 'MySQL', 'Tailwind CSS', 'Daisy UI', 'Git / Version Control'],
    links: { demo: 'https://people-esheba.vercel.app/', github: 'https://github.com/rksaykot999/people-esheba' }
  },
  {
    id: 5,
    name: 'Personal Messenger',
    type: 'Mobile App',
    description: 'A real-time messaging application with responsive mobile-first design.',
    tech: ['React Native', 'Node JS', 'Google Firebase'],
    links: { demo: 'https://personal-messenger-by-rk.vercel.app/', github: 'https://github.com/rksaykot999/Personal-Messenger' }
  },
  {
    id: 6,
    name: 'Banglar Bagh Foundation',
    type: 'Website',
    description: 'Responsive foundation website with a focus on organization visibility.',
    tech: ['PHP', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Daisy UI', 'MySQL'],
    links: { demo: 'https://www.banglarbagh.org/', github: '' }
  }
];

async function seed() {
  await initDb();
  db.data.skills = skills;
  db.data.projects = projects;
  db.data.experience = experience;
  db.data.certifications = certifications;
  db.data.messages = db.data.messages || [];
  await db.write();
  console.log(`Seeded: ${skills.length} skill groups, ${projects.length} projects, ${experience.length} experience entries, ${certifications.length} certifications.`);
}

seed();
