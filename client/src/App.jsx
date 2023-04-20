import './css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from './components/shared/navigation/MainNavigation';
import Accueil from './components/staticPages/Accueil';


function App() {
  return (
    <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/listeProf" exact>
        </Route>
        <Route path="/listeCours" exact>
        </Route>
        <route path="">
        <Accueil/>
        </route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
