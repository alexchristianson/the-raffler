import { Button, TextField, Grid } from '@mui/material';

function SignUpForm () {
    function handleSignUp() {
        console.log('submitted correct');
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
                    name='email'
                    id='signup-email'
                    label='Email'
                    required
                    autoFocus
                    submitonenter = 'true'
                    autoComplete='email'
                    style={{paddingBottom: 20}}
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
                />
                <TextField
                    name='password'
                    id='signup-password'
                    type='password'
                    label='Password'
                    required
                    submitonenter='true'
                    autoComplete='current-password'
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
                        Have an Account Login
                    </Button>
                </a>
            </form>
        </Grid>
    )
}
export default SignUpForm;