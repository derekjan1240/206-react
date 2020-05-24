import React from 'react';
import DemandVideo from './DemandVideo';
import {
    Container,
    CssBaseline,
    Typography,
    Grid
} from '@material-ui/core';

function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} color="primary">
                        <Typography variant="h6" noWrap>
                            Intro ...
                        </Typography>
                    </Grid >
                    <Grid item xs={12} md={6}>
                        <DemandVideo videoSrc='NyanCat'></DemandVideo>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <DemandVideo videoSrc='NyanDog'></DemandVideo>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Home;