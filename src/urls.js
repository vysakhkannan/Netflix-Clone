import {API_KEY} from './constants/constants'

export const orginals =  `discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentary = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`