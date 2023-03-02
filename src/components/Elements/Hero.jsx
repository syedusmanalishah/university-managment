import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from "../Layouts/Logo.png"
import './hero.css';



const Hero = (props) =>{

return(

  <>


  


<Card className='teacher'   style={{ width: '18rem' }}  >
    
      <Card.Body>
      <button id='btn'  >
        <img id='img' src={Logo} alt="" />
      </button>
      
      </Card.Body>
      <Card.Title style={{display:'flex' ,justifyContent:"center"} }>{props.Title}</Card.Title>
    </Card>


    
  


</>

)

}
export default Hero
