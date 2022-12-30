import axios from "axios";

// const KEY = "AIzaSyAPSbqZA5QbBgsbWFRbMJ23ugX7KqrBX0E";
const KEY = "AIzaSyBEjs0upW5myzGzTiu6x0OxJWRHn4BUdp8";



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        maxResults:5,
        key:KEY
    },
});



