export type Project = {
  title: string;
  date: string;
  description: string;
  icons: string[];
  codeLink: string;
  live: boolean;
  liveLink: string | null;
};

export const Projects: Project[] = [
  {
    title: "Sentiment Analysis",
    date: "October 2022",
    description:
      "This Java program classifies a set of movie reviews as positive or negative based on their sentiment. This project was completed for my Object-Oriented Design and Programming class.",
    icons: ["Java"],
    codeLink:
      "https://github.com/Derek1086/Sentiment_Analysis/tree/main/Sentiment_Analysis",
    live: false,
    liveLink: null,
  },
  {
    title: "Budget Manager",
    date: "December 2022",
    description:
      "Budget Manager is an app built with React.js to help manage your month-to-month expenses. Users can edit their monthly budget and add/remove expenses. After adding an expense, it will generate a pie chart so the user can visualize their expenses.",
    icons: ["ReactJS", "CSS", "JavaScript"],
    codeLink: "https://github.com/Derek1086/expense-app",
    live: true,
    liveLink: "https://react-practice-9e728.web.app/",
  },
  {
    title: "Notes App",
    date: "July 2023",
    description:
      "Notes app is an app built with typescript to help manage any notes you need, functions the same way as the ios notes app on your iphone. The app utilizes speech recognition, allowing the user to use their voice to write and filter their notes without having to type.",
    icons: ["ReactJS", "Material UI", "TypeScript", "Firebase"],
    codeLink: "https://github.com/Derek1086/notes-app",
    live: true,
    liveLink: "https://dereks-notes-web-app.web.app/notes",
  },
  {
    title: "Yelp Recommender System",
    date: "November 2023",
    description:
      "Created for a final project for my Recommender Systems class, this program provides better recommendations to users than yelp would by utilizing the surprise machine learning library to provide personalized recommendations based on time slots.",
    icons: ["Python"],
    codeLink:
      "https://github.com/Derek1086/RecommenderSystemsProj/tree/main/RecSysProject",
    live: false,
    liveLink: null,
  },
  {
    title: "fly.mov",
    date: "January 2024",
    description:
      "This is a pvp based game built with the Roblox Studio game engine using Lua as the programming langauge. The combat is similar to Superman.",
    icons: ["Roblox Studio", "Lua"],
    codeLink: "https://github.com/Derek1086/fly_mov/tree/main",
    live: false,
    liveLink: null,
  },
  {
    title: "Holdfast Melee Census",
    date: "February 2024",
    description:
      "Holdfast Melee Census is a tool created for the Holdfast: Nations at War community to facilitate the tracking and analysis of player location data. It provides an easy-to-use interface for users to view census information on an interactive map.",
    icons: [
      "Nextjs",
      "MongoDB",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Vercel",
    ],
    codeLink: "https://github.com/Derek1086/holdfast-melee-census",
    live: true,
    liveLink: "https://holdfast-census.vercel.app/",
  },
  {
    title: "Wizard101 Raid Guide",
    date: "May 2024",
    description:
      "This is an easy-to-use cheat sheet for all roles in the Crying Sky Raid in Wizard101. Each role has in-depth instructions of each step and displays the order of what to do them in.",
    icons: ["ReactJS", "TypeScript", "Material UI", "Vercel"],
    codeLink: "https://github.com/Derek1086/wizard101-raid-guide",
    live: true,
    liveLink: "https://wizard101-raid-guide.vercel.app/",
  },
  {
    title: "Blog Website",
    date: "June 2024",
    description:
      "This is a blog management system that allows users to create and manage their accounts, posts, and comments. It is built using Node.js, Express.js, MongoDB, React and Vite.",
    icons: ["ReactJS", "MongoDB", "Material UI", "JavaScript", "NodeJS"],
    codeLink: "https://github.com/Derek1086/blog-app",
    live: false,
    liveLink: null,
  },
];
