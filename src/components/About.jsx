import React from 'react';
import {
    Container,
    CssBaseline,
    Typography,
    Grid
} from '@material-ui/core';

function About () {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} color="primary">
                        <Typography variant="h3" noWrap>
                            About
                        </Typography>
                    </Grid >
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default About;