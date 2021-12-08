import { Route, Switch } from "react-router";
import Footer from "./components/Footer";

import NavbarApp from "./components/Navbar-section";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import Politks from "./pages/Politks";

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <header className="App-header">
          <NavbarApp />
        </header>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/politika" exact>
                <Politks />
              </Route>
              <Route path="/obshestvo" exact>
                 <Contact/>
              </Route>
              <Route path="/news" exact>
                 <NewsPage/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
