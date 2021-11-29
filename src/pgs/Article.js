import {Container, Row, Col, Card} from 'react-bootstrap'
import Navigation from '../comps/Navigation'

function Article (props) {
    return (<>
        <Navigation />
        <Container>
            <Row>
            <Col sm={4}>
                <Card>
                    <h1>{props.head}</h1>
                    <h3>{props.tag}</h3>
                    <h5>{props.byline} : {props.date}</h5>
                    <p>{props.blurb}</p>
                </Card>
            </Col>
            <Col sm={8}>
                <Card>
                    <Card.Img src={props.leadImage} alt=''/>
                </Card>
            </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <Card>
                        <p>{props.leadStory.p1}</p>
                        <h3>{props.leadStory.h1}</h3>
                        <p>{props.leadStory.p2}</p>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <div className='clickbait'><h3>CLICK FOR MORE</h3></div>
                        <Card.Img src= {props.subImg1} />
                        <Card.Title>{props.subText1}</Card.Title>
                    </Card>
                    <Card>
                        <div className='clickbait'><h3>CLICK FOR MORE</h3></div>
                        <Card.Img src= {props.subImg2} />
                        <Card.Title>{props.subText2}</Card.Title>
                    </Card>
                    <Card>
                        <div className='clickbait'><h3>CLICK FOR MORE</h3></div>
                        <Card.Img src= {props.subImg3} />
                        <Card.Title>{props.subText3}</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>

    </>)
}
export default Article