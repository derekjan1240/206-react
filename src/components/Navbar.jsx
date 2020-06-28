import React from 'react';
import { useHistory } from "react-router-dom";
import { 
    makeStyles,
    Grid,
    Button,
} from '@material-ui/core';

const SITE_ICON = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn2wyQqnGuNSOGOJJavVTLF6KNF4yM40ahl4N4kzRmx0J_iTAC&usqp=CAU';

const useStyles = makeStyles({
    imageWarp: {
        textAlign: "center",
    },
    image: {
        width: "5%",
        borderRadius: "50%",
        marginTop: 30,
    },
});

function Navbar() {
    console.log('Render Navbar')
    const history = useHistory();
    const classes = useStyles();

    function handleClick(page) {
        history.push(page);
    }

    return (
        <>
        <Grid
            container
            alignItems="center"
            justify="center"
            spacing={2}>
            <Grid item xs={12} className={classes.imageWarp}>
                <img src={SITE_ICON} alt="QQ" className={classes.image}/>
            </Grid>
            <Grid item>
                <Button color="primary" onClick={ () => handleClick('/')}>Home</Button>
            </Grid>
            <Grid item>
                <Button color="primary" onClick={ () => handleClick('/AuthSwitch')}>AuthSwitch</Button>
            </Grid>
            <Grid item>
                <Button color="primary" onClick={ () => handleClick('/Characters')}>Characters</Button>
            </Grid>
        </Grid>
        </>
    )
}

export default Navbar;