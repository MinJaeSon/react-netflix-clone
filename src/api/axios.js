import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,    //b4f623519c5cf0b9043a264a74f2cb06
        language: "ko-KR",
    },
});

export default instance;
