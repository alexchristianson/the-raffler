import { Button, TextField, Grid } from '@mui/material';


function LoginForm () {
    function handleSignIn() {
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
                <form 
                noValidate
                onSubmit={handleSignIn}
                autoComplete='on'
                style={{display: 'flex', flexDirection: 'column', width: '100%'}}
            >
                <TextField
                    name='username'
                    id='signin-username'
                    label='Username'
                    required
                    autoFocus
                    submitonenter = 'true'
                    autoComplete='username'
                />
                <TextField
                    name='password'
                    id='signin-password'
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
            </form>
        </Grid>
    )
}

export default LoginForm;