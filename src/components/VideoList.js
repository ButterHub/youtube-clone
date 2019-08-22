import React from 'react'

import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}></VideoItem>)
    console.log(listOfVideos)
    return (
        <Grid item xs={12}>
            {listOfVideos}
        </Grid>
    )
    // how is a fragment or enclosing jsx element not needed?
}

export default VideoList
