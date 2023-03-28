import React from 'react'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './Hcards.css'

function Hcards(props) {
  return (
    <div className=' mt-3 mb-4'>
        <MDBCard style={{ maxHeight:'350px'}} className='p-3'>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src={props.x.image} alt='...' width="300px"  height="300px"/>
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle><h1>{props.x.title}</h1></MDBCardTitle>
          <MDBCardText>
            {props.x.info}
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
    </div>
   

  )
}

export default Hcards