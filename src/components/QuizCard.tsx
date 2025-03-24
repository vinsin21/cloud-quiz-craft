
import React from "react";
import { Link } from "react-router-dom";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  timeLimit: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ id, title, description, questionCount, timeLimit }) => {
  return (
    <div className="quiz-card animate-scale-in">
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-quiz-secondary text-quiz-primary rounded-full">
            {questionCount} Questions
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-quiz-neutral mb-4 text-sm">{description}</p>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-quiz-neutral mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-quiz-neutral">{timeLimit} min</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-quiz-neutral mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-sm text-quiz-neutral">AWS CP Practice</span>
          </div>
        </div>
        <Link to={`/quiz/${id}`} className="button-primary w-full flex justify-center">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
