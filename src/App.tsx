import React from "react";
import Redux from './redux'
import Mobx from './mobx'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Local from "./Local";

const App: React.FC = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/redux">Redux</Link>
                    </li>
                    <li>
                        <Link to="/mobx">Mobx</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/redux">
                    <Redux/>
                </Route>
                <Route path="/mobx">
                    <Mobx/>
                </Route>
                <Route path="/">
                    <Local/>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;
