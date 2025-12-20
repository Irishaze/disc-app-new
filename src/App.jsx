import "./App.css";
import React, { useState, useEffect } from "react";
import bgImage from "./Background.png";
import meovvLogo from "./icon.png";
import discover from "./assets/discover.png";
import add from "./assets/add.png";
import likes from "./assets/likes.png";
import messages from "./assets/messages.png";
import me from "./assets/me.png";
import lamp from "./assets/lamp.png";

function App() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    console.log("color is now: ", color);
  }, [color]);
  return (
    <>
      <div class="background">
        <div class="container">
          <img src={meovvLogo} alt="Meovv Logo" />
          <h2 class="item">
            Find Your
            <br /> People Here at
            <br />
            Northwestern
          </h2>
          <button class="item account" style={{ backgroundColor: color }}>
            Create Account
          </button>
          <button class="item signin" style={{ color: color }}>
            SSO Sign In
          </button>
          <h3 class="item" style={{ color: color }}>
            <span>Trouble signing in?</span>
          </h3>
          <footer class="item" style={{ color: color }}>
            By signing up, you agree to our <span>Terms</span>. Learn
            <br /> how we use your data in our <span>Privacy Policy.</span>
          </footer>
        </div>
        <NavBar></NavBar>
        <Lamp setColor={setColor}></Lamp>
      </div>
    </>
  );
}

function NavBar() {
  return (
    <>
      <div class="nav">
        <img src={discover} alt="discover icon"></img>
        <img src={messages} alt="messages icon"></img>
        <img src={add} alt="add icon"></img>
        <img src={likes} alt="likes icon"></img>
        <img src={me} alt="home icon"></img>
      </div>
    </>
  );
}

function Lamp({ setColor }) {
  const toggleColor = () => {
    setColor((prev) => (prev === "#FFE893" ? "white" : "#FFE893"));
  };

  return (
    <>
      <p>click me!</p>
      <img class="lamp" src={lamp} onClick={toggleColor}></img>
    </>
  );
}

export default App;
