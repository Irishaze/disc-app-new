import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <img src="./Vector.png" />
        <h1 class="item">Meovv</h1>
        <h2 class="item">
          Find Your
          <br /> People Here
          <br /> at Northwestern
        </h2>
        <button class="item account">Create Account</button>
        <br />
        <button class="item signin">SSO Sign In</button>
        <h3 class="item">Trouble signing in?</h3>
        <footer class="item">
          By signing up, you agree to our <span>Terms</span>. Learn
          <br /> how we use your data in our <span>Privacy Policy.</span>
        </footer>
      </div>
    </>
  );
}

export default App;
