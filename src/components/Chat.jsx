import React from 'react';
import Cam from "../img/video-camera-alt.png";
import Add from "../img/user-add.png";
import More from "../img/menu-dots.png";
import Messages from "./Messages";
import Input from "./Input";

function Chat(props) {
    return (
        <div className={"chat"}>
            <div className="chatInfo">
                <span>Lucee</span>
                <div className="chatIcons">
                    <img src={Cam} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;