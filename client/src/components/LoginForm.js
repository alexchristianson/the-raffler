import { Button, TextField, Grid, Snackbar } from '@mui/material';


function LoginForm () {
    function handleLogin() {
        return (
            <Snackbar 
                severity='success'
                autoHideDuration={5000}
                message='Login Successful'
            />
        )
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
                />
                <TextField
                    name='password'
                    id='login-password'
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

export default LoginForm;