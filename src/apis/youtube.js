import axios from 'axios';

const KEY = 'AIzaSyD3IV-T05atRVRtXAvfeIF0pC7sknxvnq0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
