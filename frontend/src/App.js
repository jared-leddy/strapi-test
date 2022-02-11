import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// page & layout imports
import HomePage from "./pages/Home";
import ReviewDetailsPage from "./pages/ReviewDetails";
import CategoryPage from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

export default function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/details/:id">
            <ReviewDetailsPage />
          </Route>
          <Route path="/category/:id">
            <CategoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
