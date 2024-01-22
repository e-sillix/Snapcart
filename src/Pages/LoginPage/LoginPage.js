import React, { useRef } from "react";
import "./LoginPage.css";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function LoginPage() {
  const email = useRef(null);
  const password = useRef(null);

  const log = () => {
    console.log(email.current.value);
    console.log(password.current.value);
  };

  const signIn = async () => {
    console.log(auth?.currentUser?.email);
    console.log(email.current.value);
    console.log(password.current.value);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="login_column">
        <h1>Snapcart</h1>
        <div className="login_block">
          <h2>Sign In</h2>
          <div>
            <label htmlFor="user">Email</label>
            <br />
            <input id="user" type="text" ref={email} />
            <br />
            <label htmlFor="password">Email</label>
            <br />

            <input id="password" type="password" ref={password} />
          </div>
          <button onClick={signIn}>Submit</button>
          <p>
            By submiting, you agree to Snapcart's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
      </div>
    </div>
  );
}
