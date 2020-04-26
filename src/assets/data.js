import {ReactComponent as AboutMeIcon} from '../assets/address-card-regular.svg';
import {ReactComponent as ExperiencesIcon} from '../assets/briefcase-solid.svg';
import {ReactComponent as SkillsIcon} from '../assets/tools-solid.svg';
import {ReactComponent as ProjectsIcon} from '../assets/project-diagram-solid.svg';

export const projects = [
  {
    name: 'Now Playing',
    screenshot: `http://#.com`,
    link: 'https://whatsplaying.now.sh/',
    github: 'https://github.com/thinkful-ei-gecko/NowPlaying-Client',
    description: `Now Playing provides users a platform to engage with others while watching movies. Users are able to see comments in real-time made by others as they watch along. Now Playing utilizes the TMDB API to offer an extended breadth of movies. `,
    tech: [`ReactJS`, `Javascript`, `NodeJS`, `Express`, `Knex`, `APIs`, `PostgreSQL`, `HTML5`, `CSS3` ]
  },
  {
    name: 'Ultimate Clothing',
    screenshot: `http://#.com`,
    link: `https://ultimateclothing.now.sh/`,
    github: `https://github.com/ldail/ultimate-clothing`,
    description: `Ultimate Clothing is an e-commerce platform that hosts popular clothing items for sale. The application utilizes Stripe for payments and Firebase/auth for user authorization and Firebase/firestore for holding the collection data. Ultimate Clothing utilizes redux for state management and is a fully functioning e-commerce store. `,
    tech: [`ReactJS`, `Redux`, `Javascript`, `Firebase`, `Stripe`, `NodeJS`, `Express`, `HTML5`, `CSS3` ]
  },
  {
    name: 'DirectMe',
    screenshot: `http://#.com`,
    link: `https://directme.ldail.now.sh/`,
    github: `https://github.com/ldail/directme-Capstone`,
    description: `Directme is a modern web directory. Users can find new websites and communities via hubs and tags. Hubs are nested categories that a user can move through until they find a topic of interest. Tags allow a user to search by keywords to find listings. Users can contribute listings with any number of imaginable tags. If the tags match a hub's nested link, the listing will be displayed there as well. `,
    tech: [ `ReactJS`, `Javascript`, `HTML5`, `CSS3`, `NodeJS`, `Express`, `Knex`, `PostgreSQL` ]
  },
  {
    name: 'El Instrumento',
    screenshot: `http://#.com`,
    link: `https://client.ldail.now.sh/`,
    github: `https://github.com/thinkful-ei-gecko/Smiti-Leon-new-spaced-repetition-client`,
    description: `El Instrumento helps a user learn a language using the Spaced Repetition algorithm which is proven to increase the rate of learning dramatically. This version contains beginnings to learn the Spanish language, starting with the English/Spanish translations of common musical instruments. `,
    tech: [`ReactJS`, `Javascript`, `HTML5`, `CSS3`, `NodeJS`, `Express`, `Knex`, `PostgreSQL` ]
  }
];

export const skills = [
  {
    title: `Front-end`,
    skills: [`Javascript`, `ReactJS`, `Redux`, `SCSS`, `jQuery`, `CSS3`, `HTML5`, `Enzyme`]
  },
  {
    title: `Back-end`,
    skills: [`Node.js`, `Express`, `PostreSQL`, `Mocha`, `Chai`, `RESTful APIs`]
  },
  {
    title: `Other`,
    skills: [`Git/GitHub`, `Photoshop`, `Heroku`, `Zeit/Now`, `Testing`, `NPM`, `Dev Tools`]
  }
];

export const experiences = [
  {
    name: `Kitu Systems, Inc.`,
    icon: `http://#.com`,
    link: `https://kitu.io`,
    startDate: `March 2020`,
    endDate: `Present`,
    role: `Software Engineer Intern`,
    tasks: [`Worked hard`, `Frontend stuff`]
  },
  {
    name: `Thinkful, Inc.`,
    icon: `http://#.com`,
    link: `https://thinkful.com`,
    startDate: `June 2019`,
    endDate: `January 2020`,
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
    icon: `http://#.com`,
    startDate: `August 2016`,
    endDate: `January 2019`,
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