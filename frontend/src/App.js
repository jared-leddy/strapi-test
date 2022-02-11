import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// page & layout imports
import HomePage from "./pages/Home";
import ReviewDetailsPage from "./pages/ReviewDetails";
import CategoryPage from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
