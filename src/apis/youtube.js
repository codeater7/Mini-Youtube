import axios from 'axios';

const KEY = "AIzaSyCwRFYs61bVoJN0f9_yya679Ansy70rgzI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:`${KEY}`

    }
})

