import icon1 from "../src/images/icon1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.png";
import icon4 from "../src/images/icon4.png";
import ironhack from "../src/images/ironhack-logo-xs.png";
import menu from "../src/images/menu-top-xs.png";
import background from "../src/images/background.png";

// src/App.js
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={ironhack} class="teeny-watermark" />
        <img src={menu} class="teeny-watermark" />
      </nav>
      <div id="big-boi">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <a href="#" class="button">
          Awesome
        </a>
      </div>
      <div id="icon-row">
        <div class="column">
          <img src={icon1} alt="image not found" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="column">
          <img src={icon2} />
          <h2>Components</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="column">
          <img src={icon3} />
          <h2>Single-way</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="column">
          <img src={icon4} />
          <h2>JSX</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
