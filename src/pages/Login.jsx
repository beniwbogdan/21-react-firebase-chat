import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
//import Add from "../img/photo.png";

function Login() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        // console.log(e.target[2].value);
        // console.log(e.target[3].files[0]);
        // console.log(auth)
        const email = e.target[0].value;
        const password = e.target[1].value;


        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }


    };

    return (
        <div className={"formContainer"}>
            <div className={"formWrapper"}>
                <span className={"logo"}>reactChat</span>
                <span className={"title"}>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder={"email"}/>
                    <input type="password" placeholder={"password"} />

                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don`t have an account ?  <Link to={"/register"}>Register</Link></p>
            </div>
        </div>    );
}

export default Login;