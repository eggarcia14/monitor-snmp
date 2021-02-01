import Dashboard from "./Views/Dashboard";
import Login from "./Views/LogIn";
import { Switch, Route, Router } from "react-router-dom";
import { createHashHistory } from "history";

const historial = createHashHistory();
const App = (props) => {
  return (
    <div>
      <Router history={historial}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
