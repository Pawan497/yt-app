import axios from "axios";

const KEY = "AIzaSyC9JEMugWNVoEYLeihk84czlBJF4SCGi9M";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});