import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div>
      <div className="login_column">
        <h1>Snapcart</h1>
        <div className="login_block">
          <h2>Sign In</h2>
          <div>
            <label htmlFor="user">Email</label>
            <br />
            <input id="user" type="text" />
          </div>
          <button>Submit</button>
          <p>
            By submiting, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
      </div>
    </div>
  );
}
