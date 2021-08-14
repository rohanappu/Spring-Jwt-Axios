import { configure } from "@testing-library/react";
import axios from "axios";

class AuthenticationService {
  registerSuccessfullLogin(username){
      console.log('inside Authentication service');
      sessionStorage.setItem('authenticatedUser', username);
      
  }
  logout() {
      sessionStorage.removeItem('authenticatedUser');
  }
  isUserloggedIn() {
      let user = sessionStorage.getItem('authenticatedUser');
      if(user == null){
          return false;
      }
      return true;
  }
  interceptorService(jwt){
      console.log('interceptor');
      if(this.isUserloggedIn){
        axios.interceptors.request.use((config) => {
            config.headers.authorization = jwt;
          return config;
      });
      }
  }
  createJwtToken(token){
      console.log("inside create Token");
        console.log('Bearer ' + token);
		return 'Bearer ' + token;	
  }
  WelcomeService(){
   return axios.get('http://localhost:8080/welcome');
  }
}
export default new AuthenticationService();