


  
  
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { MovieData } from '../Model/streamModel';

interface hlsStream{
  streamData? : MovieData
}


const VideoHls = ({streamData}: hlsStream) => {
  return (
  
  
<MediaPlayer title="enjoy" src={streamData?.stream.playlist}>
  <MediaProvider />
  <DefaultVideoLayout icons={defaultLayoutIcons} />
</MediaPlayer>


  )
}

export default VideoHls