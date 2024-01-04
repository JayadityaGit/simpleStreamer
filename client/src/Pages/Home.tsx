
import { useState } from 'react'
import SearchResults from '../Components/SearchResults'

import { getDetails } from '../Network/apiConnect'

export interface TmdbModelMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface TmdbTV {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export type CombinedMedia = TmdbModelMovie | TmdbTV;

const Home = () => {

    const [inputValue, setInputValue] = useState("")


    const [entData, setEntData] = useState<CombinedMedia[]>([])

   
    async function trigger(){
            

      try {
         
      const response = await getDetails(inputValue)

      setEntData(response)
  
      

      setInputValue("")
      } catch (error) {
        console.error(error)
        alert(error)
      }
  }
   

  return (
    <div>
        
        
        <div className='flex justify-center py-10 '>
        <input className='border-1 border-black p-2 outline-none rounded-l-md'  placeholder='search Movies' type="text" value={inputValue} onKeyDown={(event)=>{

            if(event.key==="Enter"){
            trigger()
            }

        }} onChange={(event)=>{setInputValue(event.target.value)}}/>
       
        <button className='bg-blue-600 text-white w-20 rounded-r-md' onClick={async()=>{
            

            try {
               
            const response = await getDetails(inputValue)

            setEntData(response)
        
            

            setInputValue("")
            } catch (error) {
              console.error(error)
              alert(error)
            }
            
           
        
        
        }}id="button-addon2">
          Search
        </button>
        
        </div>  
        
        <SearchResults data = {entData}/>
        
        </div>
  )
}

export default Home