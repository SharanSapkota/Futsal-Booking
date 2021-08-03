import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Arena from "./Pages/Arena/Arena";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/arena" component={Arena} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
