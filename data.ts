import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Android Development",
    about:
      "developed some projects based on kotlin and firebase",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Core Java",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
    {
    Icon: BsCircleFill,
    name: "Linux",
    level: "70",
  },
    {
    Icon: BsCircleFill,
    name: "AWS",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
 


  {
    id: 1,
    name: "ExpenseList",
    image_path: "/images/expenselist.png",
    deployed_url: "https://ajayexpenselist.herokuapp.com/",
    github_url: "https://github.com/ajaykumar1301/expense-list",
    category: ["node", "redux", "react"],
    description:
      "Do CRUD operation on expenses of different category with an interactive and responsive UI",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Bootstrap",
    ],
  },

  {
    id: 2,
    name: "Library Management",
    image_path: "/images/library_mng.png",
    deployed_url: "https://esd5-library-management.herokuapp.com/home",
    github_url: "https://github.com/ajaykumar1301/LibraryManagement",
    category: ["node", "react", "mongo"],
    description:
      "Digital library with basic functionality with mongodb database ",
    key_techs: ["React", "Mongo", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 3,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://esd5-library-management.herokuapp.com/home",
    github_url: "https://github.com/ajaykumar1301/LibraryManagement",
    category: ["node", "next"],
    description:
      "Interactive and responsive portfolio websites with advanced features",
    key_techs: ["Next", "Framer", "Node", "Express", "Tailwind"],
  },
];
