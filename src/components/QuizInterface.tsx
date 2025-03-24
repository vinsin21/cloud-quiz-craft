
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { Question, quizzes } from "../data/quizData";

const QuizInterface: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(quiz ? quiz.timeLimit * 60 : 0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  useEffect(() => {
    if (!quiz) {
      navigate("/");
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz, navigate]);
  
  const handleOptionSelect = (optionId: string) => {
    if (submitted) return;
    setSelectedOption(optionId);
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionId }));
  };
  
  const handleNext = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(answers[currentQuestion + 1] || null);
    }
  };
  
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };
  
  const handleSubmit = () => {
    if (!quiz) return;
    
    setSubmitted(true);
    
    // Calculate score
    let correctCount = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = quiz.questions[parseInt(questionIndex)];
      
      if (question.correctAnswer.includes(',')) {
        // For multiple correct answers
        const correctOptions = question.correctAnswer.split(',');
        if (correctOptions.includes(answer)) {
          correctCount++;
        }
      } else if (question.correctAnswer === answer) {
        correctCount++;
      }
    });
    
    const score = {
      correct: correctCount,
      total: quiz.questions.length,
      percentage: Math.round((correctCount / quiz.questions.length) * 100),
      answers: answers,
      quizId: quiz.id
    };
    
    // Navigate to results page
    navigate(`/results/${quiz.id}`, { state: { score } });
  };
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  if (!quiz) return null;
  
  const question: Question = quiz.questions[currentQuestion];
  
  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-b from-white to-quiz-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">{quiz.title}</h1>
            <div className="flex items-center px-4 py-2 bg-quiz-secondary rounded-full text-quiz-primary font-medium">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {formatTime(timeLeft)}
            </div>
          </div>
          
          {/* Progress Bar */}
          <ProgressBar current={currentQuestion + 1} total={quiz.questions.length} />
          
          {/* Question Content */}
          <div className="mb-6 animate-fade-in">
            <h2 className="text-lg font-medium mb-4">
              {currentQuestion + 1}. {question.text}
            </h2>
            
            <div className="space-y-3">
              {question.options.map(option => (
                <div 
                  key={option.id}
                  className={`quiz-option ${selectedOption === option.id ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${selectedOption === option.id ? 'border-quiz-primary' : 'border-gray-300'}`}>
                        {selectedOption === option.id && (
                          <div className="w-3 h-3 bg-quiz-primary rounded-full" />
                        )}
                      </div>
                    </div>
                    <div className="ml-3">
                      <span className="text-base">{option.id}. {option.text}</span>
                    </div>
                  </div>
                </div>
              ))}
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
              <button 
                onClick={handleSubmit}
                className="bg-quiz-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-quiz-primary/90 transition-all duration-200"
              >
                Submit Quiz
              </button>
            )}
          </div>
          
          {/* Question Navigator */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(index);
                    setSelectedOption(answers[index] || null);
                  }}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-all duration-200 ${
                    currentQuestion === index 
                      ? 'bg-quiz-primary text-white' 
                      : answers[index] 
                        ? 'bg-quiz-secondary text-quiz-primary' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
