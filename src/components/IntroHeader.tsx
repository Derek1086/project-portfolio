import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function IntroHeader() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "Derek_A_Resume.pdf";
    link.target = "_blank";
    link.download = "Derek_A_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-12">
      <h2 className="mt-10 text-3xl font-bold">Hello,</h2>
      <h3 className="mt-2 text-3xl font-bold text-gray-300">I'm Derek Avila</h3>
      <p className="mt-2 text-gray-400">
        Aspiring Web Developer and Software Engineer
      </p>
      <Button className="mt-4" variant={"outline"} onClick={downloadResume}>
        Download Resume
      </Button>
      <div className="mt-4">
        <a
          href="https://github.com/Derek1086"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"ghost"}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/derek-avila-950657236/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"ghost"}>
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </Button>
        </a>
      </div>
    </div>
  );
}
