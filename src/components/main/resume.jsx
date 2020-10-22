import React from "react";
import './resume.css'

export const Resume = () => {
  return (
    <div className="contentBG1" id="resumeMain">
      <div id="bodyResume">
        <div>
          <p className="resumeName">Jordan Ackerman</p>
        </div>
        <div className="contactInfo">
          <div>
            <a href="mailto:JordanMYAckerman@gmail.com">Email</a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/ackermanjordan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              href="https://github.com/jork41989"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="skillsResume">
          <div className="resumeHeads">
            <p>Skills</p>
          </div>
          <div className="resumeText">
            <p>
              React, Redux, Ruby, Ruby on Rails, JavaScript, jQuery, SQL, Git,
              HTML5, CSS3, AWS, Firebase, WordPress, Apollo, GraphQL, Python,
              Django, Node.js
            </p>
          </div>
        </div>
        <div>
          <div className="resumeHeads">
            <p>EXPERIENCE</p>
          </div>
          <div>
            <div className="resumeJobDate">
              <div className="resumeJobTitleLocation">
                <p className="resumeText boldMe">
                  Self Employed, Freelance Developer
                </p>
                <p className="resumeText">Orlando, FL</p>
              </div>
              <div>
                <p className="resumeText">2020</p>
              </div>
            </div>
            <div>
              <ul className="resumeText resumeList">
                <li>
                  Developed a full stack web application to take and manage
                  appointments for virtual tours.
                </li>
                <li>
                  Project was locally prepared but never launched due to Covid
                  phasing mitigating the need.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="resumeJobDate">
            <div className="resumeJobTitleLocation">
              <p className="resumeText boldMe">561 Signs, Contract Developer</p>
              <p className="resumeText">Orlando, FL</p>
            </div>
            <div>
              <p className="resumeText">2020</p>
            </div>
          </div>
          <div>
            <ul className="resumeText resumeList">
              <li>
                Developed and launched two custom WordPress based applications.
              </li>
              <li>
                Worked with the owner to develop and track email based marketing
                campaigns to help build a client base for both companies.
              </li>
              <li>
                Worked with the clients payment processing team to help
                integrate payment into both sites.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation">
            <p className="resumeText boldMe">
              The Walt Disney Company, Guest Support
            </p>
            <p className="resumeText">Orlando, FL</p>
          </div>
          <div>
            <p className="resumeText">2015-2019</p>
          </div>
        </div>
        <div>
          <ul className="resumeText resumeList">
            <li>
              Worked as part of a team to develop an interaction notation system
              that was utilized for over three years.
            </li>
            <li>
              Created tools that have assisted in reducing interaction times for
              lost photos associated with RunDisney Races, utilizing Excel and
              an algorithm to pinpoint guests location on the race-course.
            </li>
            <li>Founded a team that assists with peer-to-peer development.</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation">
            <p className="resumeText boldMe">
              Self Employed, Freelance Multi-Media Specialist
            </p>
            <p className="resumeText">Boca Raton, FL</p>
          </div>
          <div>
            <p className="resumeText">2014</p>
          </div>
        </div>
        <div>
          <ul className="resumeText resumeList">
            <li>
              Created and managed websites for multiple brands and familiarized
              the staff with the use of WordPress and ecommerce tools.
            </li>
            <li>Photographed products for implementation into a web store.</li>
            <li>
              Envisioned and developed marketing campaigns to align with major
              events and seasons.
            </li>
          </ul>
        </div>
      </div>

      <div className="resumeHeads">
        <p>Projects</p>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation resumeText">
            <p className="boldMe">CumulusNote</p>
            <p>(Rails, React, Redux, HTML5, AWS and CSS3)</p>
          </div>
          <div className="resumeText noUL">
            <a
              href="https://cumulusnote.herokuapp.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="noUL"
            >
              Live Link{" "}
            </a>
            <a
              href="https://github.com/jork41989/cumulusNote"
              target="_blank"
              rel="noopener noreferrer"
              className="noUL"
            >
              Github
            </a>
          </div>
        </div>

        <div className="resumeText">
          <p>
            A fullstack single-page social music app where users can create
            profiles, upload songs, and listen to and comment on those uploaded
            by other users.
          </p>
        </div>

        <div>
          <ul className="resumeText resumeList">
            <li>
              Created a custom playback bar that utilized AWS linked files to
              allow users to play user-uploaded songs globally across the site.
            </li>
            <li>
              Utilized AWS and CSS3 to implement a song upload form that allows
              users to add their own songs to the site.
            </li>
            <li>
              Used a combination of Rails API routes and Jbuilder to create a
              nested data structure to efficiently bring information to the
              front-end of the site.
            </li>
            <li>
              Leveraged React and CSS3 to design a user profile page, allowing
              other users to explore their uploaded music.
            </li>
            <li>
              Developed a landing page, that allows both logged in users and
              visitors to instantaneously explore the most recently uploaded
              music.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation resumeText">
            <p className="boldMe">ActionBoxd</p>
            <p>(JavaScript, HTML, CSS3, MongoDB, React, Redux, and Docker)</p>
          </div>
          <div className="resumeText noUL">
            <a
              href="https://actionboxd.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="noUL"
            >
              Live Link{" "}
            </a>
            <a
              href="https://github.com/jork41989/actionboxd"
              target="_blank"
              rel="noopener noreferrer"
              className="noUL"
            >
              Github
            </a>
          </div>
        </div>

        <div className="resumeText">
          <p>
            A MernStack single-page social media app that allows users to rate,
            review and mark films as watched.
          </p>
        </div>

        <div>
          <ul className="resumeText resumeList">
            <li>
              Developed an administrative dashboard that allows admin users to
              add Actors and Films rapidly and without having to touch the raw
              MongoDB data.
            </li>
            <li>
              Oversaw the development of the application, approving 95% of all
              merge requests and helping- the team layout all components to
              verify smooth integration.
            </li>
            <li>
              Created a system to aggregate user ratings to display an average
              star rating on the landing page of the site, utilizing JavaScript,
              HTML and CSS3.
            </li>
            <li>
              Engineered the user profile page and the three different views
              that users can experience with a combination of React, HTML and
              CSS3.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation resumeText">
            <p className="boldMe">Untitled Full Stack Application</p>
            <p>(React, Redux, CSS3, Python and Django)</p>
          </div>
          <div className="resumeText noUL">
            <a
              href="https://github.com/jork41989/godsNMonsters"
              target="_blank"
              rel="noopener noreferrer"
              className="noUL"
            >
              Github
            </a>
          </div>
        </div>

        <div className="resumeText">
          <p>
            A Full Stack single page appointment booking and management app with
            customer and admin facing portals.
          </p>
        </div>

        <div>
          <ul className="resumeText resumeList">
            <li>
              Using the built-in Django user authentication tool, created an
              admin login/portal to allow store owners to add available times
              and view booked appointments
            </li>
            <li>
              Using React and Redux, developed a form that pulled the available
              times from a selected date, then let the user select a time and
              fill in details for their appointment.
            </li>
            <li>
              Built a view that showed the details of a selected appointment for
              the customer and was working on integrating an email based system
              to send the customer their booked appointment information.
            </li>
          </ul>
        </div>
      </div>

      <div className="resumeHeads">
        <p>EDUCATION</p>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation resumeText">
            <p className="boldMe">App Academy</p>
            <p>New York, NY</p>
          </div>
          <div className="resumeText">
            <p>2019</p>
          </div>
        </div>

        <div>
          <ul className="resumeText resumeList">
            <li>
              1000-hour immersive full-stack web development intensive with
              &lt;3% acceptance rate
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="resumeJobDate">
          <div className="resumeJobTitleLocation resumeText">
            <p className="boldMe">Lynn University</p>
            <p>Boca Raton, FL</p>
          </div>
          <div className="resumeText">
            <p>2008-2012</p>
          </div>
        </div>

        <div>
          <ul className="resumeText resumeList">
            <li>Achieved a Bachelor of Arts in Film.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
