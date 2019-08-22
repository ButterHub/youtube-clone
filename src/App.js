import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import youtube from './api/youtube'

import {SearchBar, VideoDetail, VideoList } from './components'
export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

    componentDidMount = () => {
      this.handleSubmit("benbush LSPD")
  }

  handleSubmit = async (searchTerm) => {
    console.log(searchTerm)
    const response = await youtube.get('search', {params: 
      {
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyCnQVbUqOvOST8xNIF-V4eHq5xMxzas60Q"
      }
    })
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }

  render() {
    const { selectedVideo, videos } = this.state

    return (
        <Grid style={{justifyContent:"center"}} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo}></VideoDetail>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}></VideoList>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}

