import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/NavigationBar";
import { IntroHeader } from "@/components/IntroHeader";
import ContentHeader from "@/components/shared/ContentHeader";
import AboutMeCard from "@/components/shared/AboutMeCard";
import ProjectCard from "@/components/ProjectCard";
import { Projects, Project } from "@/components/data/ProjectList";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="">
        <NavigationBar />
      </div>
      <section id="Home">
        <IntroHeader />
      </section>
      <section id="About">
        <ContentHeader primary="Get To Know Me" secondary="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <AboutMeCard
            title="Education"
            description={[
              "Texas State University",
              "Bachelor's of Science in Computer Science",
            ]}
          />
          <AboutMeCard
            title="Certifications"
            description={["Udemy", "React - The Complete Guide"]}
          />
        </div>
        <p className="mt-2">
          I'm a passionate software developer with a solid foundation in help
          desk support. Graduated from Texas State University in December 2023
          with a Bachelor of Science in Computer Science, I possess a robust
          understanding of core principles. My commitment to continuous learning
          drives me to stay updated on industry trends. I'm enthusiastic about
          leveraging my troubleshooting skills to craft innovative and
          user-friendly applications. Specializing in both front-end and
          back-end development, I excel in React.js. Its efficiency and
          versatility resonate with me, allowing me to seamlessly bridge the gap
          between user interface design and robust back-end functionality. My
          unique perspective from a help desk environment enhances my
          development work, ensuring solutions that exceed user expectations.
        </p>
      </section>
      <section id="Projects">
        <ContentHeader primary="Browse My" secondary="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {Projects.map((project: Project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              date={project.date}
              description={project.description}
              icons={project.icons}
              codeLink={project.codeLink}
              live={project.live}
              liveLink={project.liveLink || ""}
            />
          ))}
        </div>
      </section>
      <section id="Skills">
        <ContentHeader primary="Explore My" secondary="Skills" />
      </section>
      <section id="Contact">
        <ContentHeader primary="Get In Touch" secondary="Contact Me" />
      </section>
    </ThemeProvider>
  );
}

export default App;
