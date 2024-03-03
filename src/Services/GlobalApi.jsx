import axios from "axios";

const BaseURL="https://api.themoviedb.org/3";

const API_key="58055235c75bd328c112dd6e61451ada";

const movieByGenreURL='https://api.themoviedb.org/3/discover/movie?api_key=58055235c75bd328c112dd6e61451ada';

const getTrendingVideos=axios.get(BaseURL+"/trending/all/day?api_key="+API_key);
const getMovieByGenreId=(id)=>{
    return axios.get(movieByGenreURL + "&with_genres=" +id)
}
export default {getTrendingVideos,getMovieByGenreId};