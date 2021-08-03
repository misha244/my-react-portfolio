import { Switch, Route } from "react-router-dom";

import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/portfolio">
        <PortfolioPage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/">
        <AboutPage />
      </Route>
    </Switch>
  );
};

export default Routes;
