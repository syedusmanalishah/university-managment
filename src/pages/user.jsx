import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from "../components/Layouts/login.jpg";

const user = () => {
    return (

      <div style={{ backgroundImage: `url(${background})`  ,backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'  , marginbottom:'2%' }}>


        <div  style={{  display:'flex','justifyContent':'center',alignItems:'center' }} >
        <div className='mainlogin'>
        <div  className='login'>
        <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Container>
            
              <Row>
                <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Col>
          
              </Row>
             
        <Row className="mt-3"  >
        <Button style={{width:'40%' , marginLeft:'30%'}} variant="primary" type="submit">
             Login
              </Button>
        </Row>

        <Row  className="mt-3">

<h8>
  if you have not sign up please sign up from here <a href='/https://syedusmanalishah.github.io/React_Registration_Form/'>Sign Up</a>
</h8>

        </Row>
            </Container>
              </Form.Group>
        
            </Form>
            </div>
            </div>
            </div>
            </div>
)
}

export default user