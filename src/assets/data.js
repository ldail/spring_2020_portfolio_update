import {ReactComponent as AboutMeIcon} from '../assets/address-card-regular.svg';
import {ReactComponent as ExperiencesIcon} from '../assets/briefcase-solid.svg';
import {ReactComponent as SkillsIcon} from '../assets/tools-solid.svg';
import {ReactComponent as ProjectsIcon} from '../assets/project-diagram-solid.svg';
import elInstrumentoScreenshot from '../assets/ElInstrumento-screenshot.png';
import directMeScreenshot from '../assets/DirectMe-screenshot.png';
import ultimateClothingSceenshot from '../assets/UltimateClothing-screenshot.png';
import nowPlayingScreenshot from '../assets/NowPlayingLive-screenshot.png';
import {ReactComponent as LinkArrow} from '../assets/arrow-up-solid.svg';
import kituSystemsIcon from '../assets/kitu-systems-icon.png';
import thinkfulIcon from '../assets/thinkful-icon.jpg'
import weathervaneIcon from '../assets/weathervane-icon.png';

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
        description: `Semantic & Accessible HTML5, CSS3 and SCSS, JavaScript`,
        icon: LinkArrow
      },
      {
        name: `React`,
        description: `React Classes, Hooks, Contect API`,
        icon: LinkArrow
      },
      {
        name: `Redux`,
        description: `React with Redux State Management`,
        icon: LinkArrow
      },
      {
        name: `jQuery`,
        description: `JavaScript library`,
        icon: LinkArrow
      },
      {
        name: `Enzyme`,
        description: `Unit Testing`,
        icon: LinkArrow
      }
    ]
  },
  {
    title: `Back-end`,
    skills: [
      {
        name: `Node.js`,
        description: `Back-end JavaScript Development`,
        icon: LinkArrow
      },
      {
        name: `Express.js`,
        description: `Node.js framework`,
        icon: LinkArrow
      },
      {
        name: `Relational Databases`,
        description: `PostgreSQL & MySQL with RESTful APIs`,
        icon: LinkArrow
      },
      {
        name: `Mocha & Chai`,
        description: `Unit & Integration Testing`,
        icon: LinkArrow
      }
    ]
  },
  {
    title: `Other`,
    skills: [
      {
        name: `Flow Control and Production Environment`,
        description: `Git, GitHub, BitBucket, Jira`,
        icon: LinkArrow
      },
      {
        name: `Deployment`,
        description: `Heroku, Zeit, GitHub Pages`,
        icon: LinkArrow
      },
      {
        name: `Design with Adobe Photoshop`,
        description: `Website mock-ups and editing`,
        icon: LinkArrow
      },
      {
        name: `Developer Tools and Packages`,
        description: `Browser DevTools and NPM`,
        icon: LinkArrow
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
    tasks: [`Worked hard`, `Frontend stuff`]
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
  }
]

export const GITHUB_LINK = `https://github.com/ldail`;
export const LINKEDIN_LINK = `https://linkedin.com/in/ldail`;
export const EMAIL_LINK = `mailto:leondailofficial@gmail.com`;