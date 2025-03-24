
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Question, quizzes } from "../data/quizData";
import ProgressBar from "./ProgressBar";

interface ReviewProps {
  answers: Record<number, string>;
}

const ReviewAnswers: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const location = useLocation();
  const state = location.state as { answers: Record<number, string> };
  
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  if (!quiz || !state?.answers) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-quiz-secondary/20 p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">No Review Available</h1>
          <p className="text-quiz-neutral mb-6">You haven't completed a quiz yet or the results have expired.</p>
          <Link to="/" className="button-primary inline-block">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const question: Question = quiz.questions[currentQuestion];
  const userAnswer = state.answers[currentQuestion];
  
  const isCorrect = (): boolean => {
    if (!userAnswer) return false;
    
    if (question.correctAnswer.includes(',')) {
      return question.correctAnswer.split(',').includes(userAnswer);
    }
    
    return question.correctAnswer === userAnswer;
  };
  
  const getOptionClasses = (optionId: string): string => {
    if (optionId === userAnswer && !isCorrect()) {
      return "incorrect";
    }
    
    if (question.correctAnswer.includes(',')) {
      if (question.correctAnswer.split(',').includes(optionId)) {
        return "correct";
      }
    } else if (optionId === question.correctAnswer) {
      return "correct";
    }
    
    if (optionId === userAnswer) {
      return "selected";
    }
    
    return "";
  };
  
  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-b from-white to-quiz-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Review: {quiz.title}</h1>
            <div className="flex items-center">
              <Link to="/" className="text-quiz-primary hover:underline text-sm font-medium">
                Back to Home
              </Link>
            </div>
          </div>
          
          {/* Progress Bar */}
          <ProgressBar current={currentQuestion + 1} total={quiz.questions.length} />
          
          {/* Question Content */}
          <div className="mb-6 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">
                {currentQuestion + 1}. {question.text}
              </h2>
              
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${isCorrect() ? 'bg-quiz-correct/10 text-quiz-correct' : 'bg-quiz-incorrect/10 text-quiz-incorrect'}`}>
                {isCorrect() ? 'Correct' : 'Incorrect'}
              </div>
            </div>
            
            <div className="space-y-3">
              {question.options.map(option => (
                <div 
                  key={option.id}
                  className={`quiz-option ${getOptionClasses(option.id)}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                      {getOptionClasses(option.id) === "correct" ? (
                        <svg className="w-5 h-5 text-quiz-correct" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      ) : getOptionClasses(option.id) === "incorrect" ? (
                        <svg className="w-5 h-5 text-quiz-incorrect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                      ) : (
                        <div className="w-5 h-5 border-2 rounded-full border-gray-300"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <span className="text-base">{option.id}. {option.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Explanation */}
            <div className="mt-8 p-4 bg-quiz-secondary/50 rounded-xl">
              <div className="font-medium mb-2">Explanation:</div>
              <div className="text-quiz-dark text-sm">
                {question.explanation || "No explanation provided for this question."}
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-quiz-secondary text-quiz-dark hover:bg-quiz-secondary/80'}`}
            >
              Previous
            </button>
            
            {currentQuestion < quiz.questions.length - 1 ? (
              <button 
                onClick={handleNext}
                className="bg-quiz-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-quiz-primary/90 transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <Link 
                to="/"
                className="bg-quiz-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-quiz-primary/90 transition-all duration-200"
              >
                Finish Review
              </Link>
            )}
          </div>
          
          {/* Question Navigator */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {quiz.questions.map((_, index) => {
                const answered = state.answers[index] !== undefined;
                const correct = answered && (
                  quiz.questions[index].correctAnswer.includes(',') 
                    ? quiz.questions[index].correctAnswer.split(',').includes(state.answers[index])
                    : quiz.questions[index].correctAnswer === state.answers[index]
                );
                
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-all duration-200 ${
                      currentQuestion === index 
                        ? 'bg-quiz-primary text-white' 
                        : answered
                          ? correct
                            ? 'bg-quiz-correct/20 text-quiz-correct'
                            : 'bg-quiz-incorrect/20 text-quiz-incorrect'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAnswers;
