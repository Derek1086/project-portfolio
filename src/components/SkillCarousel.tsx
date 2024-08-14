import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { findIcon } from "./ProjectCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    name: "Frontend",
    icons: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "ReactJS",
      "Nextjs",
      "VueJS",
    ],
  },
  {
    name: "Backend",
    icons: ["NodeJS", "Vercel", "Firebase", "MongoDB"],
  },
  { name: "Other", icons: ["Java", "Python", "Lua", "Roblox Studio", "C++"] },
];

export function SkillCarousel() {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return (
    <div className="relative">
      <Card className="w-full mt-4 p-4 flex items-center">
        <Button
          variant={"ghost"}
          onClick={prevSlide}
          className="absolute left-4 transform -translate-y-1/2 top-1/2"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </Button>
        <CardContent className="flex flex-col items-center justify-center flex-grow">
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="text-center mb-4">{skills[index].name}</div>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 md:h-[100px] h-[200px] p-4">
              {skills[index].icons.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="h-[40px] w-[40px] flex items-center justify-center">
                    <img
                      src={findIcon(skill)}
                      alt={skill}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-center mt-1">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <Button
          variant={"ghost"}
          onClick={nextSlide}
          className="absolute right-4 transform -translate-y-1/2 top-1/2"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </Button>
      </Card>
    </div>
  );
}
