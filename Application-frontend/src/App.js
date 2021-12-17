
import './App.css'
import {
   Router,
  Switch,
  Route
} from "react-router-dom";
import DetailsCompoent from './components/DetailsCompoent';
import ArticleCompoent from './components/ArticleCompoent';
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import { history } from "./utilis";
import { currentUserSubject } from "./services";


function App() {
  if (localStorage.getItem('user')) {
    currentUserSubject.next(JSON.parse(localStorage.getItem('user')))
  }

  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegistrationScreen}/>
          <Route exact path="/forgot-passe" component={ForgotPassScreen}/>

          <Route exact path="/:id" component={DetailsCompoent}/>
          <Route exact path="/" component={ArticleCompoent}/>
        </Switch>
    </Router>
  );
}

export default App;
