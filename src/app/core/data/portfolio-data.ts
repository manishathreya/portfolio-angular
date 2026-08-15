import {
  AchievementEntry,
  EducationEntry,
  ExperienceEntry,
  PersonalInfo,
  ProjectEntry,
  SkillCategory,
} from '../models/portfolio.models';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Manish Athreya',
  role: 'Full-Stack Java Developer',
  location: 'Bengaluru, India',
  email: 'manishathreyaofficial@gmail.com',
  phone: '+91 91083 81971',
  yearsOfExperience: '3',
  summary:
    'Full-stack developer with 3+ years of experience building Spring Boot microservices, Spring Cloud, Eureka, and secure REST APIs, paired with strong frontend expertise in Angular, RxJS, and Tailwind CSS. Comfortable working across the stack, from service discovery and event-driven Kafka pipelines to polished, reactive UIs — and fluent with modern AI-assisted tooling to move faster without cutting corners on quality.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/manishathreya', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/manish-athreya', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:manishathreyaofficial@gmail.com', icon: 'mail' },
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['Spring Boot', 'Spring Cloud', 'API Gateway', 'Eureka', 'Spring Security', 'JWT', 'JPA', 'Hibernate'],
  },
  {
    category: 'Frontend',
    skills: ['Angular', 'Angular Material', 'Tailwind CSS', 'TypeScript', 'RxJS'],
  },
  {
    category: 'Messaging & Data',
    skills: ['Apache Kafka', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Python & ML',
    skills: ['Python', 'ML Model Development', 'Feature Engineering', 'Data Analysis', 'REST-based ML Integration'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git / GitHub', 'Docker', 'Postman', 'Liquibase', 'Swagger / OpenAPI', 'Maven', 'Jira'],
  },
  {
    category: 'Architecture & Concepts',
    skills: ['Microservices Architecture', 'REST APIs', 'Multithreading', 'CI/CD', 'Caching', 'Distributed Systems'],
  },
  {
    category: 'AI-Assisted Development',
    skills: ['GitHub Copilot', 'ChatGPT', 'Claude', 'Gemini'],
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Tata Consultancy Services',
    role: 'Full Stack Developer — Spring Boot, Spring Cloud, Angular',
    location: 'Bangalore',
    duration: 'Jun 2023 — Present',
    highlights: [
      'Designed scalable Spring Boot microservices with Spring Cloud, API Gateway, Eureka, and centralized configuration.',
      'Integrated Kafka for asynchronous communication and event-driven workflow enhancements.',
      'Implemented secure JWT authentication with RBAC, global filters, and interceptors.',
      'Optimized PostgreSQL queries (30% faster) through indexing, profiling, and schema refinement.',
      'Introduced Redis caching for reduced latency and improved request throughput.',
      'Engineered modular UIs using Angular Material, Tailwind, and reactive patterns via RxJS.',
      'Automated DB migrations via Liquibase and API documentation using Swagger/OpenAPI.',
      'Applied GitHub Copilot, ChatGPT, and Claude for accelerated development and code quality improvements.',
    ],
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'OnStar Guardian',
    tagline: 'Spring Boot microservices — General Motors',
    highlights: [
      'Built and maintained microservices supporting 7M+ global users.',
      'Integrated Kafka, Eureka, API Gateway, Liquibase, and Swagger for routing, discovery, and high availability.',
    ],
  },
  {
    name: 'DDM Management System',
    tagline: 'Spring Boot & Angular',
    highlights: [
      'Developed reusable, dynamic UI components with Angular Material, Tailwind CSS, and RxJS — improving UI consistency and development speed by 30%.',
      'Optimized backend pagination and query tuning in Spring Boot, reducing response time and improving performance by 40%.',
    ],
  },
  {
    name: 'ML Insights Dashboard',
    tagline: 'Python ML & Angular',
    highlights: [
      'Integrated FastAPI services for ML preprocessing, code generation, and postprocessing alongside a scalable UI.',
      'Designed a responsive Angular + Tailwind dashboard with charts and rung-diagram editing (JointJS) for PLC code, helping SMEs cut development time by 20%.',
    ],
  },
  {
    name: 'Rhapsody POC',
    tagline: 'Spring Boot, Angular, Postgres',
    highlights: [
      'Proposed a proof-of-concept to replace legacy tools with a scalable, high-performance solution, presented to a panel of stakeholders.',
      'Built the prototype with Spring Boot microservices, Angular, and Postgres — achieving an 80% performance improvement and faster response times.',
    ],
  },
];

export const ACHIEVEMENTS: AchievementEntry[] = [
  { text: 'Appreciated for delivering high-quality Spring Boot and Angular modules in enterprise projects with 100% CSI.' },
  { text: 'Led modernization from legacy systems to a Spring Cloud + Angular microservices architecture.' },
  { text: 'Recognized for leveraging AI tools to accelerate development and improve code reliability.' },
];

export const EDUCATION: EducationEntry[] = [
  {
    institution: 'BNM Institute of Technology',
    degree: 'B.E. in Computer Science',
    detail: 'CGPA: 8.01',
  },
];
