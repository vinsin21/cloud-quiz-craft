
import React from "react";
import { Link } from "react-router-dom";
import { quizzes } from "../data/quizData";

const QuizList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {quizzes.map((quiz) => (
        <div 
          key={quiz.id}
          className="bg-white rounded-xl border border-quiz-secondary/40 p-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-quiz-dark mb-2">{quiz.title}</h3>
          <p className="text-sm text-quiz-neutral mb-4 line-clamp-2">{quiz.description}</p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center text-sm text-quiz-neutral">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {quiz.timeLimit} minutes · {quiz.questions.length} questions
            </div>
            <Link 
              to={`/quiz/${quiz.id}`}
              className="bg-quiz-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-quiz-primary/90 transition-all"
            >
              Start Practice Exam
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
