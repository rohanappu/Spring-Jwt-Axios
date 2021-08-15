import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Student from './student/Student';

const Home =()=>{
    return(
        <section>
          
          <Router>
            <Route path="/login" component={Login} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/student" component={Student} />
          </Router>
</section>
    )
}
export default Home;