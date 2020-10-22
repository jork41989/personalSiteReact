import React from "react";

export const About = () => {
  return (
    <div className="contentBG1" id="aboutMain">
      <div id="aboutContent">
        <div className="headerDiv">
          <h2 className="contentHeader" id="aboutHeader">
            More About Me
          </h2>
        </div>
        <div className="contentText sideBySide" id="aboutText">
          <div>
            <p className="aboutMainP">
              I have always had an affinity for computers since the time I was
              young and it always seemed to follow me throughout my career. I
              spent a year and a half working at a film studio where I managed
              the creative technological aspects of the studio and the main
              technical infrastructure of the office. I went on to work as a
              freelance web developer, working on WordPress sites. I went on to
              work for The Walt Disney Company, where I landed in a role that
              allowed me to explore software engineering in a limited capacity.
            </p>
            <p className="aboutMainP">
              After leaving The Walt Disney Company I decided to refine my
              skills in software engineering and spent the last few months
              becoming more familiar with the finer intricacies of HTML and CSS
              and went on to dive deep into Ruby / Rails, React / Redux, SQL,
              MongoDB, JavaScript and many other programing languages.
            </p>
          </div>
          <div className="profilePhotoDiv">
            <img
              src="./images/profilePhoto.png"
              alt=""
              className="profilePhoto"
              id="profilePhoto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
