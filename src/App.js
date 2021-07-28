import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Home from "./Components/Home"
import Products from './Components/Products/Products';
import Information from "./Components/Information/Information";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Store/reducers/user';
const store=createStore(reducer)
const App = () => {
  return (
    <Provider store={store}>
   <Router>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/products" exact component={Products}/>
       <Route path="/products/information" exact component={Information}/>
     </Switch>
   </Router>
   </Provider>
  )
}

export default App
