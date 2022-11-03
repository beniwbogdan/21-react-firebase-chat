import React from 'react';
import Attach from "../img/clip.png";
import Photo from "../img/picture.png";

function Input(props) {
    return (
        <div className={"input"}>
            <input type="text" placeholder={"Type something..."}/>
            <div className="send">
                <img src={Attach} alt=""/>
                <input type="file" style={{display: "none"}} id={"file"}/>
                    <label htmlFor={"file"}>
                        <img src={Photo} alt=""/>

                    </label>
                <button>Send</button>
            </div>
        </div>
);
}

export default Input;