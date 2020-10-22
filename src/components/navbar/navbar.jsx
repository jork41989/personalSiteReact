import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [activePage, setPage] = useState("about")

  let pageSetter = (id) => {
    let newId
    let old = document.getElementById(activePage)
    old.classList.remove("selectedMenu");
    old.classList.add("notSelectedMenu");
    newId = document.getElementById(id);
    setPage(id);
    newId.classList.add("selectedMenu");
    newId.classList.remove("notSelectedMenu");
    
  }
  let arrows = "<>";
  return (
    <div className="contentMenu">
      <Link
        to={"/"}
        id="about"
        onClick={() => {
          pageSetter("about");
        }}
        className="menuTab selectedMenu"
      >
        <p className="menuIcon menuIconOrange">{arrows}</p>
        <p className="menuText">About Me</p>
      </Link>
      <Link
        to={"/projects"}
        id="projects"
        className="menuTab notSelectedMenu"
        onClick={() => {
          pageSetter("projects");
        }}
      >
        <p className="menuIcon menuIconYellow">JS</p>
        <p className="menuText">Projects</p>
      </Link>
      <Link
        to={"/skills"}
        id="skills"
        className="menuTab notSelectedMenu"
        onClick={() => {
          pageSetter("skills");
        }}
      >
        <p className="menuIcon menuIconBlue">
          <i className="fab fa-hooli"></i>
        </p>
        <p className="menuText">Skills</p>
      </Link>
      <Link
        to={"/resume"}
        id="resume"
        onClick={() => {
          pageSetter("resume");
        }}
        className="menuTab notSelectedMenu"
      >
        <p className="menuIcon menuIconBlue">#</p>
        <p className="menuText">Resume</p>
      </Link>
    </div>
  );
};
