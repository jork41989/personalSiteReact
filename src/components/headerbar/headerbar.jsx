import React from "react";

export const HeaderBar = (props) => {

  return (
    <div className="headBar">
      <div className="logoDiv">
        <div className="logo">
          <img src="/images/logoV1.png" alt="" className="logoImg" />
        </div>
        <div className="Name">Jordan Ackerman</div>
      </div>
      <div className="socialLogos">
        <a href="mailto:JordanMYAckerman@gmail.com">
          <i className="fas fa-paper-plane"></i>
        </a>
      </div>
    </div>
  );
};
