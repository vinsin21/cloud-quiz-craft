
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { quizzes } from "../data/quizData";

interface ScoreState {
  score: {
    correct: number;
    total: number;
    percentage: number;
    answers: Record<number, string>;
    quizId: string;
  };
}

const ScoreSummary: React.FC = () => {
  const location = useLocation();
  const { quizId } = useParams<{ quizId: string }>();
  const state = location.state as ScoreState;
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  if (!state?.score || !quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-quiz-secondary/20 p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">No Score Available</h1>
          <p className="text-quiz-neutral mb-6">You haven't completed a quiz yet or the results have expired.</p>
          <Link to="/" className="button-primary inline-block">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const { score } = state;
  const { correct, total, percentage } = score;
  
  const getScoreColor = () => {
    if (percentage >= 80) return "text-quiz-correct";
    if (percentage >= 60) return "text-orange-500";
    return "text-quiz-incorrect";
  };
  
  const getScoreMessage = () => {
    if (percentage >= 80) return "Excellent! You're ready for the real exam.";
    if (percentage >= 70) return "Good job! Keep practicing to improve.";
    if (percentage >= 60) return "Not bad, but you need more practice.";
    return "You need more study time before taking the exam.";
  };
  
  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-white to-quiz-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4">Your Quiz Results</h1>
            <p className="text-quiz-neutral">{quiz.title}</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-around items-center gap-6 mb-8">
            <div className="text-center">
              <div className="mb-2">
                <span className={`text-5xl font-bold ${getScoreColor()}`}>{percentage}%</span>
              </div>
              <p className="text-quiz-neutral">Your Score</p>
            </div>
            
            <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="text-center">
              <div className="mb-2">
                <span className="text-5xl font-bold text-quiz-primary">{correct}</span>
                <span className="text-xl text-quiz-neutral">/{total}</span>
              </div>
              <p className="text-quiz-neutral">Correct Answers</p>
            </div>
            
            <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="text-center">
              <div className="mb-2">
                <span className="text-5xl font-bold text-quiz-dark">{total - correct}</span>
              </div>
              <p className="text-quiz-neutral">Incorrect Answers</p>
            </div>
          </div>
          
          <div className="text-center mb-8 p-6 bg-quiz-secondary/50 rounded-xl">
            <p className="text-lg font-medium">{getScoreMessage()}</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to={`/review/${quizId}`} state={{ answers: score.answers }} className="button-primary">
              Review Answers
            </Link>
            
            <Link to="/" className="button-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
