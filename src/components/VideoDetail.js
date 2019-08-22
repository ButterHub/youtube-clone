import React from 'react'
import {Paper, Typography} from '@material-ui/core'


export default function VideoDetail({ video }) {
    if (!video) return <div>Loading...</div>

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    
    return (
        <div>
            <React.Fragment>
                <Paper elevation={6} style={{height:'70%'}}>
                    <iframe frameBorder="0" height="100%" width="100%" title="Ben's playa!" src={videoSrc}></iframe>
                </Paper>
                <Typography>{video.snippet.title}</Typography>
                <Paper style={{padding:'15px'}}>

                </Paper>
            </React.Fragment>

        </div>
    )
}
