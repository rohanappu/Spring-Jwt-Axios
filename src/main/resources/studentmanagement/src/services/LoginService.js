import axios from "axios";
class LoginService{
    executeAuthenticate(username,password){
        console.log("In");
        return axios.post('http://localhost:8080/authenticate',{username,password}
        ,{headers:{'Content-Type':undefined}});

    }


}
export default new LoginService();