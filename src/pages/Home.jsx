import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../components/Elements/Hero'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
  
    <Container>
            <Row>
       <Col lg={4} xs={12}> 
       <Hero Title="teacher"/> 
       </Col>


        
       <Col lg={4} xs={12}> 

<Hero Title="Result"

/>
   </Col>
    
    
   <Col lg={4} xs={12}> 

<Hero Title="Past Papers" />
   </Col>

   
   <Col lg={4} xs={12}> 

<Hero Title="Notice" />
   </Col>

      
   <Col lg={4} xs={12}> 

<Hero Title="Events" />
   </Col>

      
   <Col lg={4} xs={12}> 

<Hero Title="Time table" />
   </Col>

   



     
       
       </Row>
    </Container>
   
  )
}

export default Home