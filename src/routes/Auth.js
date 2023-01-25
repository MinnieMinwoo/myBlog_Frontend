import { useState } from "react";
import { authService } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Auth.module.css";

const Auth = () => {
    const [signIn, setSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (event) => {
        let data;
        event.preventDefault();
        try {
            if (signIn) {
                data = await signInWithEmailAndPassword(authService, email, password);
            } else {
                data = await createUserWithEmailAndPassword(authService, email, password);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const toggleAccount = () => {
        setSignIn((prev) => !prev);
    };
    return (
        <div className="Auth">
            <h1>MyBlog</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="email"
                    value={email}
                    required
                    onChange={onChange}
                    className={styles.auth_input}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    autoComplete="off"
                    required
                    onChange={onChange}
                    className={styles.auth_input}
                />
                <input type="submit" value={signIn ? "Sign In" : "Create Account"}></input>
            </form>
            <span onClick={toggleAccount}>{signIn ? "Create Account" : "Sign In"}</span>
        </div>
    );
};

export default Auth;
