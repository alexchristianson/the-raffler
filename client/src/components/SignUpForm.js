import { Button, TextField, Grid } from '@mui/material';
import { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

function SignUpForm () {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail ] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [addUser] = useMutation(ADD_USER);

    async function handleSignUp(e) {
        e.preventDefault();
        if(firstName && lastName && email && password && username) {
            console.log('all good')
        } else {
            const mutationResponse = await addUser({
                variables:{
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    username: username,
                    password: password
                }
            })
            const toekn = mutationResponse.data.addUser.token;
            Auth.login(toekn);
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
            <h1 style={{paddingBottom: 20}}>Create an Account</h1>
                <form 
                noValidate
                onSubmit={handleSignUp}
                autoComplete='on'
                style={{display: 'flex', flexDirection: 'column', width: '100%'}}
            >
                
                
                <TextField
                    name='first-name'
                    id='signup-firstname'
                    label='First Name'
                    required
                    autoFocus
                    submitonenter = 'true'
                    autoComplete='first-name'
                    style={{paddingBottom: 20}}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    name='last-name'
                    id='signup-lastname'
                    label='Last Name'
                    required
                    autoFocus
                    submitonenter = 'true'
                    autoComplete='family-name'
                    style={{paddingBottom: 20}}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    name='email'
                    id='signup-email'
                    label='Email'
                    required
                    autoFocus
                    submitonenter = 'true'
                    autoComplete='email'
                    style={{paddingBottom: 20}}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    name='username'
                    id='signin-username'
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
                    id='signup-password'
                    type='password'
                    label='Password'
                    required
                    submitonenter='true'
                    autoComplete='new-password'
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
                <a href='/login' style={{textDecoration: 'none', paddingTop: 5}}>
                    <Button
                        variant='contained'
                        fullWidth
                        sx={{ mt: 3, fontSize:'1.2em'}}
                    >
                        Have an Account? Login
                    </Button>
                </a>
            </form>
        </Grid>
    )
}
export default SignUpForm;