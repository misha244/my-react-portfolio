import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

import NavigationBar from "./components/NavigationBar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
