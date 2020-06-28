import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    CssBaseline,
    Button,
    Typography,
    Grid,
    makeStyles,
} from '@material-ui/core';

const GREEN_LIGHT = '#48A9A6';
const RED_LIGHT = '#C1666B';

const useStyles = makeStyles(
    () => ({
        lightSign: lightState => ({
            width: '20vw',
            height: '18vw',
            marginTop: '5vh',
            background:  lightState ? GREEN_LIGHT : RED_LIGHT,
            border: '2px solid #E4DFDA',
            borderRadius: '100%',
        }),
    }),
);

function AuthSwitch() {
    const lightState = useSelector(state => state.lightState);
    const classes = useStyles(lightState);

    const dispatch = useDispatch();

    const lightSign = () => {
        return (
            <div className={classes.lightSign} />
        )
    };

    const lightSwitch = () => {
        function changeStatus(e) {
            e.preventDefault();
            dispatch({
                type: 'SWITCH_LIGHT'
            });
        }

        return (
            <Button variant="contained" color="primary" size="large" onClick={changeStatus}>
                Switch
            </Button>
        )
    };

    console.log('Render AuthSwitch')
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} color="primary">
                        <Typography variant="h6" noWrap>
                            # AuthSwitch Demo
                        </Typography>
                        <Typography variant="h6" noWrap>
                             {lightState ? <p>Status: True</p> : <p>Status: False</p>}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    align="center"
                    spacing={6}
                >
                    <Grid item xs={12}>
                        {lightSign()}
                    </Grid >
                    <Grid item xs={12}>
                        {lightSwitch()}
                    </Grid >
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AuthSwitch;