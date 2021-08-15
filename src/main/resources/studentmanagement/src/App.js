import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Student from './components/student/Student';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Error from './components/student/Error';
function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar/>
    
   
      <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/welcome" exact component={Welcome} />
      <Route path="/student" exact component={Student} />
      <Route component={Error} />
      </Switch>
       
    </Router>
    </React.Fragment>
  );
}

export default App;
