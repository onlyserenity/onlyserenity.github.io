import Reddit from "../assets/reddit.png";
import Cell from "../assets/cell.png";
import Flutter from "../assets/flutter.png";
import Auth from "../assets/authenticator.jpg";

const Projects = [
  {
    title: "Reddit Client",
    name: "Reddictron",
    moto: "Fast-performance Reddit client",
    desc:
      "This application is cross-platform and is currently in the alpha stage. New features are added on a daily-basis.",
    languages: ["JavaScript", "ReactJs", "ElectronJs"],
    img: Reddit,
    url: ""
  },
  {
    title: "Manufacturing Multi-purpose Application",
    name: "Cell Productivity",
    moto: "Built with details and perfection",
    desc:
      "This application is currently under development and it's 99% completed. It features real-time analytics, order management and tracking features. It also has in-app messaging system for supervisors and works at workstations and integrated with Workday API to show real-time employee location through out the facility.",
    languages: ["C#", "MVC", "Microsoft SQL", "API"],
    img: Cell,
    url: ""
  },
  {
    title: "Cross-platform Weather App",
    name: "Flutter Weather",
    moto: "One code, multiple operation systems",
    desc:
      "Weather app developed using Google's newest framework, Flutter. It is designed to target Android and iOS. It uses a free API to fetch weather data and display it to the user.",
    languages: ["Android", "iOS", "Dart", "Flutter", "API"],
    img: Flutter,
    url: ""
  },
  {
    title: "Backend Authenticator for Node.js",
    name: "Authenticator.js",
    moto: "One code, multiple operation systems",
    desc:
      "Backend authentication api that works with nodejs and expressjs. It encrypts relevant information into MongoDB and can retrieve and compare encrypted information such as login for verification.",
    languages: ["ES6", "Node.js", "Passport.js", "JWT"],
    img: Auth,
    url: ""
  }
];

export { Projects };
