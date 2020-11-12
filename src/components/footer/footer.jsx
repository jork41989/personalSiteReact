import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './footerStyle.css'
export const Footer = () => {
  const local = useLocation();
  
  let branchMaker = () => {
    let branchDiv = document.getElementById("footBranch");
    let newBranch = local.pathname.slice(1)
    if(newBranch === ""){
      branchDiv.innerHTML = "about"
    } else {
      branchDiv.innerHTML = newBranch
    }
  }

  useEffect(()=>{
    branchMaker()
  }, [local])
  return (
    <div className="footerMain">
      <div className="footerHead">
        <p>PROBLEMS</p>
        <p>OUTPUT</p>
        <p>DEBUG CONSOLE</p>
        <p>TERMINAL</p>
        <p className="footerHeadUL">LINKS</p>
      </div>
      <div className="footerLinks">
        <div className="footerSocial">
          <div className="footerSocialSingle">
            <p className="footerSocialPrecommand">Jordan@Jordans-MBP </p>
            <p className="footerSocialCommand">▢ ~/Documents/Projects/Portfolio/</p>
            <p className="footerSocialGit">▢ Email</p>
            <a
              href="mailto:JordanMYAckerman@gmail.com"
              className="footerSocialLink"
            >
              <i className="fas fa-paper-plane"></i>
            </a>
          </div>
          <div className="footerSocialSingle">
            <p className="footerSocialPrecommand">Jordan@Jordans-MBP </p>
            <p className="footerSocialCommand">▢ ~/Documents/Projects/Portfolio/</p>
            <p className="footerSocialGit">▢ LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/ackermanjordan/"
              target="_blank"
              rel="noopener noreferrer"
              className="footerSocialLink"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="footerSocialSingle">
            <p className="footerSocialPrecommand">Jordan@Jordans-MBP </p>
            <p className="footerSocialCommand">▢ ~/Documents/Projects/Portfolio/</p>
            <p className="footerSocialGit">▢ Github</p>
            <a
              href="https://github.com/jork41989"
              target="_blank"
              rel="noopener noreferrer"
              className="footerSocialLink"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="footerSocialSingle">
            <p className="footerSocialPrecommand">Jordan@Jordans-MBP </p>
            <p className="footerSocialCommand">▢ ~/Documents/Projects/Portfolio/</p>
            <p className="footerSocialGit">▢ Angel List</p>
            <a
              href="https://angel.co/u/jordan-ackerman-1"
              target="_blank"
              rel="noopener noreferrer"
              className="footerSocialLink"
            >
              <i className="fab fa-angellist"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footerCopy">
        <div className="footBranchBar">
          <i className="fas fa-code-branch"></i>
          <p id="footBranch">about</p>
        </div>
        <div>
          &lt;copyright&gt; Designed & Engineered by Jordan Ackerman @2020
          &lt;/copyright&gt;
        </div>
      </div>
    </div>
  );
};
