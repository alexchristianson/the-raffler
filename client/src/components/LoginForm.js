import { Button, TextField, Grid  } from '@mui/material';
import { useState } from 'react';
import { LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';


export default function LoginForm () {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [login, { error }] = useMutation(LOGIN);
    async function handleLogin(e) {
        e.preventDefault();
        if(username && password) {
            try{
                const mutationResponse = await login({
                    variables: { username: username, password: password}
                });
                const token = mutationResponse.data.login.token;
                Auth.login(token);
            } catch (e) {
                console.log(e, 'you are here');
            }
        }  else {
            alert('Please fill in all sections')
        }
    }
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='space-evenly'
            paddingTop='25px'
        >
            <h1 style={{paddingBottom: 20}}>Login</h1>
                <form 
                noValidate
                onSubmit={handleLogin}
                autoComplete='on'
                style={{display: 'flex', flexDirection: 'column', width: '100%'}}
            >
                <TextField
                    name='username'
                    id='login-username'
                    label='Username'
                    required
                    autoFocus
                    submitonenter = 'true'
                    autoComplete='username'
                    style={{paddingBottom: 20}}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    name='password'
                    id='login-password'
                    type='password'
                    label='Password'
                    required
                    submitonenter='true'
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                    sx={{ mt: 3, fontSize: '1.2em' }}
                >
                    Submit
                </Button>
                <a href='/signup' style={{textDecoration: 'none', paddingTop: 5}}>
                    <Button
                        variant='contained'
                        fullWidth
                        sx={{ mt: 3, fontSize:'1.2em'}}
                    >
                        Create an Account
                    </Button>
                </a>
            </form>
        </Grid>
    )
}