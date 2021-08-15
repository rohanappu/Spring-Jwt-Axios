import React, { Component,useState,useEffect } from 'react'
import AuthenticationService from '../services/AuthenticationService';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HelloWorldService from '../services/HelloWorldService';
import LoginService from '../services/LoginService';
import Button from '@material-ui/core/Button';
import { CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(15, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = (props) =>{
  const classes = useStyles();
 const [username , setUsername] = useState('');
 const [password, setPassword] = useState('');
 const loginClicked = (e) => {
    e.preventDefault();
    console.log("hii");
    LoginService.executeAuthenticate(username, password)
    .then(response=>{
      AuthenticationService.registerSuccessfullLogin(username);
     var token=response.data; 
     console.log(token.jwt);
     sessionStorage.setItem("jwt", token.jwt);
     AuthenticationService.interceptorService(AuthenticationService.createJwtToken(token.jwt));
     props.history.push("/welcome");
    })
    .catch(e=>console.log(e))
    
  }
    return(
      <React.Fragment>
         <Grid container className={classes.root}>
         <CssBaseline />
           <Grid item md={5} item xs={false} sm={4} md={7} className={classes.image}>
            
           </Grid>
         <Grid  item xs={12} sm={8} md={5} component={Paper} elevation={6} square> 
         <div className={classes.paper}>
           <Typography variant="h5">Login</Typography>
          <form noValidate autoComplete="off" className={classes.form} onSubmit={loginClicked}>
          <TextField  margin="normal" name="username" label="Username" required fullWidth value={username} onChange = {(e)=> setUsername(e.target.value)} variant="outlined" />
          <TextField  margin="normal" name="password" type="password" required fullWidth label="password"  value={password} onChange={(e)=> setPassword(e.target.value)} variant="outlined" />
          <Button  className={classes.submit} variant="contained" type="type" color="primary" size="large">Submit</Button>
          </form>  
          </div> 
        </Grid>
     </Grid>
     </React.Fragment>
    )
  
}


export default Login;