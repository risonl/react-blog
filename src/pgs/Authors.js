import Navigation from '../comps/Navigation'
import {Container, Row, Col, Card} from 'react-bootstrap'
import Me from '../assets/me.jpg'
import Wikipedia from '../assets/wikipedia.jpg'
function Authors () {
    return (
        <>
        <Navigation />
        <Container>
            <Row>
                <h1>Meet the Authors</h1>
            </Row>
            <Row>
                <Col>
                <Card>
                    <Card.Title><h1>Rison Lain</h1></Card.Title>
                    <Card.Img src={Me}/>
                    <Card.Text>Rison Lain made this website. They're pretty cool.</Card.Text>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Title><h1>Wikipedia</h1></Card.Title>
                    <Card.Img src={Wikipedia}/>
                    <Card.Text>Wikipedia is a generous contributor of content for the Revolutionary Goss Blog. Wikipedia and Rison first met when Rison would spend hours opening new wiki tabs instead of sleeping.</Card.Text>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Authors