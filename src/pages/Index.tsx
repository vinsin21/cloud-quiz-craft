
import React from "react";
import Landing from "../components/Landing";
import QuizList from "../components/QuizList";

const Index = () => {
  return (
    <>
      <Landing />
      <div className="container mx-auto px-4 pb-16">
        <QuizList />
      </div>
    </>
  );
};

export default Index;
