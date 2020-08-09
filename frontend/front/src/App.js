import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home'
import LoginPage from './component/login'
import SignupPage from './component/signup'
import Dash from './component/dash'
import Songs from './component/songs'

import { BrowserRouter, Route, Link,Switch,Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">



    <div>
    
<Route path="/login" component={LoginPage} />
<Route path="/Signup" component={SignupPage} />
<Route path='/Dashboard/:id' component={dasboard} />

    </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;





