import LoginForm from "../components/LoginForm";
import {Grid, Button} from '@mui/material';

function Login () {
    return (
        <Grid
            container
            direction='column'
            sx={{ height: '100vh', p: 2, minHeight: 650}}
            alignItems='center'
        >
            <Grid
                container
                component='main'
                sx={{ flexGrow: 1, maxWidth: 1400 / 3.5}}
                direction='column'
                alignItems='center'
                justifyContent='space-between'
            >
                <LoginForm/>
                <Button sx={{ mt: 2, fontSize: '1.1em'}} fullWidth varient='outlined'>
                    <a href="/signup">Create an Account</a>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login;