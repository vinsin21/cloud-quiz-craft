import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { Question, quizzes } from "../data/quizData";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { ArrowLeft, X, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const QuizInterface: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(quiz ? quiz.timeLimit * 60 : 0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showCancelDialog, setShowCancelDialog] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  
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
    setShowAnswer(true);
  };
  
  const handleNext = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(answers[currentQuestion + 1] || null);
      setShowAnswer(false);
    }
  };
  
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
      setShowAnswer(!!answers[currentQuestion - 1]);
    }
  };
  
  const isCorrectAnswer = (optionId: string): boolean => {
    if (!quiz) return false;
    const question = quiz.questions[currentQuestion];
    
    if (question.correctAnswer.includes(',')) {
      return question.correctAnswer.split(',').includes(optionId);
    }
    return question.correctAnswer === optionId;
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
  
  const handleCancel = () => {
    setShowCancelDialog(true);
  };
  
  const confirmCancel = () => {
    navigate("/");
  };
  
  if (!quiz) return null;
  
  const question: Question = quiz.questions[currentQuestion];
  
  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-10 px-2 sm:px-3 md:px-4 bg-gradient-to-b from-white to-quiz-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 md:mb-6 space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="mr-1 p-0 h-8 w-8" 
                onClick={handleCancel}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-base sm:text-lg md:text-xl font-bold truncate">{quiz.title}</h1>
            </div>
            <div className="flex items-center self-start sm:self-auto px-2 sm:px-3 py-1 sm:py-1.5 md:px-4 md:py-2 bg-quiz-secondary rounded-full text-quiz-primary text-xs sm:text-sm md:text-base font-medium">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              {formatTime(timeLeft)}
            </div>
          </div>
          
          <ProgressBar current={currentQuestion + 1} total={quiz.questions.length} />
          
          <div className="mb-3 sm:mb-4 md:mb-6 animate-fade-in">
            <h2 className="text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 md:mb-4">
              {currentQuestion + 1}. {question.text}
            </h2>
            
            <div className="space-y-2 md:space-y-3">
              {question.options.map(option => (
                <div 
                  key={option.id}
                  className={`quiz-option ${selectedOption === option.id ? 'selected' : ''} 
                    ${showAnswer && isCorrectAnswer(option.id) ? 'correct' : ''}
                    ${showAnswer && selectedOption === option.id && !isCorrectAnswer(option.id) ? 'incorrect' : ''}`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                      {showAnswer && isCorrectAnswer(option.id) ? (
                        <CheckCircle2 className="h-5 w-5 text-quiz-correct" />
                      ) : showAnswer && selectedOption === option.id && !isCorrectAnswer(option.id) ? (
                        <XCircle className="h-5 w-5 text-quiz-incorrect" />
                      ) : (
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${selectedOption === option.id ? 'border-quiz-primary' : 'border-gray-300'}`}>
                          {selectedOption === option.id && (
                            <div className="w-3 h-3 bg-quiz-primary rounded-full" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <span className="text-xs sm:text-sm md:text-base">{option.id}. {option.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {showAnswer && (
            <div className="mt-3 sm:mt-4 mb-4 sm:mb-6 p-2 sm:p-3 md:p-4 bg-quiz-secondary/50 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base">
              <div className="font-medium mb-1 md:mb-2">Explanation:</div>
              <div className="text-quiz-dark text-xs md:text-sm">
                {question.explanation || "No explanation provided for this question."}
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-4 sm:mt-6 md:mt-8">
            <button 
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded-lg font-medium transition-all duration-200 ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-quiz-secondary text-quiz-dark hover:bg-quiz-secondary/80'}`}
            >
              Previous
            </button>
            
            {currentQuestion < quiz.questions.length - 1 ? (
              <button 
                onClick={handleNext}
                className="bg-quiz-primary text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded-lg font-medium hover:bg-quiz-primary/90 transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="bg-quiz-primary text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded-lg font-medium hover:bg-quiz-primary/90 transition-all duration-200"
              >
                Submit
              </button>
            )}
          </div>
          
          <div className="mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-6 border-t border-gray-100">
            {!isMobile ? (
              <div className="flex flex-wrap gap-2">
                {quiz.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedOption(answers[index] || null);
                      setShowAnswer(!!answers[index]);
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
            ) : (
              <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-1.5">
                {quiz.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedOption(answers[index] || null);
                      setShowAnswer(!!answers[index]);
                    }}
                    className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-xs transition-all duration-200 ${
                      currentQuestion === index 
                        ? 'bg-quiz-primary text-white' 
                        : answers[index] 
                          ? 'bg-quiz-secondary text-quiz-primary' 
                          : 'bg-gray-100 text-gray-500 active:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <DialogContent className="sm:max-w-[425px] p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">Cancel Quiz</DialogTitle>
            <DialogDescription className="text-sm">
              Are you sure you want to cancel this quiz? Your progress will not be saved.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex space-x-2 pt-4">
            <Button variant="outline" onClick={() => setShowCancelDialog(false)} className="text-xs sm:text-sm">
              Continue Quiz
            </Button>
            <Button variant="destructive" onClick={confirmCancel} className="text-xs sm:text-sm">
              Exit Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuizInterface;
