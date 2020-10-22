import React from "react";
import './projects.css'

export const Projects = () => {
  return (
    <div className="contentBG1" id="projectsMain">
      <div id="bodyProjects">
        <div id="cumulusNotePreviewDiv" className="projectPreview">
          <div className="cumulusImg previewImg"></div>
          <div className="projectInfo">
            <p className="projectText">Cumulusnote</p>
            <div className="projectLinksDiv">
              <a
                href="https://github.com/jork41989/cumulusNote"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Github
              </a>
              <a
                href="https://cumulusnote.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Live Site
              </a>
            </div>
            <p className="projectDesc">
              A fullstack single-page social music app where users can create
              profiles, upload songs, and listen to and comment on those
              uploaded by other users.
            </p>
          </div>
        </div>

        <div id="quackPreviewDiv" className="projectPreview">
          <div className="quackImg previewImg"></div>
          <div className="projectInfo">
            <p className="projectText">Quacker Clicker</p>
            <div className="projectLinksDiv">
              <a
                href="https://github.com/jork41989/QuackerClicker"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Github
              </a>
              <a
                href="https://quackerclicker.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Live Site
              </a>
            </div>
            <p className="projectDesc">
              A JavaScript single page incremental game where users click the
              duck to gain quacks and then use those quacks for upgrades.
            </p>
          </div>
        </div>

        <div id="actionBoxPreviewDiv" className="projectPreview">
          <div className="actionImg previewImg"></div>
          <div className="projectInfo">
            <p className="projectText">Actionboxd</p>
            <div className="projectLinksDiv">
              <a
                href="https://github.com/jork41989/actionboxd"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Github
              </a>
              <a
                href="https://actionboxd.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Live Site
              </a>
            </div>
            <p className="projectDesc">
              A MernStack single-page social media app that allows users to
              rate, review and mark films as watched.
            </p>
          </div>
        </div>

        <div id="sneezePreviewDiv" className="projectPreview">
          <div className="sneezeImg previewImg"></div>
          <div className="projectInfo">
            <p className="projectText">SafeSneezeGaurd.com</p>
            <div className="projectLinksDiv">
              <a
                href="https://safesneezeguard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Live Site
              </a>
            </div>
            <p className="projectDesc">
              A WordPress based ecommerce site that allows customers to order
              sneeze guards.
            </p>
          </div>
        </div>

        <div id="masksPreviewDiv" className="projectPreview">
          <div className="masksImg previewImg"></div>
          <div className="projectInfo">
            <p className="projectText">MakeMeMasks.com</p>
            <div className="projectLinksDiv">
              <a
                href="https://MakeMeMasks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Live Site
              </a>
            </div>
            <p className="projectDesc">
              A WordPress based ecommerce site that allows customers to order
              customized face masks and neck gaiters.
            </p>
          </div>
        </div>

        <div id="ppaPreviewDiv" className="projectPreview">
          <div className="ppaImg previewImg"></div>
          <div className="projectInfo">
            <p className="projectText">Professional Preparedness Alliance</p>
            <div className="projectLinksDiv">
              <a
                href="https://github.com/jork41989/ppa"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Github
              </a>
              <a
                href="http://professionalpreparednessalliance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Live Site
              </a>
            </div>
            <p className="projectDesc">
              A single page react application for an alliance of professionals in
              the end of life planning sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
