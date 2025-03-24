
import React from "react";
import { quizzes } from "../data/quizData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, FileText, TrendingUp, User } from "lucide-react";

const QuizzesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-quiz-dark">AWS Cloud Practitioner Practice Exams</h1>
        <p className="text-quiz-neutral max-w-2xl mx-auto">
          Choose from our collection of practice exams to test your knowledge and prepare for the AWS Certified Cloud Practitioner exam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in border-quiz-secondary/30">
            <CardHeader className="bg-gradient-to-r from-quiz-primary/10 to-quiz-accent/5 pb-6">
              <CardTitle className="text-xl">{quiz.title}</CardTitle>
              <CardDescription className="line-clamp-2">{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm">
                  <FileText className="mr-2 h-4 w-4 text-quiz-primary" />
                  <span>{quiz.questions.length} Questions</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-quiz-primary" />
                  <span>{quiz.timeLimit} Minutes</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="mr-2 h-4 w-4 text-quiz-primary" />
                  <span>Passing: 70%</span>
                </div>
                <div className="flex items-center text-sm">
                  <User className="mr-2 h-4 w-4 text-quiz-primary" />
                  <span>Beginner Friendly</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 pt-4">
              <Button asChild className="w-full bg-quiz-primary hover:bg-quiz-primary/90">
                <Link to={`/quiz/${quiz.id}`}>
                  Start Exam
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizzesPage;
