import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/portfolio">
        <PortfolioPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>{" "}
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
