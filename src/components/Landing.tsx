
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock, FileText, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { quizzes } from "@/data/quizData";
import FloatingIcons from "./FloatingIcons";

const Landing: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black opacity-70"></div>
        <FloatingIcons />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="inline-block mb-4 p-1.5 rounded-full bg-white/80 backdrop-blur shadow-sm border border-gray-100">
              <div className="bg-blue-50 px-4 py-1 rounded-full">
                <span className="text-sm font-medium text-quiz-primary">AWS Certified Cloud Practitioner</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-quiz-dark leading-tight animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-quiz-dark via-quiz-dark to-quiz-primary">
                Master Your AWS Cloud Practitioner Exam
              </span>
            </h1>
            
            <p className="text-xl text-quiz-neutral mb-8 max-w-2xl animate-slide-up delay-100">
              Practice with real-world scenarios, track your progress, and boost your confidence to pass the AWS certification with flying colors.
            </p>
            
            <div className="mb-12 animate-fade-in delay-200">
              <Link to="/quizzes">
                <Button 
                  size={isMobile ? "default" : "lg"} 
                  className="rounded-full px-8 bg-quiz-primary hover:bg-quiz-primary/90 hover:shadow-lg hover:shadow-quiz-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Browse Practice Tests
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full animate-slide-up delay-300">
              <FeatureCard 
                icon={FileText} 
                title="Realistic Questions" 
                description="Questions mirror the actual AWS exam format and difficulty." 
              />
              
              <FeatureCard 
                icon={Clock} 
                title="Timed Exams" 
                description="Build stamina with timed sessions that simulate real exam conditions." 
              />
              
              <FeatureCard 
                icon={CheckCircle} 
                title="Detailed Reviews" 
                description="Learn from your mistakes with comprehensive explanations." 
              />
            </div>
            
            <div className="mt-16 w-full">
              <div className="relative bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm animate-fade-in">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-sm">
                  <div className="bg-quiz-primary/10 rounded-full p-2">
                    <BookOpen className="h-6 w-6 text-quiz-primary" />
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mt-4 mb-6 text-center">Ready to start practicing?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quizzes.slice(0, 2).map((quiz) => (
                    <Card key={quiz.id} className="overflow-hidden hover:shadow-md transition-all duration-300 border-quiz-secondary/30 bg-white">
                      <CardContent className="p-0">
                        <div className="p-5">
                          <h3 className="text-lg font-bold mb-2">{quiz.title}</h3>
                          <p className="text-sm text-quiz-neutral mb-4 line-clamp-2">{quiz.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-sm">
                              <FileText className="mr-2 h-4 w-4 text-quiz-primary" />
                              <span>{quiz.questions.length} Questions</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="mr-2 h-4 w-4 text-quiz-primary" />
                              <span>{quiz.timeLimit} Minutes</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-quiz-primary/5 to-quiz-accent/10 p-3">
                          <Link to={`/quiz/${quiz.id}`}>
                            <Button className="w-full bg-white hover:bg-quiz-primary hover:text-white border border-quiz-primary/20 text-quiz-primary">
                              Start Exam
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Link to="/quizzes">
                    <Button variant="outline" className="rounded-full">
                      View All Practice Exams
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-quiz-primary to-blue-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Ace Your AWS Exam?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Start practicing today and build the confidence you need to pass your AWS Cloud Practitioner certification.
          </p>
          <Link to="/quiz/1">
            <Button size="lg" variant="secondary" className="rounded-full px-8 bg-white text-quiz-primary hover:bg-white/90 hover:shadow-lg">
              Start Free Practice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-quiz-primary/20 transition-all duration-300 h-full">
      <div className="bg-quiz-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-quiz-primary" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-left">{title}</h3>
      <p className="text-quiz-neutral text-sm text-left">{description}</p>
    </div>
  );
};

export default Landing;
