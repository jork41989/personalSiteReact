import React, { useState} from "react";
import './chatbar.css'
export const ChatBar = () => {
  const [chat, setChat] = useState(false);
  const [arrow, setArrow] = useState(<i className="fas fa-arrow-circle-up"></i>);

  let chatHandler = () => {
    let frame = document.getElementById("bot_link");
    if (chat){
      frame.classList.add("hideMe")
      setArrow(<i class="fas fa-arrow-circle-up"></i>);
      setChat(false)
    } else {
      frame.classList.remove("hideMe");
      setArrow(<i class="fas fa-arrow-circle-down"></i>);
      setChat(true);
    }
  }
  return (
    <div className="chatBar_Main">
      <div className="chatBar_head" onClick={chatHandler}>
        Jordan Bot {arrow}
      </div>
      <div className="botDiv hideMe" id="bot_link">
        <a href="https://jordanbotv1.herokuapp.com/#" className="chatButton"> Chat With Me</a>
      </div>
    </div>
  );

}