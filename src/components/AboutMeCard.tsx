import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faAward } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AboutMeCardProps {
  title: string;
  description: string[];
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        {title === "Education" ? (
          <FontAwesomeIcon icon={faGraduationCap} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faAward} size="2x" />
        )}
        <CardTitle>{title}</CardTitle>
        {description.map((desc, index) => (
          <CardDescription key={index}>{desc}</CardDescription>
        ))}
      </CardHeader>
    </Card>
  );
};

export default AboutMeCard;
