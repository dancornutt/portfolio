import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
    return (
        <Jumbotron>
        <h1>{props.title}</h1>
        <img src={props.imagePath}/>
        <p>
            {props.description}
        </p>
        <p>
            <Button href={props.deployedURL} variant="primary">Deployed Link</Button>
            <Button href={props.githubURL} variant="secondary">Public Repo</Button>
        </p>
        </Jumbotron>
    )
}

export default Project