import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Login from "./pages/Login";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
            /*O exact é para indicar que o que vai apos a / já é outra rota*/
                <Route path="/" exact component={Login}/> /
                <Route path="/books" component={Books}/>
                <Route path="/book/new" component={NewBook}/>
            </Switch>
        </BrowserRouter>
    );
}