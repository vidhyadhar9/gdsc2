import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Vcards(props) {
  let navigation = useNavigate()


  return (
    <Card style={{ width: '25rem', marginBottom:'1rem',borderRadius:'5%' }} className='Vc'>
      <Card.Img variant="top" src={props.x.image} width='200px' height='300px'/>
      <Card.Body>
        <Card.Title>{props.x.title}</Card.Title>
        <Card.Text>
          {props.x.info}
        </Card.Text>
        
     
           <Button variant="primary" >Read More
             </Button>
         
       
      </Card.Body>
    </Card>
  );
}

export default Vcards;