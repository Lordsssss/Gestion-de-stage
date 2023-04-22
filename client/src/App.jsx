import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Accueil from "./components/staticPages/Accueil";
import FAQ from "./components/staticPages/FAQ";
import EspaceEmployeur from "./components/staticPages/EspaceEmployeur";
import EspaceEtudiant from "./components/staticPages/EspaceEtudiant";
import ProfilStagiaires from "./components/staticPages/ProfilStagiaires";
import PrivateRoute from "./components/shared/privateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <PrivateRoute role="Boss" />
      <main>
        <Switch>
          <Route path="/FAQ" exact>
            <FAQ />
          </Route>
          <Route path="/EspaceEmployeur">
            <EspaceEmployeur />
          </Route>
          <Route path="/EspaceEtudiant">
            <EspaceEtudiant />
          </Route>
          <Route path="/ProfilStagiaires">
            <ProfilStagiaires />
          </Route>
          <route path="">
            <Accueil />
          </route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
