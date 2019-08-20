import axios from 'axios'

export default axios.create({
    baseURI: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyB_ZSNwCpDz3PDJp-obTFdbswsEItIuwL0'
    }
})