import React from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button, Row, Col, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
          <FontAwesomeIcon icon={faComments} color="#00d8ff" />
          {" "}
          TopChat
          </Navbar.Brand>
      </Navbar>


      <Container>

        <Row>

          <Col>
            <Card>
              <Card.Header>You are user1.</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs lg="3">
            <Card>
              <Card.Header>Online Users</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>















      <Navbar fixed="bottom" bg="dark" variant="dark">
        <FormControl
          placeholder="Enter Message"
          className="mr-sm-2"
        />
        <Button variant="secondary">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </Navbar>
    </div>
  );
}

export default App;
