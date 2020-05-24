import React from 'react';
import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles(
//     () => ({
//         chip: {
//             margin: 10,
//             padding: 5,
//             fontSize: 14,
//             color: '#FFF',
//             background: index => TAG_COLORS[index % 3],
//             // 需要根據設計組規範的字體，以該字體的 8 個中文字為寬度上限
//             height: 32,
//             maxWidth: 142,
//         },
//     }),
// );

function DemandVideo(props) {
    return (
        <video controls controlsList="nodownload" style={{ maxWidth: '100%', minHeight: 360 }}>
            <source src={`http://127.0.0.1:8080/video/${props.videoSrc}`} type="video/mp4" />
        </video>
    )
}

export default DemandVideo;