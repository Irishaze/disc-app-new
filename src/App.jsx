import "./App.css";
import meovvLogo from "./icon.png";
import discover from "./assets/discover.png";
import add from "./assets/add.png";
import likes from "./assets/likes.png";
import messages from "./assets/messages.png";
import me from "./assets/me.png";
import lamp from "./assets/lamp.png";

function App() {
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
          <button class="item account">Create Account</button>
          <button class="item signin">SSO Sign In</button>
          <h3 class="item">
            <span>Trouble signing in?</span>
          </h3>
          <footer class="item">
            By signing up, you agree to our <span>Terms</span>. Learn
            <br /> how we use your data in our <span>Privacy Policy.</span>
          </footer>
        </div>
        <NavBar></NavBar>
        <Lamp></Lamp>
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

function Lamp() {
  return (
    <>
      <p>click me!</p>
      <img class="lamp" src={lamp}></img>
    </>
  );
}

export default App;
