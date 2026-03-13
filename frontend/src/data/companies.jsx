import React from 'react';


// Data for the Hiring Companies section

export const HIRING_ROWS = [
  [
    { name: "Google",         role: "AI / ML Engineer"       },
    { name: "Amazon",         role: "Data Engineer"          },
    { name: "Microsoft",      role: "Cloud Data Architect"   },
    { name: "Deloitte",       role: "Analytics Consultant"   },
    { name: "JPMorgan",       role: "Quant Analyst"          },
    { name: "Goldman Sachs",  role: "IB Analyst"             },
    { name: "TCS",            role: "Data Scientist"         },
    { name: "Infosys",        role: "Software Engineer"      },
    { name: "Wipro",          role: "AI Engineer"            },
    { name: "Tech Mahindra",  role: "DevOps Engineer"        },
  ],
  [
    { name: "Fractal",        role: "Decision Scientist"     },
    { name: "Sony Pictures",  role: "Media Tech Lead"        },
    { name: "AT&T",           role: "Platform Engineer"      },
    { name: "SpringWorks",    role: "Product Engineer"       },
    { name: "Turing",         role: "Remote AI Engineer"     },
    { name: "IDFC First Bank",role: "Risk Analyst"           },
    { name: "AXA",            role: "ML Operations"          },
    { name: "BNY Mellon",     role: "Quant Developer"        },
    { name: "Saint-Gobain",   role: "Data Analyst"           },
    { name: "Genpact",        role: "Process Automation"     },
  ],
  [
    { name: "Sprinklr",       role: "NLP Engineer"           },
    { name: "Bandhan Bank",   role: "Credit Risk ML"         },
    { name: "GlobalLogic",    role: "Solutions Architect"    },
    { name: "Uptime AI",      role: "Applied ML"             },
    { name: "PwC",            role: "Data Consultant"        },
    { name: "Autodesk",       role: "ML Engineer"            },
    { name: "Booking.com",    role: "Data Analyst"           },
    { name: "EaseMyTrip",     role: "BI Developer"           },
    { name: "Accenture",      role: "Tech Consultant"        },
    { name: "EY",             role: "Business Analyst"       },
  ],
  [
    { name: "Razorpay",       role: "Backend Engineer"       },
    { name: "Capgemini",      role: "Data Analyst"           },
    { name: "KPMG",           role: "Risk Analytics"         },
    { name: "IBM",            role: "Data Platform Engineer" },
    { name: "Adobe",          role: "Analytics Engineer"     },
    { name: "Flipkart",       role: "Data Scientist"         },
    { name: "Zomato",         role: "ML Engineer"            },
    { name: "Paytm",          role: "Risk Analyst"           },
    { name: "Swiggy",         role: "Demand Forecasting"     },
    { name: "Goldman Sachs",  role: "Equity Research"        },
  ],
];

export const LOGO_COLORS = {
  Google: null,
  Amazon: "#FF9900", 
  Microsoft: null, 
  Deloitte: "#86BC25",
  JPMorgan: "#003087", 
  "Goldman Sachs": "#1a1a2e", 
  TCS: "#1C4DA1",
  Infosys: "#007CC3", 
  Wipro: "#341C6A", 
  "Tech Mahindra": "#E31837",
  Fractal: "#FF5722", 
  "Sony Pictures": "#111", 
  "AT&T": "#00A8E0",
  SpringWorks: "#2563EB", 
  Turing: "#7C3AED", 
  "IDFC First Bank": "#FF6B00",
  AXA: "#00008F", 
  "BNY Mellon": "#009B77", 
  "Saint-Gobain": "#E4002B",
  Genpact: "#9B1D6A", 
  Sprinklr: "#0047AB", 
  "Bandhan Bank": "#E31837",
  GlobalLogic: "#00539B", 
  "Uptime AI": "#10B981", 
  PwC: "#D04A02",
  Autodesk: "#0696D7", 
  "Booking.com": "#003580", 
  EaseMyTrip: "#FF6B00",
  Accenture: "#A100FF", 
  EY: "#FFE600", 
  Razorpay: "#3395FF",
  Capgemini: "#0070AD", 
  KPMG: "#00338D", 
  IBM: "#1F70C1",
  Adobe: "#FF0000", 
  Flipkart: "#F74F00", 
  Zomato: "#E23744",
  Paytm: "#002970", 
  Swiggy: "#FC8019",
};

export const TESTIMONIALS = [
  { 
    name: "Priya Ramesh",  
    role: "Data Analyst · Amazon",          
    avatar: "PR", 
    color: "#0057FF", 
    stars: 5, 
    text: "DataPreneur completely changed my trajectory. Went from a non-technical marketing role to Data Analyst at Amazon in 4 months. The placement team is genuinely invested in you." 
  },
  { 
    name: "Arjun Khanna",  
    role: "IB Analyst · Goldman Sachs",     
    avatar: "AK", 
    color: "#D97706", 
    stars: 5, 
    text: "The IB course was incredibly thorough. I cracked my Goldman Sachs interview using the exact financial models we built in class. Every rupee well spent." 
  },
  { 
    name: "Sneha Mishra",  
    role: "ML Engineer · Razorpay",         
    avatar: "SM", 
    color: "#059669", 
    stars: 5, 
    text: "Zero coding background when I started. The structure was so clear. By month 3 I had a working ML model. Now I'm a junior ML Engineer at Razorpay!" 
  },
  { 
    name: "Rohit Sharma",  
    role: "AI Engineer · Microsoft",        
    avatar: "RS", 
    color: "#7C3AED", 
    stars: 5, 
    text: "The Agentic AI course is cutting-edge. I demo'd my RAG-powered chatbot in every interview. It became my biggest talking point and helped me land Microsoft." 
  },
  { 
    name: "Neha Pillai",   
    role: "Business Analyst · Deloitte",    
    avatar: "NP", 
    color: "#DC2626", 
    stars: 5, 
    text: "Switched from civil engineering. DataPreneur's small batches meant I could ask every question. Got placed at Deloitte 2 months after completing the program." 
  },
  { 
    name: "Vikram Nair",   
    role: "Data Scientist · Flipkart",      
    avatar: "VN", 
    color: "#0891B2", 
    stars: 5, 
    text: "The capstone project with real Flipkart data was a game-changer. I literally discussed my project results in the Flipkart interview. Best career decision I've made." 
  },
];

// Icon SVG Components (why section icon )
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="9" y1="7" x2="15" y2="7"/>
    <line x1="9" y1="11" x2="15" y2="11"/>
    <line x1="9" y1="15" x2="12" y2="15"/>
  </svg>
);

const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="7" r="3"/>
    <circle cx="16" cy="7" r="3"/>
    <path d="M2 21v-1a6 6 0 0 1 6-6h1"/>
    <path d="M22 21v-1a6 6 0 0 0-6-6h-1"/>
  </svg>
);

const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    <line x1="12" y1="11" x2="12" y2="17"/>
    <line x1="9" y1="14" x2="15" y2="14"/>
  </svg>
);

const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="5"/>
    <polyline points="9 9 11 11 15 7"/>
    <path d="M15.477 13.89 17 22l-5-3-5 3 1.523-8.11"/>
  </svg>
);

const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

// why section features data

export const FEATURES = [
  { 
    icon: <IconClock />, 
    title: "Industry-First Curriculum", 
    desc: "Built with hiring managers at Google, JPMorgan & Amazon. Updated every quarter." 
  },
  { 
    icon: <IconUsers />, 
    title: "Small Batches, Big Impact", 
    desc: "Max 25 students per cohort. Your mentor knows your name, goals, and blockers." 
  },
  { 
    icon: <IconCode />, 
    title: "Real-World Projects", 
    desc: "Capstone projects using real datasets from Swiggy, HDFC & MakeMyTrip." 
  },
  { 
    icon: <IconBriefcase />, 
    title: "100% Placement Support", 
    desc: "Resume reviews, mock interviews, LinkedIn optimization and direct referrals." 
  },
  { 
    icon: <IconStar />, 
    title: "Microsoft Certified", 
    desc: "Official Microsoft Learning Partner. Recognized globally across FAANG & MNCs." 
  },
  { 
    icon: <IconPhone />, 
    title: "Mentor-on-Call", 
    desc: "Stuck at 11pm on a project? Your mentor is reachable. We don't close at 5pm." 
  },
];

export const STEPS = [
  { n: "01", title: "Free Counselling",  desc: "30-min 1:1 session with a career advisor. We map the right program to your skills and target role." },
  { n: "02", title: "Learn by Building", desc: "Live classes, real datasets, weekly projects. Every session has a tangible deliverable." },
  { n: "03", title: "Career Prep",       desc: "Resume makeover, mock interviews with working professionals, and LinkedIn optimization." },
  { n: "04", title: "Get Hired",         desc: "Access exclusive job listings, direct referrals and alumni intros — until you land the role." },
];