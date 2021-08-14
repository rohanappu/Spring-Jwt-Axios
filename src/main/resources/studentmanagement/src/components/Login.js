import React, { Component,useState,useEffect } from 'react'
import AuthenticationService from '../services/AuthenticationService';
import HelloWorldService from '../services/HelloWorldService';
import LoginService from '../services/LoginService';
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
     this.handleChange = this.handleChange.bind(this);
     this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  loginClicked(){
    console.log("hii");
    LoginService.executeAuthenticate(this.state.username,this.state.password)
    .then(response=>{
      AuthenticationService.registerSuccessfullLogin(this.state.username);
      var token=response.data;
      
     console.log(token.jwt);
     sessionStorage.setItem("jwt", token.jwt);
     AuthenticationService.interceptorService(AuthenticationService.createJwtToken(token.jwt));
     this.props.history.push("/welcome");
    })
    .catch(e=>console.log(e))
    
  }
  render(){
    return(
      <div>
      Username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
      Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
     <button onClick={this.loginClicked} >Submit</button>
    </div>
    )
  }
}


export default Login;