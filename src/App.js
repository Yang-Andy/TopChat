import React from 'react';
import './App.css';
import { Navbar, FormControl, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className={"wrapper"}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
          <FontAwesomeIcon icon={faComments} color="#00d8ff" />
          {" "}
          TopChat
          </Navbar.Brand>
      </Navbar>

      <div className={"main"}>
        <div className={"main2"}>

          <Card style={{ flexGrow: 1, marginBottom: "50px" }}>
            <Card.Header>Online Users</Card.Header>
            <Card.Body style={{ flexGrow: 1, overflow: "auto", height: "90vh" }}>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>










          <Card style={{ width: 300 }}>
            <Card.Header>Online Users</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>

      </div>

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
