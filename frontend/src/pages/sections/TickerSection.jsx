import React from 'react';
import { 
  BarChart3, Bot, Brain, Landmark, LineChart, 
  Rocket, CheckCircle2, Award, Users, Briefcase, PhoneCall 
} from 'lucide-react';

const ITEMS = [
  { label: "Data Analytics", icon: <BarChart3 size={16} /> },
  { label: "Agentic AI", icon: <Bot size={16} /> },
  { label: "Data Science", icon: <Brain size={16} /> },
  { label: "Investment Banking", icon: <Landmark size={16} /> },
  { label: "Business Analytics", icon: <LineChart size={16} /> },
  { label: "Masters Track", icon: <Rocket size={16} /> },
  { label: "94% Placement Rate", icon: <CheckCircle2 size={16} /> },
  { label: "Microsoft Certified", icon: <Award size={16} /> },
  { label: "Small Cohorts", icon: <Users size={16} /> },
  { label: "180+ Hiring Partners", icon: <Briefcase size={16} /> },
  { label: "Mentor-on-Call", icon: <PhoneCall size={16} /> }
];

export default function TickerSection() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ 
      background: "#020617", // Slightly deeper navy
      overflow: "hidden", 
      padding: "1rem 0",
      borderTop: "1px solid #1e293b",
      borderBottom: "1px solid #1e293b"
    }}>
      <div style={{ 
        display: "flex", 
        gap: "4rem", 
        animation: "ticker 40s linear infinite", 
        whiteSpace: "nowrap",
        alignItems: "center"
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.75rem", 
            color: "#cbd5e1", // Brighter text for readability
            fontFamily: "'Inter', sans-serif", // Modern UI font
            fontSize: "0.875rem", 
            fontWeight: 500, 
            flexShrink: 0 
          }}>
            <span style={{ color: "#3b82f6", display: "flex" }}>
              {item.icon}
            </span>
            {item.label}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}