import { Button, Box, TextField } from '@mui/material';

function LoginForm () {
    function submitLogin() {
        return 'hello world'
    }
    return (
        <Box
            component="form"
            Autocomplete="off"
        >
            <div>
                <TextField
                    label='username'
                    id='outlined-size-small'
                    size='small'
                />
            </div>
            <div>
                <TextField
                    label='password'
                    id='outlined-size-small'
                    size='small'/>
            </div>
            <div>
                <Button onClick={submitLogin}>Submit</Button>
            </div>
        </Box>
    )
}

export default LoginForm;