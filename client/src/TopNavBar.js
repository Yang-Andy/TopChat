import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function TopNavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >
                <FontAwesomeIcon icon={faComments} color="#00d8ff" />
                {" "}
                TopChat
          </Navbar.Brand>
        </Navbar>
    )
}