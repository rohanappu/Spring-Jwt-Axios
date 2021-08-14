import React,{useEffect, useState} from 'react'
import AuthenticationService from '../services/AuthenticationService';
import WelcomeService from '../services/WelcomeService';

const Welcome = () =>{
    const [name, setName] = useState('');
    useEffect(() => {
       var token = sessionStorage.getItem('jwt');
       AuthenticationService.interceptorService(AuthenticationService.createJwtToken(token));
       WelcomeService.welcomeService().then(response=>{
        setName(response.data);
        console.log('token',token);
       console.log("inside welcome");
      
      } )
      .catch(e=>console.log(e))

      });

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}
export default Welcome;