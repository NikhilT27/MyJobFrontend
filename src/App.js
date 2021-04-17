import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Introduction from "./components/Introduction";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <Login />
          </Route>
          <Route path="/">
            <Introduction />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
