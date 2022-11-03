import React from 'react';
import Add from "../img/photo.png";

function Login(props) {
    return (
        <div className={"formContainer"}>
            <div className={"formWrapper"}>
                <span className={"logo"}>reactChat</span>
                <span className={"title"}>Register</span>
                <form>
                    <input type="text" placeholder={"display name"}/>
                    <input type="email" placeholder={"email"} />

                    <button>Sign up</button>
                </form>
                <p>You don`t have an account ?  Register</p>
            </div>
        </div>    );
}

export default Login;