import { User, FileText, Briefcase, Phone, Code } from 'lucide-react';

import MES from '../assets/img/portfolio/Dashboard/MES.png';
import ThisWeb from '../assets/img/portfolio/Websites/This Website.png';
import KIOSK from '../assets/img/portfolio/Websites/KIOSK.png';
import CCTV from '../assets/img/portfolio/AI/CCTV.png';
import AC from '../assets/img/portfolio/Websites/AssetManagement.png';
import COA from '../assets/img/portfolio/Websites/COA.png';
import AdmReport from '../assets/img/portfolio/Dashboard/AdmReport.png';
import Airflow from '../assets/img/portfolio/Backend/Airflow.png';
import WasteRoto from '../assets/img/portfolio/Dashboard/Waste.png';
import BaliKamus from '../assets/img/portfolio/Mobile/BaliKamus.jpg';
import ARMoto from '../assets/img/portfolio/Mobile/ARMoto.jpg';
import ICMP from '../assets/img/portfolio/Dashboard/ICMP.png';
import PE from '../assets/img/portfolio/Dashboard/PE.png';
import NodeRed from '../assets/img/portfolio/Backend/NodeRed.png';
import CS from '../assets/img/portfolio/Websites/CS.png';
import PBI from '../assets/img/portfolio/Dashboard/PBI.png';
import SPEED from '../assets/img/portfolio/Dashboard/Speed.png';
import Credit from '../assets/img/portfolio/Websites/CreditEligibility.png';
import Premi from '../assets/img/portfolio/Websites/Insurance.png';
import Vaccine from '../assets/img/portfolio/Websites/Vaccine.png';
import Tiket from '../assets/img/portfolio/AI/Tiket.jpg';
import CCTV2 from '../assets/img/portfolio/AI/CCTV2.png';

export const sections = [
  { id: 'home', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Phone }
];

export const projects = [
  {
    title: "AI Operator Monitoring System",
    description: "AI-enhanced system using CCTV to ensure machine operator presence during critical operations.",
    image: CCTV,
    tech: ["HTML", "JQuery", "Python", "Flask", "SQL"]
  },
  {
    title: "Manufacturing Execution System",
    description: "Real-time dashboard to monitor machine processes and production performance.",
    image: MES,
    tech: ["HTML", "JQuery", "Node-Red"]
  },
  {
    title: "Interactive KIOSK",
    description: "Shopfloor web application to assist machine operators with real-time and planning data.",
    image: KIOSK,
    tech: ["HTML", "PHP", "JQuery", "SQL", "Node-Red"]
  },
  {
    title: "Asset Management System",
    description: "QR-based web app for real-time asset tracking and inventory control.",
    image: AC,
    tech: ["HTML", "PHP", "Python", "JQuery", "SQL"]
  },
  {
    title: "Production Admin Report",
    description: "Daily reporting dashboard for production tracking with Excel export.",
    image: AdmReport,
    tech: ["HTML", "PHP", "JQuery", "SQL"]
  },
  {
    title: "Plant Efficiency Dashboard",
    description: "Monthly dashboard for evaluating production efficiency using plant metrics.",
    image: PE,
    tech: ["HTML", "PHP", "JQuery", "SQL"]
  },
  {
    title: "Manufacturing Efficiency Dashboard",
    description: "Power BI dashboard tracking output across machines and shifts.",
    image: PBI,
    tech: ["Power BI", "SQL"]
  },
  {
    title: "ARMoto (AR Motorcycle Viewer)",
    description: "AR mobile app to scan motorcycle posters and display 3D models in real-time.",
    image: ARMoto,
    tech: ["Unity", "Blender"]
  },
  {
    title: "Balikamus (Balinese OCR Translator)",
    description: "Mobile app to translate Balinese and English using image OCR.",
    image: BaliKamus,
    tech: ["Flutter", "Firebase", "SQL"]
  },
  {
    title: "Credit Eligibility Checker",
    description: "Machine learning web app to assess borrower eligibility for credit.",
    image: Credit,
    tech: ["HTML", "Python", "SQL"]
  },
  {
    title: "Health Insurance Premi Checker",
    description: "Predicts insurance premium based on user input using ML models.",
    image: Premi,
    tech: ["HTML", "Python", "SQL"]
  },
  {
    title: "Vaccine Screening",
    description: "AI-powered app to determine COVID-19 vaccine eligibility.",
    image: Vaccine,
    tech: ["HTML", "Python", "SQL"]
  },
  {
    title: "Production Checksheet",
    description: "Web system to automate and accelerate production checksheet processes.",
    image: CS,
    tech: ["HTML", "PHP", "JQuery", "SQL"]
  },
  {
    title: "Waste Incentive Dashboard",
    description: "Tracks monthly waste vs. targets and incentives for sustainable practices.",
    image: WasteRoto,
    tech: ["HTML", "PHP", "JQuery", "SQL"]
  },
  {
    title: "Inventory Control Dashboard",
    description: "Annual material inventory dashboard with interactive filtering and reporting.",
    image: ICMP,
    tech: ["HTML", "PHP", "JQuery", "SQL"]
  },
  {
    title: "Python Backend Automation",
    description: "Task automation backend using Apache Airflow for emails and WhatsApp notifications.",
    image: Airflow,
    tech: ["Python", "Apache Airflow"]
  },
  {
    title: "Node-Red Real-Time Collection",
    description: "Flow-based backend collecting live machine data for dashboards.",
    image: NodeRed,
    tech: ["Node-Red"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site built with React to showcase my development and AI projects.",
    image: ThisWeb,
    tech: ["ReactJS"]
  },
  {
    title: "Monthly Speed Dashboard",
    description: "Power BI dashboard to analyze speed and output by material type.",
    image: SPEED,
    tech: ["Power BI"]
  },
  {
    title: "Helpdesk Ticket Categorization",
    description: "NLP-based IT Support ticketing on Whatsapp that automatically classifies tickets into categories to reduce manual input and improve response efficiency.",
    image: Tiket,
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Node.js"]
  },
  {
    title: "Safety Equipment Detection",
    description: "Computer vision system using a custom-trained YOLO model to detect personal protective equipment (PPE) for ISO compliance in manufacturing environments.",
    image: CCTV2,
    tech: ["Python", "YOLO", "OpenCV", "Flask"]
  }
];

export const experience = [
  {
    title: "Web Application Specialist",
    company: "PT. Supernova Flexible Packaging",
    duration: "Aug 2022 – Present",
    description: "Developed a range of full-stack web solutions for manufacturing operations, including an AI-powered monitoring system, interactive dashboards, and a real-time KIOSK web app. Integrated ERP and machine data to streamline workflows and improve decision-making efficiency."
  },
  {
    title: "Data Scientist & Full-Stack Developer (Freelance)",
    company: "Various Clients",
    duration: "Oct 2021 – Present",
    description: "Delivered machine learning projects involving computer vision, NLP, and predictive analytics. Built end-to-end applications such as operator detection with YOLO, OCR-based data extraction, and helpdesk ticket categorization tools, integrating them with modern web stacks including React, Node.js, and Flask."
  },
  {
    title: "Data Analyst Intern – Manufacturing Excellence 4.0",
    company: "PT. Supernova Flexible Packaging",
    duration: "Jan 2022 – Aug 2022",
    description: "Created Power BI dashboards, developed machine downtime prediction models, and automated data processing tasks. Contributed to operational improvements by enabling real-time monitoring and reducing manual reporting overhead by over 70%."
  }
];

export const skillsCategories = {
  languages: [
    { skill: 'Python', level: '95%' },
    { skill: 'JavaScript', level: '90%' },
    { skill: 'TypeScript', level: '80%' },
    { skill: 'PHP', level: '75%' },
    { skill: 'SQL', level: '85%' },
    { skill: 'Dart', level: '70%' },
    { skill: 'Java', level: '65%' }
  ],
  tools: [
    { skill: 'React.js', level: '90%' },
    { skill: 'Node.js', level: '85%' },
    { skill: 'Flask & FastAPI', level: '80%' },
    { skill: 'Power BI / Tableau / Looker Studio', level: '75%' },
    { skill: 'Git', level: '85%' },
    { skill: 'Docker', level: '75%' },
    { skill: 'Flutter', level: '75%' },
    { skill: 'Apache Airflow', level: '70%' },
    { skill: 'Node-RED', level: '80%' }
  ],
  machineLearning: [
    { skill: 'Computer Vision (YOLO, OCR)', level: '85%' },
    { skill: 'NLP (Sentiment, Ticket Categorization)', level: '80%' },
    { skill: 'Scikit-learn', level: '80%' },
    { skill: 'OpenCV', level: '85%' },
    { skill: 'TensorFlow / Keras', level: '70%' },
    { skill: 'Time Series Forecasting (RNN, N-BEATS)', level: '75%' },
    { skill: 'Clustering, Regression, Classification', level: '80%' }
  ]
};


export const contactInfo = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'dedev524@gmail.com',
    href: 'mailto:dedev524@gmail.com'
  },
  {
    icon: 'Github',
    label: 'GitHub',
    value: 'github.com/niwayandm',
    href: 'https://github.com/niwayandm'
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/niwayandm',
    href: 'https://linkedin.com/in/niwayandm'
  }
];
