import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Help from "./Help";
import NotFound from "./NotFound";
import ToDoList from "./ToDoList";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ToDoList} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;