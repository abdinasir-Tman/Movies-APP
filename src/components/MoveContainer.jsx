import React, { useEffect, useState } from 'react'
import Movie from './Movie'

function MoveContainer() {
    const [movies, setMovies]  = useState([])
    const [checkDate , setCheckDate] = useState(false)



    useEffect(()=>{
        const api_key  = "5a720d777c64c5443dbf53bf7435cc54"
       const fetchData = async()=>{
           const request =   await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`)
           const {results} =   await request.json()
           setMovies(results)

           setCheckDate(true)
        

           


       }

       fetchData()
      
       
        

      
    
    },[])

    // console.log(movies)
  
    if(!checkDate){
        return <h1>Data is Loading....</h1>
    }else{


        return (

     

            <div>
               
               <h4 className="text-white mt-6">The Latest Movies</h4>

              {movies.map((mov) =>{
                return <div className="gird grid-cols-3 gap-3">
                      <Movie props={mov}/>
                </div>
              })}
              
            </div>
          )
        }
    

  
}

export default MoveContainer