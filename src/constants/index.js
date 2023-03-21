import {
  crypto,
  portfolio,
  metaverse,
  computer,
  education,
  tree,
  working,
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
  threejs,
  netflix,
  music,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React js Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Nodejs Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'SDE intern',
    company_name: 'CypherACE',
    icon: working,
    iconBg: '#383E56',
    date: 'october 2021 - february 2022',
    points: [
      'Developed image processing algorithms using Machine Learning Algorithms',
      'Collaborating with other interns in developing a desktop application using c#.',
      'Implementing responsive design and ensuring cross-browser compatibility using React js.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'GATE 2022 CS',
    company_name: 'Engineering graduate Exam',
    icon: tree,
    iconBg: '#E6DEDD',
    date: 'Feb 2022',
    points: [
      'Qualified one of the toughest Indian engineering graduate Exam and ranked ahead of 97 percent of the candidates.',
      'Qualified again in 2023',
      'The exam checks knowledge and understanding of core computer science concepts like programming, Data structures and algorithms, Operating systems, computer networks, database management etc',
    ],
  },
  {
    title: 'Graduated',
    company_name: 'Education',
    icon: education,
    iconBg: '#E6DEDD',
    date: 'Jan 2018 - August 2022',
    points: [
      'completed my bachelors in Engineering with major in computer science and engineering.',
      'Participated in various extra-curricular events.',
      'The course included core cs subjects and labs',
    ],
  },
  {
    title: 'Projects',
    company_name: 'for clients and personal work',
    icon: computer,
    iconBg: '#383E56',
    date: 'Jan 2022 - Now',
    points: [
      'Developed various challenging projects for many satisfied clients.',
      'I also built various projects as a side hustle',
      'Implemented responsive design and ensured cross-browser compatibility.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Netflix(clone)',
    description:
      'A Netflix clone which is a complete fullstack application. The Web app can be logged in using google or github or classic sign in. The app fetches videos stored in mongodb database and displays them in the frontend. Prisma is used to create schema and access db',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: netflix,
    source_code_link: 'https://github.com/satishkumarsajjan/Netflix-clone',
    link: 'https://netflix-clone-xyz.vercel.app/',
  },
  {
    name: 'Music app',
    description:
      'A music application built using React, Tailwind and shazam core API. The app fetches music from shazam and displays the song. The songs can be queried using different filters like trending, location etc. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'RapidAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: music,
    source_code_link: 'https://github.com/satishkumarsajjan/spotify-clone',
    link: 'https://spotify-clone-beta-ten.vercel.app/',
  },

  {
    name: 'Metaversus',
    description:
      'A Landing page for a web app that display info about Metaverse. Created beautiful styling for cards using Tailwind. Completely built using nextjs. Smooth slide animations are implemented using framer-motion',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/satishkumarsajjan/Metaverse',
  },
  {
    name: 'Another portfolio',
    description:
      'A SAP portfolio web app built using React js and sanity CMS. The web has animations and responsiveness implemented using tailwind css. The app has contact form that sends personalized mail to the me when a visitor submits his/her details',
    tags: [
      {
        name: 'React js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'sanity',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/satishkumarsajjan',
  },
  {
    name: 'crypto hunter',
    description:
      'A React js app that fetches real time crypto currency data from a server and display it with neat and clear UI. The app display real time data in two currencies USdollar and INR',
    tags: [
      {
        name: 'React js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'sanity',
        color: 'pink-text-gradient',
      },
    ],
    image: crypto,
    source_code_link: 'https://github.com/satishkumarsajjan',
  },
];

export { services, technologies, experiences, testimonials, projects };
