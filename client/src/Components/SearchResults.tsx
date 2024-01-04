

import {  Button, Card } from 'react-bootstrap'
import { getStreamsMovie, getStreamsTV } from '../Network/apiConnect'
import { CombinedMedia, TmdbModelMovie, TmdbTV } from '../Pages/Home'
import { useState } from 'react'
import CModal from './CModal'
import { MovieData } from '../Model/streamModel'


interface searResultProps{
  data: CombinedMedia[]
}



const SearchResults = ({data}: searResultProps) => {

  const [modalState, setModalState] = useState(false)

  const [movieStream, setMovieStream] = useState<MovieData>({
    stream: {
      id: "",
      captions: [],
      qualities: {
        360: { type: "", url: "" },
        720: { type: "", url: "" },
        1080: { type: "", url: "" },
        '4k': { type: "", url: "" },
      },
      type: "",
      flags: [],
    },
  })


  const [loading, setLoading] = useState(false)

  return (
    <div className='grid grid-cols-1 place-items-center px-6 space-y-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7'>
      
      
      <CModal 
        show={modalState}
        onHide={() => setModalState(false)}
        load = {loading}
        streamMovie = {movieStream}
        
        />
      
      {
      
      data.map((data)=>{

        return (
          <Card key={data.id}>
          <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+data.poster_path} />
          <Card.Body >
            <Button onClick={async()=>{

              try {

                
                 
                if(data.media_type === "movie"){
                  setModalState(true);

                  setLoading(true)

                  const response : MovieData = await getStreamsMovie(data as TmdbModelMovie);
  
                  
                  if(response.stream.type === "hls"){
                    throw Error("I will implement my own video player soon this is in hls format, wait for version 2 thx !!!")
                  }

                 
                  

                  setMovieStream(response)

                  

                  setLoading(false)

                  
                }else{
                  const response = await getStreamsTV(data as TmdbTV);
  
                  console.log(response)
                 
                }
              } catch (error) {
                console.error(error)

                alert(error)
              }

              
          

            }}>Watch {data.media_type} </Button>
          </Card.Body>
        </Card>
        )
      })
      
      }</div>
  )
}

export default SearchResults