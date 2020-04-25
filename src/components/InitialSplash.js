import React, { useState } from 'react';

const InitialSplash = () => {

  const [showAllWork, setShowAllWork] = useState(false);
  return (
    <div id="InitialSplash">
      <div className="headshot-container">
        <img src="" alt="headshot" className="headshot" />
      </div>
      <div className="splash-info">
        <h1>{`{leon dail}`}</h1>
        <h2>Full-Stack Software Engineer</h2>
        <h3>Based in sunny San Diego, CA {`{sunny}`}</h3>
        <ul className="contact-link-list">
          <li>{`{github}`}</li>
          <li>{`{linkedIn}`}</li>
          <li>{`{email}`}</li>
        </ul>
      </div>
      <div className="about-me">
        <h4>{`{icon}`} about me</h4>
        <h5>Hi! My name is Leon, and I'm a full-stack web developer specializing in Javascript with React and NodeJS.</h5>
        <p>I find myself most proud when I am able to solve a challenging problem. I am confident knowing that I can look at a question from all sides and execute the best solution.</p>
        <p>I have years of experience with coding and web design. I was the administrator, designer, and coder for small, hobby websites in the past. I taught myself how to manage a community and all of its coding needs, including quick solutions when problems arise. Now, I am utilizing JavaScript to develop web applications. I am hoping to work on a team with great programmers.</p>
        <p>My biggest passions are designing and creating games; I am always eager to piece together all types - board games, pen and paper, and internet games alike - to test my creativity. My other outlets are writing stories and staying healthy!</p>
      </div>
      <div className="experience">
      <h4>{`{icon}`} experience</h4>
        <ul className="experience-list">
          <li className="experience-item">
            <span className="bullet-icon" />
            <div className="experience-item-info">
              <h5>{`{kituIcon}`}</h5>
              <h6>Kitu Systems, Inc.</h6>
              <span className="experience-dates">
                March 2020 - Present
              </span>
              <span className="experience-role">
                Software Engineer Intern
              </span>
              <ul className="experience-tasks">
                <li>Worked hard</li>
                <li>Front-end</li>
              </ul>
            </div>
          </li>
          <li className="experience-item">
            <span className="bullet-icon" />
            <div className="experience-item-info">
              <h5>{`{thinkful}`}</h5>
              <h6>Thinkful, Inc.</h6>
              <span className="experience-dates">
                June 2019 - January 2020
              </span>
              <span className="experience-role">
                Student and Intern
              </span>
              <ul className="experience-tasks">
                <li>Learned industry-best practices for software development</li>
                <li>Focused on React, Node.js, Express, jQuery, JavaScript, data structures and algorithms</li>
                <li>Designed, created, and deployed mobile-first applications.</li>
                <li>Collaborated with a senior developer multiple times a week</li>
                <li>400+ hours peer-programming in pairs or in group projects and 300+ hours solo programming</li>
              </ul>
            </div>
          </li>
          {showAllWork
            ? <li className="experience-item">
                <span className="bullet-icon" />
                <div className="experience-item-info">
                  <h5>{`{wv}`}</h5>
                  <h6>Weathervane Restaurant</h6>
                  <span className="experience-dates">
                    August 2016 - January 2019
                  </span>
                  <span className="experience-role">
                    Event Coordinator Lead, Trainer, Bartender, Server
                  </span>
                  <ul className="experience-tasks">
                    <li>Directed and trained others in following best methods for high-stakes special events</li>
                    <li>Required precision in every detail toward preparation and setup</li>
                    <li>Client-facing role demanding guest satisfaction</li>
                  </ul>
                </div>
              </li>
            : <button className="showMoreButton" onClick={() => setShowAllWork(true)}>(see more. . .)</button>
            }
        </ul>
      </div>
      <div className="experience">
        <h4>{`{icon}`} skills</h4>
        <h5>Front-End</h5>
        <ul className="skills-list-front-end">
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>SCSS</li>
          <li>jQuery</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Enzyme</li>
        </ul>
        <h5>Front-End</h5>
        <ul className="skills-list-back-end">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostreSQL</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>RESTful APIs</li>
        </ul>
        <h5>Front-End</h5>
        <ul className="skills-list-other">
          <li>Git/GitHub</li>
          <li>Photoshop</li>
          <li>Heroku</li>
          <li>Zeit/Now</li>
          <li>Testing</li>
          <li>NPM</li>
          <li>Dev Tools</li>
        </ul>
      </div>
    </div>
  );
};

export default InitialSplash;