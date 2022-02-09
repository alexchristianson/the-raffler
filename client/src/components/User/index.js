import React from 'react';
function User() {
    
    return (<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {  && ( (item) => (
            <Grid item xs={3}>
                <CardStock data = {}/>
            </Grid>
        ))}
    </Grid>)
}

export default User;