import './css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from './components/shared/navigation/MainNavigation';

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
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
