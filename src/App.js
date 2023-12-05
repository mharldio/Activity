import React from "react";
import profile from "./image/c.avif";
import email from "./image/email.webp";
import pass from "./image/pass.png";
import * as styles from "./styles";

const appStyles = {
  containerStyle: styles.containerStyle,
  subContainerStyle: styles.subContainerStyle,
  profileImageStyle: styles.profileImageStyle,
  inputStyle: styles.inputStyle,
  linkStyle: styles.linkStyle,
  buttonStyle: styles.buttonStyle,
  signupLinkStyle: styles.signupLinkStyle,
};

function App() {
  return (
    <div style={appStyles.containerStyle}>
      <div style={appStyles.subContainerStyle}>
        <div>
          <div style={{ paddingTop: "20px", justifyContent: "center", display: "flex" }}>
            <div style={appStyles.profileImageStyle}>
              <img src={profile} alt="profile" style={{ height: "95px", width: "100px", borderRadius: "120px" }} />
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: "45px", fontStyle: "initial", paddingBottom: "15px", fontVariant: "small-caps", color: "#1c2841" }}>Login Page</h1>
            <div>
              <img src={email} alt="email" style={{ height: "25px", width: "25px", position: "absolute", padding: "9px 0 0 25px" }} />
              <input type="text" placeholder="Email" style={appStyles.inputStyle} />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <img src={pass} alt="pass" style={{ height: "25px", width: "25px", position: "absolute", padding: "9px 0 0 25px" }} />
              <input type="password" placeholder="Password" style={appStyles.inputStyle} />
            </div>
            <p style={appStyles.linkStyle}>
              <a href="" style={appStyles.linkStyle}>Forgot Password ?</a>
            </p>
            <div style={{ paddingTop: "5%" }}>
              <button style={appStyles.buttonStyle}>Login</button>
            </div>
            <p style={appStyles.signupLinkStyle}>
              <p style={{color: "white", fontSize:"18px"}}>Don't have any Account?    <a href="#" style={appStyles.signupLinkStyle}>Sign Up</a></p> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
