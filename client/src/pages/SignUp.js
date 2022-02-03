import SignUpForm from "../components/SignUpForm";
import {Grid} from '@mui/material';

function SignUp () {
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
                <SignUpForm/>
            </Grid>
        </Grid>
    )
}

export default SignUp;