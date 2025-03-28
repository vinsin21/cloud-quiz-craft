
import React from "react";
import { 
  Cloud, 
  Database, 
  Server, 
  Shield, 
  Lock, 
  Globe, 
  Cpu, 
  HardDrive
} from "lucide-react";

const icons = [
  { Icon: Cloud, delay: "0s", top: "15%", left: "10%" },
  { Icon: Database, delay: "1s", top: "25%", left: "80%" },
  { Icon: Server, delay: "1.5s", top: "60%", left: "15%" },
  { Icon: Shield, delay: "0.7s", top: "70%", left: "75%" },
  { Icon: Lock, delay: "2s", top: "45%", left: "85%" },
  { Icon: Globe, delay: "1.2s", top: "20%", left: "60%" },
  { Icon: Cpu, delay: "0.5s", top: "80%", left: "40%" },
  { Icon: HardDrive, delay: "1.8s", top: "30%", left: "25%" },
];

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, top, left }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20 text-quiz-primary"
          style={{
            top,
            left,
            animationDelay: delay,
            animationDuration: `${6 + index % 3}s`,
          }}
        >
          <Icon size={24 + (index % 3) * 8} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
