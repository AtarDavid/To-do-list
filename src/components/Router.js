import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Help from "./Help";
import NotFound from "./NotFound";
import Home from "./Home";

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} addToDo={this.props.addToDo} items={this.props.items} />} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}
