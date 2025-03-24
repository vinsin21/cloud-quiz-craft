
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { quizzes } from "@/data/quizData";

const Landing: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="absolute inset-0 bg-grid-black"></div>
        <div className="container mx-auto px-4 py-12 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-quiz-dark animate-fade-in">
              Ace Your AWS Cloud Practitioner Exam
            </h1>
            <p className="text-lg md:text-xl text-quiz-neutral mb-8 animate-slide-up">
              Practice with realistic exam questions, track your progress, and boost your confidence for the AWS Cloud Practitioner certification.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in">
              <Link to="/quizzes">
                <Button variant="outline" size={isMobile ? "default" : "lg"} className="rounded-full px-8">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Practice Tests
                </Button>
              </Link>
              <Link to="/quiz/1">
                <Button size={isMobile ? "default" : "lg"} className="rounded-full px-8 bg-quiz-primary hover:bg-quiz-primary/90">
                  <FileText className="mr-2 h-4 w-4" />
                  Start Free Practice
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
              <Card className="border-quiz-primary/10 hover:border-quiz-primary/30 transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FileText className="h-10 w-10 text-quiz-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Realistic Questions</h3>
                  <p className="text-quiz-neutral text-sm">
                    Practice with questions that closely mirror the actual AWS exam format and difficulty.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-quiz-primary/10 hover:border-quiz-primary/30 transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-10 w-10 text-quiz-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Timed Exams</h3>
                  <p className="text-quiz-neutral text-sm">
                    Build stamina with timed practice sessions that simulate real exam conditions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-quiz-primary/10 hover:border-quiz-primary/30 transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CheckCircle className="h-10 w-10 text-quiz-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Detailed Reviews</h3>
                  <p className="text-quiz-neutral text-sm">
                    Learn from your mistakes with comprehensive explanations for each answer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Exams Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-quiz-dark">Featured Practice Exams</h2>
          <p className="text-quiz-neutral max-w-2xl mx-auto">
            Start with our most popular AWS practice exams to prepare for your certification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quizzes.slice(0, 2).map((quiz) => (
            <Card key={quiz.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-quiz-secondary/30">
              <div className="p-6 bg-gradient-to-r from-quiz-primary/10 to-quiz-accent/5">
                <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                <p className="text-sm text-quiz-neutral mb-4 line-clamp-2">{quiz.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm">
                    <FileText className="mr-2 h-4 w-4 text-quiz-primary" />
                    <span>{quiz.questions.length} Questions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-quiz-primary" />
                    <span>{quiz.timeLimit} Minutes</span>
                  </div>
                </div>
                
                <Link to={`/quiz/${quiz.id}`}>
                  <Button className="w-full bg-quiz-primary hover:bg-quiz-primary/90">
                    Start Exam
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/quizzes">
            <Button variant="outline" className="rounded-full">
              View All Practice Exams
            </Button>
          </Link>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-quiz-primary to-quiz-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Ace Your AWS Exam?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Start practicing today and build the confidence you need to pass your AWS Cloud Practitioner certification.
          </p>
          <Link to="/quiz/1">
            <Button size="lg" variant="secondary" className="rounded-full px-8 bg-white text-quiz-primary hover:bg-white/90">
              Start Free Practice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
