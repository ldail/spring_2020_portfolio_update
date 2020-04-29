import {ReactComponent as AboutMeIcon} from '../assets/address-card-regular.svg';
import {ReactComponent as ExperiencesIcon} from '../assets/briefcase-solid.svg';
import {ReactComponent as SkillsIcon} from '../assets/tools-solid.svg';
import {ReactComponent as ProjectsIcon} from '../assets/project-diagram-solid.svg';
import {ReactComponent as ResumeIcon} from '../assets/resume-icon.svg';
import elInstrumentoScreenshot from '../assets/ElInstrumento-screenshot.png';
import directMeScreenshot from '../assets/DirectMe-screenshot.png';
import ultimateClothingSceenshot from '../assets/UltimateClothing-screenshot.png';
import nowPlayingScreenshot from '../assets/NowPlayingLive-screenshot.png';
import kituSystemsIcon from '../assets/kitu-systems-icon.png';
import thinkfulIcon from '../assets/thinkful-icon.jpg'
import weathervaneIcon from '../assets/weathervane-icon.png';
import {ReactComponent as WebDevelopmentIcon} from '../assets/skills-icons/web-development-icon.svg';
import {ReactComponent as ReactIcon} from '../assets/skills-icons/react-icon.svg';
import {ReactComponent as ReduxIcon } from '../assets/skills-icons/redux-icon.svg';
import {ReactComponent as JQueryIcon} from '../assets/skills-icons/jQuery-icon.svg';
import {ReactComponent as EnzymeIcon} from '../assets/skills-icons/enzyme-icon.svg'
import {ReactComponent as NodeJsIcon} from '../assets/skills-icons/nodeJs-icon.svg'
import {ReactComponent as ExpressIcon } from '../assets/skills-icons/express-icon.svg';
import {ReactComponent as DatabasesIcon} from '../assets/skills-icons/databases-icon.svg';
import {ReactComponent as MochaIcon} from '../assets/skills-icons/mocha-icon.svg';
import {ReactComponent as GitIcon } from '../assets/skills-icons/git-icon.svg'
import {ReactComponent as HerokuIcon} from '../assets/skills-icons/heroku-icon.svg'
import {ReactComponent as PhotoshopIcon} from '../assets/skills-icons/photoshop-icon.svg'
import {ReactComponent as DevToolsIcon} from '../assets/skills-icons/devTools-icon.svg'






export const projects = [
  {
    name: 'Now Playing',
    screenshot: nowPlayingScreenshot,
    link: 'https://whatsplaying.now.sh/',
    github: 'https://github.com/thinkful-ei-gecko/NowPlaying-Client',
    description: `Now Playing provides users a platform to engage with others while watching movies. Users are able to see comments in real-time made by others as they watch along. Now Playing utilizes the TMDB API to offer an extended breadth of movies. `,
    tech: [`ReactJS`, `Javascript`, `NodeJS`, `Express`, `Knex`, `APIs`, `PostgreSQL`, `HTML5`, `CSS3` ]
  },
  {
    name: 'Ultimate Clothing',
    screenshot: ultimateClothingSceenshot,
    link: `https://ultimateclothing.now.sh/`,
    github: `https://github.com/ldail/ultimate-clothing`,
    description: `Ultimate Clothing is an e-commerce platform that hosts popular clothing items for sale. The application utilizes Stripe for payments and Firebase/auth for user authorization and Firebase/firestore for holding the collection data. Ultimate Clothing utilizes redux for state management and is a fully functioning e-commerce store. `,
    tech: [`ReactJS`, `Redux`, `Javascript`, `Firebase`, `Stripe`, `NodeJS`, `Express`, `HTML5`, `CSS3` ]
  },
  {
    name: 'DirectMe',
    screenshot: directMeScreenshot,
    link: `https://directme.ldail.now.sh/`,
    github: `https://github.com/ldail/directme-Capstone`,
    description: `Directme is a modern web directory. Users can find new websites and communities via hubs and tags. Hubs are nested categories that a user can move through until they find a topic of interest. Tags allow a user to search by keywords to find listings. Users can contribute listings with any number of imaginable tags. If the tags match a hub's nested link, the listing will be displayed there as well. `,
    tech: [ `ReactJS`, `Javascript`, `HTML5`, `CSS3`, `NodeJS`, `Express`, `Knex`, `PostgreSQL` ]
  },
  {
    name: 'El Instrumento',
    screenshot: elInstrumentoScreenshot,
    link: `https://client.ldail.now.sh/`,
    github: `https://github.com/thinkful-ei-gecko/Smiti-Leon-new-spaced-repetition-client`,
    description: `El Instrumento helps a user learn a language using the Spaced Repetition algorithm which is proven to increase the rate of learning dramatically. This version contains beginnings to learn the Spanish language, starting with the English/Spanish translations of common musical instruments. `,
    tech: [`ReactJS`, `Javascript`, `HTML5`, `CSS3`, `NodeJS`, `Express`, `Knex`, `PostgreSQL` ]
  }
];

export const skills = [
  {
    title: `Front-end`,
    skills: [
      {
        name: `Web Design & Development`,
        description: `Responsive, Semantic, & Accessible HTML5, CSS3 and SCSS, JavaScript`,
        icon: WebDevelopmentIcon,
        style: {color: '#e7ed1f'}
      },
      {
        name: `React`,
        description: `React Classes, Hooks, Contect API`,
        icon: ReactIcon,
        style: {color: '#1fd1ed'}
      },
      {
        name: `Redux`,
        description: `React with Redux State Management`,
        icon: ReduxIcon
      },
      {
        name: `jQuery`,
        description: `JavaScript library`,
        icon: JQueryIcon,
        style: {color: '#1694cb'}
      },
      {
        name: `Enzyme`,
        description: `Unit Testing`,
        icon: EnzymeIcon
      }
    ]
  },
  {
    title: `Back-end`,
    skills: [
      {
        name: `Node.js`,
        description: `Back-end JavaScript Development`,
        icon: NodeJsIcon,
        style: {color: '#3ba442'}
      },
      {
        name: `Express.js`,
        description: `Node.js framework`,
        icon: ExpressIcon,
        style: {color: '#bdbdbd'}
      },
      {
        name: `Relational Databases`,
        description: `PostgreSQL & MySQL with RESTful APIs`,
        icon: DatabasesIcon,
        style: {color: '#c17ad6'}
      },
      {
        name: `Mocha & Chai`,
        description: `Unit & Integration Testing`,
        icon: MochaIcon
      }
    ]
  },
  {
    title: `Other`,
    skills: [
      {
        name: `Flow Control and Production Environment`,
        description: `Git, GitHub, BitBucket, Jira`,
        icon: GitIcon,
        style: {color: '#ed3909'}
      },
      {
        name: `Deployment`,
        description: `Heroku, Zeit, GitHub Pages`,
        icon: HerokuIcon
      },
      {
        name: `Adobe Photoshop`,
        description: `Design, mock-ups and editing`,
        icon: PhotoshopIcon,
        style: {color: '#043ddf'}
      },
      {
        name: `Developer Tools and Packages`,
        description: `Browser DevTools and NPM`,
        icon: DevToolsIcon,
        style: {color: '#14ff94'}
      }
    ]
  }
];

export const experiences = [
  {
    name: `Kitu Systems, Inc.`,
    icon: kituSystemsIcon,
    link: `https://kitu.io`,
    startDate: `Mar '20`,
    endDate: `Present`,
    role: `Software Engineer Intern`,
    tasks: [
      `Developed software in a production environment`,
      `Redesign of front-end product`,
      `Rearchitect state management utilities`,
      `Full-time position employing Agile methodology`
    ]
  },
  {
    name: `Thinkful, Inc.`,
    icon: thinkfulIcon,
    link: `https://thinkful.com`,
    startDate: `Jun '19`,
    endDate: `Jan '20`,
    role : `Student/Intern`,
    tasks: [
      `Learned industry-best practices for software development`,
      `Focused on React, Node.js, Express, jQuery, JavaScript, data structures and algorithms`,
      `Designed, created, and deployed mobile-first applications.`,
      `Collaborated with a senior developer multiple times a week`,
      `400+ hours peer-programming in pairs or in group projects and 300+ hours solo programming`
    ]
  },
  {
    name: `Weathervane Restaurant`,
    icon: weathervaneIcon,
    startDate: `Aug '16`,
    endDate: `Jan '19`,
    role: `Event Coordinator Lead, Trainer, Bartender, Server`,
    tasks: [
      `Directed and trained others in following best methods for high-stakes special events`,
      `Required precision in every detail toward preparation and setup`,
      `Client-facing role demanding guest satisfaction`
    ]
  }
];

export const headerIcons = [
  {
    name: `about`,
    icon: AboutMeIcon,
  },
  {
    name: `experiences`,
    icon: ExperiencesIcon,
  },
  {
    name: `skills`,
    icon: SkillsIcon
  },
  {
    name: `projects`,
    icon: ProjectsIcon
  },
  {
    name: `resume`,
    icon: ResumeIcon
  }
]

export const GITHUB_LINK = `https://github.com/ldail`;
export const LINKEDIN_LINK = `https://linkedin.com/in/ldail`;
export const EMAIL_LINK = `mailto:leondailofficial@gmail.com`;