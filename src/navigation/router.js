import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import {Home, Person} from "../containers"

const RouterApp = () => {
    return(
      <Switch>
          <Route path="/" exact>
              <Home /> 
          </Route>
          <Route path="/:id">
              <Person /> 
          </Route>
      </Switch>
    )
  }

export default RouterApp;