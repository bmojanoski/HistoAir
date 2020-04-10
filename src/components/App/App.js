import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Home from "../Home/Home";
import Airports from "../Airports";
class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const routing = (
            <Router>
                <Route path={"/"} exact render={() =>
                    <Home/>}>
                </Route>
                <Route path={"/airports"} exact render={() =>
                    <Airports/>}>
                </Route>
                <Redirect to="/"/>
            </Router>
        );
        return (
        <div className="App">
            {routing}
        </div>
        )
    }
}

export default App;
