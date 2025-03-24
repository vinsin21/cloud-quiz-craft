
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Award, Calendar, CheckCircle, Clock, FileText, Lightbulb, ShieldCheck, Zap } from "lucide-react";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-quiz-secondary/20 py-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[center_top_1rem] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container px-4 mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 bg-quiz-primary/10 text-quiz-primary rounded-full text-sm font-medium mb-4">
                AWS Certified Cloud Practitioner
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-quiz-dark leading-tight">
                Master AWS <span className="text-quiz-primary">Cloud Skills</span> With Real Exam Practice
              </h1>
              <p className="text-quiz-neutral text-lg max-w-2xl mb-8">
                Prepare effectively for your AWS certification with realistic practice exams designed by industry experts. Test your knowledge, identify gaps, and build confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-quiz-primary hover:bg-quiz-primary/90 animate-pulse">
                  <Link to="/quiz/1">
                    Start Practice Exam
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/quizzes">
                    View All Exams
                  </Link>
                </Button>
              </div>
              <div className="flex items-center mt-10 text-sm text-quiz-neutral">
                <CheckCircle className="text-quiz-correct mr-2 h-4 w-4" />
                <span className="mr-4">Realistic Questions</span>
                <CheckCircle className="text-quiz-correct mr-2 h-4 w-4" />
                <span className="mr-4">Detailed Explanations</span>
                <CheckCircle className="text-quiz-correct mr-2 h-4 w-4" />
                <span>Exam Simulations</span>
              </div>
            </div>
            <div className="hidden lg:block relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-quiz-primary/20 to-quiz-accent/20 rounded-xl transform rotate-3"></div>
              <Card className="transform -rotate-3 shadow-xl">
                <CardContent className="p-6 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Award className="text-quiz-primary mr-2" />
                      <h3 className="font-semibold">AWS Practice Exam</h3>
                    </div>
                    <span className="bg-quiz-primary/10 text-quiz-primary px-2 py-1 rounded text-xs font-medium">50 Questions</span>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-100 rounded-lg p-3 hover:border-quiz-primary hover:bg-quiz-primary/5 transition-colors">
                        <p className="text-sm font-medium mb-2">Sample Question {i}</p>
                        <div className="flex items-center justify-between text-xs text-quiz-neutral">
                          <div className="flex items-center">
                            <FileText className="mr-1 h-3 w-3" />
                            <span>Multiple Choice</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>2 minutes</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 rounded-lg bg-quiz-primary hover:bg-quiz-primary/90">
                    Start Practice Test
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Why Practice With Our Exams?</h2>
            <p className="text-quiz-neutral max-w-2xl mx-auto">
              Our practice exams are designed to help you prepare effectively for your AWS certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in border border-quiz-secondary/30">
              <div className="w-12 h-12 rounded-full bg-quiz-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-quiz-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Realistic Questions</h3>
              <p className="text-quiz-neutral">
                Our questions mirror the style and difficulty of the actual AWS certification exam, preparing you for the real thing.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in border border-quiz-secondary/30">
              <div className="w-12 h-12 rounded-full bg-quiz-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-quiz-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Explanations</h3>
              <p className="text-quiz-neutral">
                Understand why answers are correct with comprehensive explanations for each question, deepening your knowledge.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in border border-quiz-secondary/30">
              <div className="w-12 h-12 rounded-full bg-quiz-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-quiz-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exam Simulations</h3>
              <p className="text-quiz-neutral">
                Practice under timed conditions that replicate the actual exam environment to build confidence and reduce anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-quiz-primary/10 to-quiz-accent/5">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to Test Your AWS Knowledge?</h2>
            <p className="text-quiz-neutral mb-8">
              Start with our practice exams today and take the first step towards AWS certification success.
            </p>
            <Button asChild size="lg" className="rounded-full bg-quiz-primary hover:bg-quiz-primary/90">
              <Link to="/quizzes">
                Browse All Practice Exams
                <Zap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
