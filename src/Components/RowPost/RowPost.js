import React from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {useEffect, useState} from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'


function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [urlId, setUrl] = useState('')



    useEffect(() => {
        

        axios.get(props.url).then((response)=>{

            console.log(response.data.results)
            setMovies(response.data.results)

            return ()=>{
                console.log('hiiiii')
            }


        }
        ).catch(err=>{
            alert('network error')
        })

    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{

        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
            console.log(response.data)
            if (response.data.results.length !== 0){
                setUrl(response.data.results[0])
            }
            else{
                console.log('array empty')
            }
        })

      }

    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((obj) =>

                    <img onClick={() =>{handleMovie(obj.id)}} className={props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />

                )

                }
                
            </div>
            { urlId && <Youtube videoId={urlId.key} opts = {opts}/> }


            
        </div>
    )
}

export default RowPost
