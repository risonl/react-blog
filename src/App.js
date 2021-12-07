import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pgs/Home'
import Authors from './pgs/Authors'
import Contact from './pgs/Contact'
import Article from './pgs/Article'
import {Route , Switch} from "react-router-dom"
import { CongressObj, GossObj, WarObj, GovernanceObj } from "./assets/Headlines";



function App() {
  return (
    <>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/authors">
        <Authors />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/article/independence">
        <Article {...CongressObj}/>
      </Route>
      <Route path ="/article/war">
        <Article {...WarObj} />
      </Route>
      <Route path="/article/goss">
        <Article {...GossObj} />
      </Route>
      <Route path="/article/Governance">
        <Article {...GovernanceObj} />
      </Route>
      </Switch>
    </>
  );
}

export default App;

