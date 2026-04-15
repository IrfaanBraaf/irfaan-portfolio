import apiLogo from "./images/API-logo-ligh-blue-back138x75.png";
import cloudImage from "./images/Cloud.png";
import coparentImage from "./images/Coparent.png";
import odesseeImage from "./images/Odessee.jpg";
import officePlaceImage from "./images/OfficePlace-logo-1024px.png";

export const ProjectsData = [
  {
    id: 1,
    name: "API Property Group Project",
    description:
      "A platform designed to connect businesses with industrial and commercial property opportunities across Johannesburg, Pretoria, Durban, and Cape Town. The system supports buying, selling, and leasing while offering additional services such as property development and valuation. It aims to streamline connections between buyers, sellers, and brokers, providing a reliable and informed property marketplace for businesses of all sizes.",
    image: apiLogo,
    link: null,
    nda: true,
    tech: ["React", "Node.js", "JavaScript", "Scss", "Css"],
  },
  {
    id: 2,
    name: "Odessee",
    description:
      "Odessee is a role-based project management platform for organizing companies, projects, tasks, and sub-tasks within a structured hierarchy. It includes Kanban tracking, document management, task assignment, and reporting tools for efficient end-to-end project control.",
    image: odesseeImage,
    link: null,
    nda: true,
    tech: ["React", "Node.js", "Tailwind", "JavaScript", "Scss", "Css"],
  },
  {
    id: 3,
    name: "Co-parent",
    description:
      "CoParent is a South African mobile application designed to simplify communication and coordination between parents after separation. The platform focuses on reducing conflict and improving collaboration by providing structured tools for managing shared responsibilities.",
    image: coparentImage,
    link: null,
    nda: true,
    tech: ["React", "Node.js", "Tailwind", "JavaScript", "Scss", "Css"],
  },
  {
    id: 4,
    name: "Office Place",
    description:
      "Office Place is a commercial property platform focused on leasing, selling, and purchasing properties across Johannesburg, Pretoria, Durban, and Cape Town. Backed by a national team of experienced brokers, the platform connects businesses with suitable property opportunities while offering services such as development and valuation. It is designed to provide a reliable and efficient solution for companies of all sizes seeking commercial and industrial property.",
    image: officePlaceImage,
    link: null,
    nda: true,
    tech: ["React", "Node.js", "Tailwind", "JavaScript", "Scss", "Css"],
  },
  {
    id: 5,
    name: "RepFinder-SA",
    description:
      "A tool where you enter your South African address and instantly see who your elected representatives are—your ward councillor, MP, and MPL—along with their contact details and party.",
    image: cloudImage,
    link: null,
    nda: false,
    tech: ["React", "Node.js", "JavaScript", "Scss", "Css"],
  },
  {
    id: 6,
    name: "TapAttend",
    description:
      "TapAttend aims to modernize attendance tracking using NFC technology, reducing manual processes and improving the accuracy and efficiency of attendance management systems.",
    image: cloudImage,
    link: null,
    nda: false,
    tech: ["React", "Node.js", "JavaScript", "Scss", "Css"],
  },
];