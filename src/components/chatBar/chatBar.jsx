import React, { useState} from "react";
import './chatbar.css'
export const ChatBar = () => {
  const [chat, setChat] = useState(false);
  const [arrow, setArrow] = useState(<i class="fas fa-arrow-circle-up"></i>);

  let chatHandler = () => {
    let frame = document.getElementById("botkit_client");
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
  
    </div>
  );

}