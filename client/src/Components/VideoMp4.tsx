import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MovieData } from '../Model/streamModel'

interface VideoMp4Props{
  streamData: MovieData
}

const VideoMp4 = ({streamData}: VideoMp4Props) => {

  
  

  
  return (

    

    <div>   
      <MediaPlayer title="enjoy!!!" src={streamData.stream.qualities[720].url}>
        <MediaProvider />

        
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
      
      </div>
  )
}

export default VideoMp4