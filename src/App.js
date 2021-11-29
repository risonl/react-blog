import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pgs/Home'
import Authors from './pgs/Authors'
import Contact from './pgs/Contact'
import Article from './pgs/Article'
import {Route , Switch} from "react-router-dom"
import { CongressObj } from "./assets/Headlines";



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
      </Switch>
    </>
  );
}

export default App;

