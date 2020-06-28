import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
    () => ({
        video: {
            maxWidth: '100%',
            minHeight: 360,
        },
    }),
);

function DemandVideo(props) {
    const classes = useStyles();
    return (
        <>
        <h1>#{props.videoSrc}</h1>
        <video controls controlsList="nodownload" className={classes.video}>
            <source src={`http://127.0.0.1:8080/video/${props.videoSrc}`} type="video/mp4" />
        </video>
        </>
    )
}

export default DemandVideo;