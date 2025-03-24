
import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-quiz-neutral">Question {current} of {total}</span>
        <span className="text-sm font-medium text-quiz-primary">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-1.5 bg-quiz-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-quiz-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
