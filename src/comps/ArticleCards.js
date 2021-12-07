import {Card, Container, Row, Col} from 'react-bootstrap'

// import React, { useState } from 'react';

const containerStyle = {
    position: 'relative',
    marginTop: '0px',
    top: '-150px',
}


function ArticleCardWithClickbait (props) {
    return (
        <>
        <Container fluid="md" style={containerStyle}>
        <Row>
        <Card fluid="md">
            <a 
            href={props.href}>
            <Card.Img className="fluid" src={props.leadImage} />
            <div className="carousel-caption up2">
            <h3 className = "text-left">
                {props.head}
            </h3>
            <p className="text-left">
                {props.tag}
            </p>
            </div>
            <div
            className="clickbait"
            >
                <h3>CLICK HERE FOR DETAILS</h3>
            </div>
            </a>
        </Card>
        </Row>
        <Row>
            <Col>
            <Card>
                <Card.Img className="fluid" variant="top" src={props.subImg1} />
                <p>{props.subText1}</p>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className="fluid" variant="top" src={props.subImg2} />
                <p>{props.subText2}</p>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img className='fluid' variant='top' src={props.subImg3} />
                <p>{props.subText3}</p>
            </Card>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default ArticleCardWithClickbait