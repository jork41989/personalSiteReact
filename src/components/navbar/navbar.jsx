import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [activePage, setPage] = useState("")

  let pageFinder = () =>{
    let page = window.location.hash;
    let el
    page = page.slice(2,-1)
    console.log(page)
    let oldPage
    console.log(activePage)
    

      oldPage = document.getElementById(activePage)
      oldPage.classList.add("notSelectedMenu");
      oldPage.classList.remove("selectedMenu");

      el = document.getElementById(page)
      el.classList.remove("notSelectedMenu");
      el.classList.add("selectedMenu");
    
    setPage(el)
  }

  useEffect(() =>{
    pageFinder()
  }, [activePage])

  let arrows = "<>";
  return (
    <div className="contentMenu">
      <Link
        to={"/"}
        id="about"
        className="menuTab selectedMenu"
      >
        <p className="menuIcon menuIconOrange">{arrows}</p>
        <p className="menuText">About Me</p>
      </Link>
      <Link
        to={"/projects"}
        id="projects"
        className="menuTab notSelectedMenu"
      >
        <p className="menuIcon menuIconYellow">JS</p>
        <p className="menuText">Projects</p>
      </Link>
      <Link
        to={"/skills"}
        id="skills"
        className="menuTab notSelectedMenu"
      >
        <p className="menuIcon menuIconBlue">
          <i className="fab fa-hooli"></i>
        </p>
        <p className="menuText">Skills</p>
      </Link>
      <Link
        to={"/resume"}
        id="resume"
        className="menuTab notSelectedMenu"
      >
        <p className="menuIcon menuIconBlue">#</p>
        <p className="menuText">Resume</p>
      </Link>
    </div>
  );
};
