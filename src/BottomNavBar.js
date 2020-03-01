import React from 'react';
import './App.css';
import { Navbar, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function BottomNavBar(props) {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <FormControl
                placeholder="Enter Message"
                className="mr-sm-2"
            />
            <Button variant="secondary">
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </Navbar>
    );
}