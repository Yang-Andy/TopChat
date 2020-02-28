import React from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button, Row, Col, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className={"wrapper"}>
      <div className={"header"}>
        Top
      </div>

      <div className={"main"}>
        Middle
      </div>

      <div className={"footer"}>
        Bottom
      </div>

    </div>
  );
}

export default App;
