import { House, User, FileText, Briefcase, Phone, Code } from 'lucide-react';

const MES = '/img/portfolio/Dashboard/MES.png';
const ThisWeb = '/img/portfolio/Websites/This Website.png';
const KIOSK = '/img/portfolio/Websites/KIOSK.png';
const CCTV = '/img/portfolio/AI/CCTV.png';
const AC = '/img/portfolio/Websites/AssetManagement.png';
const AdmReport = '/img/portfolio/Dashboard/AdmReport.png';
const Airflow = '/img/portfolio/Backend/Airflow.png';
const WasteRoto = '/img/portfolio/Dashboard/Waste.png';
const BaliKamus = '/img/portfolio/Mobile/BaliKamus.jpg';
const ARMoto = '/img/portfolio/Mobile/ARMoto.jpg';
const ICMP = '/img/portfolio/Dashboard/ICMP.png';
const PE = '/img/portfolio/Dashboard/PE.png';
const NodeRed = '/img/portfolio/Backend/NodeRed.png';
const CS = '/img/portfolio/Websites/CS.png';
const PBI = '/img/portfolio/Dashboard/PBI.png';
const SPEED = '/img/portfolio/Dashboard/Speed.png';
const Credit = '/img/portfolio/Websites/CreditEligibility.png';
const Premi = '/img/portfolio/Websites/Insurance.png';
const Vaccine = '/img/portfolio/Websites/Vaccine.png';
const Tiket = '/img/portfolio/AI/Tiket.jpg';
const CCTV2 = '/img/portfolio/AI/CCTV2.png';

const OpenCVIcon = '/img/icons/opencv-icon.svg';
const AirflowIcon = '/img/icons/apacheairflow-icon.svg';
const NodeRedIcon = '/img/icons/nodered-icon.svg';
const PowerBIIcon = '/img/icons/powerbi-icon.svg';
const ScikitLearnIcon = '/img/icons/scikitlearn-icon.svg';
const FastAPIIcon = '/img/icons/fastapi-icon.svg';
const KerasIcon = '/img/icons/keras-icon.svg';

export const sections = [
  { id: 'home', label: 'Home', icon: House },
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

export const education = [
  {
    degree: "Bachelor of Engineering (Informatics Engineering)",
    institution: "Gunadarma University",
    duration: "2017 - 2021",
    notes: "Graduated Cum Laude with a GPA of 3.75 / 4.00. Final project focused on sentiment analysis of online learning discourse on Twitter using K-Nearest Neighbor, deployed via a Flask web application."
  },
  {
    degree: "High School - Science Major",
    institution: "SMAN 4 Bekasi",
    duration: "2014 - 2017",
    notes: "Focused on natural sciences including mathematics, physics, chemistry, and biology, which built the foundation for my analytical and technical skills."
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
    { skill: 'Python', devicon: 'devicon-python-plain colored' },
    { skill: 'PHP', devicon: 'devicon-php-plain colored' },
    { skill: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
    { skill: 'SQL', devicon: 'devicon-mysql-plain colored' },
    { skill: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
    { skill: 'Dart', devicon: 'devicon-dart-plain colored' },
  ],
  tools: [
    { skill: 'MySQL / PostgreSQL / SQL Server', devicon: 'devicon-postgresql-plain colored' },
    { skill: 'React.js', devicon: 'devicon-react-original colored' },
    { skill: 'Node.js', devicon: 'devicon-nodejs-plain colored' },
    { skill: 'CodeIgniter', devicon: 'devicon-codeigniter-plain colored' },
    { skill: 'Flutter', devicon: 'devicon-flutter-plain colored' },
    { skill: 'Flask & FastAPI', customIcon: FastAPIIcon },
    { skill: 'Git', devicon: 'devicon-git-plain colored' },
    { skill: 'Docker', devicon: 'devicon-docker-plain colored' },
    { skill: 'Apache Airflow', customIcon: AirflowIcon },
    { skill: 'Node-RED', customIcon: NodeRedIcon },
    { skill: 'Power BI / Tableau / Looker Studio', customIcon: PowerBIIcon },
    { skill: 'Selenium', devicon: 'devicon-selenium-original colored' },
  ],
  machineLearning: {
    tools: [
      { skill: 'TensorFlow', devicon: 'devicon-tensorflow-original colored' },
      { skill: 'Keras', customIcon: KerasIcon },
      { skill: 'Scikit-learn', customIcon: ScikitLearnIcon },
      { skill: 'OpenCV', customIcon: OpenCVIcon }
    ],
    techniques: [
      { skill: 'Computer Vision (YOLO, OCR)' },
      { skill: 'NLP (Sentiment, Ticket Categorization)' },
      { skill: 'Time Series Forecasting (RNN, N-BEATS)' },
      { skill: 'Clustering, Regression, Classification' }
    ]
  }
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
