
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  BookOpen,
  GraduationCap,
  Menu,
  X,
  ChevronRight,
  Home,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative">
            <GraduationCap className={cn(
              "w-8 h-8 transition-colors duration-300",
              scrolled ? "text-quiz-primary" : "text-quiz-primary"
            )} />
            <div className="absolute inset-0 bg-quiz-primary/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors duration-300",
            scrolled ? "text-quiz-dark" : "text-quiz-dark"
          )}>
            AWS Certify
          </span>
        </Link>

        {!isMobile ? (
          <>
            <div className="flex space-x-1">
              <NavLink to="/" active={isActive("/")}>
                <Home className="mr-2 h-4 w-4" />
                Home
              </NavLink>
              <NavLink to="/quizzes" active={isActive("/quizzes")}>
                <BookOpen className="mr-2 h-4 w-4" />
                Practice Tests
              </NavLink>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/quizzes">
                <Button 
                  variant="outline" 
                  className="rounded-full px-5 font-medium hover:bg-quiz-primary/10 hover:text-quiz-primary transition-all duration-300"
                >
                  View All Quizzes
                </Button>
              </Link>
              <Link to="/quiz/1">
                <Button className="rounded-full bg-quiz-primary hover:bg-quiz-primary/90 px-5 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-quiz-primary/20 hover:-translate-y-0.5">
                  Start Practice Exam
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "md:hidden relative overflow-hidden",
                  scrolled ? "text-quiz-dark" : "text-quiz-dark"
                )}
              >
                <Menu className="h-6 w-6 transition-transform duration-300" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 flex items-center justify-between border-b">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-quiz-primary" />
                    <span className="font-bold text-lg">AWS Certify</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 flex items-center justify-center">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                <div className="p-4 flex-1 space-y-2">
                  <SheetClose asChild>
                    <Link 
                      to="/" 
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200",
                        isActive("/") && "bg-quiz-primary/10 text-quiz-primary font-medium"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="mr-3 h-5 w-5" />
                      <span>Home</span>
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      to="/quizzes" 
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200",
                        isActive("/quizzes") && "bg-quiz-primary/10 text-quiz-primary font-medium"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BookOpen className="mr-3 h-5 w-5" />
                      <span>Practice Tests</span>
                    </Link>
                  </SheetClose>
                </div>
                
                <div className="p-4 border-t space-y-3">
                  <SheetClose asChild>
                    <Link to="/quizzes" onClick={() => setIsMenuOpen(false)} className="block">
                      <Button variant="outline" className="w-full rounded-xl">
                        View All Quizzes
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/quiz/1" onClick={() => setIsMenuOpen(false)} className="block">
                      <Button className="w-full bg-quiz-primary hover:bg-quiz-primary/90 rounded-xl">
                        Start Practice Exam
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={cn(
        "relative px-4 py-2 rounded-full flex items-center transition-all duration-300",
        active 
          ? "text-quiz-primary font-medium" 
          : "hover:text-quiz-primary/80"
      )}
    >
      {active && (
        <span className="absolute inset-0 bg-quiz-primary/10 rounded-full animate-scale-in"></span>
      )}
      {children}
    </Link>
  );
};

export default Navbar;
