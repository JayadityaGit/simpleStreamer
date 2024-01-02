
import { Modal } from 'react-bootstrap'

import dancing from "../assests/ui-shigure-shigure-ui.gif"
import VideoMp4 from './VideoMp4';
import { MovieData } from '../Model/streamModel';



interface CmodalProps{
    show: boolean,
    onHide: ()=>void,
    load: boolean,
    streamMovie: MovieData
    
}

const CModal = (props : CmodalProps ) => {
    const { show, onHide, load, streamMovie } = props;
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Show Time
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
     
      <div>
      {load === false ? <VideoMp4 streamData={streamMovie}/> : <img src={dancing} alt='loading'/>}
      </div>
    </Modal.Body>
    
  </Modal>
  )
}

export default CModal