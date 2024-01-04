
import { Modal } from 'react-bootstrap'

import dancing from "../assests/ui-shigure-shigure-ui.gif"

import { MovieData } from '../Model/streamModel';
import VideoHls from './VideoHls';



interface CmodalProps{
    show: boolean,
    onHide: ()=>void,
    load: boolean,
    streamMovie?: MovieData
    
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
     
      <div >


       {load === false ? <VideoHls streamData = {streamMovie}/>: <img src={dancing} className='h-52 ' alt='loading'/>} 
        
     
      </div>
    </Modal.Body>
    
  </Modal>
  )
}

export default CModal