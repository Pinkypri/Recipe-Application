import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Home from "./Components/Home"
import Result from './Components/Result';


const App = () => {
  return (
   <Router>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/recipe" exact component={Result}/>
     </Switch>
   </Router>
  )
}

export default App
