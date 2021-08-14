import axios from "axios";

class HelloWorldService{
    excuteHelloWorld(){
        console.log("bye");
        return axios.get('http://localhost:8080/hello');
    }
}
export  default  new HelloWorldService();