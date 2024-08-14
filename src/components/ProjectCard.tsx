import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const findImage = (title: string) => {
  switch (title) {
    case "Sentiment Analysis":
      return "/projectIcons/Sentiment_Img.png";
    case "Budget Manager":
      return "/projectIcons/Expense_Img.png";
    case "Notes App":
      return "/projectIcons/Notes_Img.png";
    case "Yelp Recommender System":
      return "/projectIcons/RecSys_Img.png";
    case "fly.mov":
      return "/projectIcons/Fly_Img.png";
    case "Holdfast Melee Census":
      return "/projectIcons/HF_Census_Img.png";
    case "Wizard101 Raid Guide":
      return "/projectIcons/Wizard101_Raid_Guide.png";
    case "Blog Website":
      return "/projectIcons/blog_app.png";
    default:
      return "/projectIcons/Sentiment_Img.png";
  }
};

export const findIcon = (icon: string) => {
  switch (icon) {
    case "Java":
      return "/devIcons/Java.png";
    case "ReactJS":
      return "/devIcons/Reactjs.png";
    case "CSS":
      return "/devIcons/CSS.png";
    case "JavaScript":
      return "/devIcons/JavaScript.png";
    case "Material UI":
      return "/devIcons/MUI.png";
    case "TypeScript":
      return "/devIcons/TypeScript.png";
    case "Firebase":
      return "/devIcons/Firebase.png";
    case "Python":
      return "/devIcons/Python.png";
    case "Roblox Studio":
      return "/devIcons/RBX.png";
    case "Lua":
      return "/devIcons/Lua.png";
    case "Nextjs":
      return "/devIcons/Nextjs.png";
    case "MongoDB":
      return "/devIcons/mongodb.png";
    case "Tailwind CSS":
      return "/devIcons/Tailwind.png";
    case "Vercel":
      return "/devIcons/Vercel.png";
    case "NodeJS":
      return "/devIcons/nodejs.png";
    case "VueJS":
      return "/devIcons/Vue.png";
    case "C++":
      return "/devIcons/Cplusplus.png";
    case "HTML":
      return "/devIcons/HTML5.png";
    default:
      return "/devIcons/Java.png";
  }
};

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  icons: string[];
  codeLink: string;
  live: boolean;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  icons,
  codeLink,
  live,
  liveLink,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <img
          src={findImage(title)}
          alt={title}
          className="h-[200px] w-full object-cover rounded-t-lg"
        />
        <div className="mt-2" />
        <CardTitle>{title}</CardTitle>
        <div className="mt-2" />
        <CardDescription>{date}</CardDescription>
        <div className="mt-2" />
        <div className="h-[100px] overflow-hidden">
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="flex justify-center items-center flex-wrap mb-4">
          {icons.map((icon) => (
            <div key={icon} className="w-1/4 flex flex-col items-center mb-2">
              <div className="h-[50px] w-[50px] flex items-center justify-center">
                <img src={findIcon(icon)} alt={icon} height={35} width={35} />
              </div>
              <span className="mt-2 text-sm">{icon}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2"
          >
            <Button variant={"outline"} className="w-full">
              <span className="mr-4">Code</span>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Button>
          </a>
          {live && liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2"
            >
              <Button variant={"outline"} className="w-full">
                <span className="mr-4">Live Demo</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
