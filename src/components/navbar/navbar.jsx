import React, { useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
export const NavBar = () => {
  const [activePage, setPage] = useState("about")
  const local = useLocation();
  let pageFinder = () =>{
    let page = window.location.hash;
    let el
    page = page.slice(2)
    let oldPage
    if(activePage !== page){
      if (activePage === ""){
        oldPage = document.getElementById("about");
      } else {
        
        oldPage = document.getElementById(activePage);
      } 
      if(page === "") {
        el = document.getElementById("about");
        el.classList.remove("notSelectedMenu");
        el.classList.add("selectedMenu");
      } else if(page){
        el = document.getElementById(`${page}`);
        el.classList.remove("notSelectedMenu");
        el.classList.add("selectedMenu");
      } 
      oldPage.classList.add("notSelectedMenu");
      oldPage.classList.remove("selectedMenu");

      setPage(page)
    }
  }

  useEffect(() =>{

    pageFinder()
  }, [local])

  let arrows = "<>";
  return (
    <div className="contentMenu">
      <Link
        to={"/"}
        id="about"
        className="menuTab selectedMenu"
        onClick={pageFinder}
      >
        <p className="menuIcon menuIconOrange">{arrows}</p>
        <p className="menuText">About Me</p>
      </Link>
      <Link
        to={"/projects"}
        id="projects"
        className="menuTab notSelectedMenu"
        onClick={pageFinder}
      >
        <p className="menuIcon menuIconYellow">JS</p>
        <p className="menuText">Projects</p>
      </Link>
      <Link
        to={"/skills"}
        id="skills"
        className="menuTab notSelectedMenu"
        onClick={pageFinder}
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
        onClick={pageFinder}
      >
        <p className="menuIcon menuIconBlue">#</p>
        <p className="menuText">Resume</p>
      </Link>
    </div>
  );
};
