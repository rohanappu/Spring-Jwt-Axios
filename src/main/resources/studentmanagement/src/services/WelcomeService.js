import axios from "axios";
class WelcomeService{
    welcomeService(){
        return axios.get('http://localhost:8080/welcome');
       }
}
export default new WelcomeService();