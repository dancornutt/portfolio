import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
    return (
        <Jumbotron>
        <h1>Project Title</h1>
        <p>
            This is a simple a simple description on the project
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>
    )
}

export default Project