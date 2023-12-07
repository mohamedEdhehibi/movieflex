import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function Movie(p) {
    const { title, description, posterURL, rating } = p;
    
    return (
        <Card style={{ width: '18rem', marginRight: 30 }}>
            <Card.Img variant="top" src={posterURL} />
            <Card.Body>
                <Card.Title>Movie Title: {title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Rating: {rating} </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Movie;