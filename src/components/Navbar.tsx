
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Bookmark, 
  GraduationCap, 
  Home, 
  Menu, 
  X 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-7 w-7 text-quiz-primary" />
          <span className="font-bold text-xl tracking-tight text-quiz-dark">AWS Certify</span>
        </Link>
        
        {!isMobile ? (
          <>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Practice Tests
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-quiz-primary/50 to-quiz-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <GraduationCap className="h-6 w-6 text-white" />
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              AWS Cloud Practitioner
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Comprehensive practice tests to help you prepare for the AWS Certified Cloud Practitioner exam.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/quizzes" title="Practice Exams" icon={BookOpen}>
                        Take timed practice exams that simulate the real certification test.
                      </ListItem>
                      <ListItem href="/quizzes" title="Study Resources" icon={Bookmark}>
                        Access study guides and reference materials to boost your knowledge.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="hidden md:flex items-center gap-4">
              <Link to="/quizzes">
                <Button variant="outline" className="rounded-full">
                  View All Quizzes
                </Button>
              </Link>
              <Link to="/quiz/1">
                <Button className="rounded-full bg-quiz-primary hover:bg-quiz-primary/90">
                  Start Practice Exam
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-quiz-primary" />
                    <span className="font-bold text-lg">AWS Certify</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                <div className="space-y-4 flex-1">
                  <SheetClose asChild>
                    <Link 
                      to="/" 
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-muted"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="mr-3 h-5 w-5 text-quiz-primary" />
                      <span className="font-medium">Home</span>
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link 
                      to="/quizzes" 
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-muted"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BookOpen className="mr-3 h-5 w-5 text-quiz-primary" />
                      <span className="font-medium">Practice Exams</span>
                    </Link>
                  </SheetClose>
                  
                  <div className="pt-4 border-t">
                    <p className="px-4 mb-3 text-sm font-medium text-muted-foreground">
                      AWS Exam Resources
                    </p>
                    <SheetClose asChild>
                      <Link 
                        to="/quizzes" 
                        className="flex items-center px-4 py-3 rounded-lg hover:bg-muted"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Bookmark className="mr-3 h-5 w-5 text-quiz-primary" />
                        <span className="font-medium">Study Resources</span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                
                <div className="mt-auto space-y-3 pt-4 border-t">
                  <SheetClose asChild>
                    <Link to="/quizzes" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        View All Quizzes
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/quiz/1" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-quiz-primary hover:bg-quiz-primary/90">
                        Start Practice Exam
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon: Icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {Icon && <Icon className="h-4 w-4" />}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
