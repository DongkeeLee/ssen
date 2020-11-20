import {  Row } from 'antd';
import React from "react";
import {ArrowUpOutlined} from '@ant-design/icons';
import {BrowserRouter, NavLink} from "react-router-dom";
import One from "./pages/One";
import {Route} from "react-router";
import Two from "./pages/Two";
import Three from "./pages/Three";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li><NavLink to="/one" >One</NavLink></li>
          <li><NavLink to="/two" >Two</NavLink></li>
          <li><NavLink to="/three" >Three</NavLink></li>
        </ul>
        <Route exact path="/" component={One}/>
        <Route path="/one" component={One}/>
        <Route path="/two" component={Two}/>
        <Route path="/three" component={Three}/>
      </BrowserRouter>
    </>
  );
}

export default App;
