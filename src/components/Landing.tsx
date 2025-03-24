
import React from "react";
import QuizCard from "./QuizCard";
import { quizzes } from "../data/quizData";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-quiz-secondary/20">
      <div className="container px-4 py-16 mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-down">
          <span className="inline-block px-4 py-1.5 bg-quiz-secondary text-quiz-primary rounded-full text-sm font-medium mb-4">
            AWS Certified Cloud Practitioner
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-quiz-dark">
            Master AWS Cloud Concepts
          </h1>
          <p className="text-quiz-neutral text-lg max-w-2xl mx-auto">
            Practice with realistic exam questions to prepare for your AWS Certified Cloud Practitioner exam. Test your knowledge and build confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {quizzes.map((quiz) => (
            <QuizCard 
              key={quiz.id}
              id={quiz.id}
              title={quiz.title}
              description={quiz.description}
              questionCount={quiz.questions.length}
              timeLimit={quiz.timeLimit}
            />
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto px-4 py-10 rounded-2xl glass animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Why Practice with Our Quizzes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-quiz-primary bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-quiz-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Realistic Questions</h3>
              <p className="text-quiz-neutral text-sm">Our questions mirror the style and difficulty of the actual AWS certification exam.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-quiz-primary bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-quiz-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Explanations</h3>
              <p className="text-quiz-neutral text-sm">Understand why answers are correct with comprehensive explanations for each question.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-quiz-primary bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-quiz-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-quiz-neutral text-sm">Monitor your performance and focus on areas that need improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
