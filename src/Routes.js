import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/portfolio">
        <PortfolioPage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
    </Switch>
  );
};

export default Routes;
