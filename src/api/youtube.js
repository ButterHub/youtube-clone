import axios from 'axios'

export default axios.create({
    baseURI: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.YOUTUBE_API_KEY
    }
})
