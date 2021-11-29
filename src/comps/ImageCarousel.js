import { Carousel , Container , Row , Col, Badge} from "react-bootstrap";
import Congress from "../assets/cont-congress.jpeg";
import Surrender from "../assets/cornwallis-surrender.jpeg";
import Constitution from "../assets/signing-constitution.jpeg";
import Delaware from "../assets/wash-delaware.jpeg"

function ImgCarousel() {
return (
<>
<Container className="carousel-container">
    <Container>
        <Row>
            <Col></Col>
            <Col xs="6">
                <Carousel style={{height: '200px' , justifyContent: 'center'}} controls={false} autoplay={true} indicators={false} interval={3000} pause={false}>
                    <Carousel.Item>
                    <img
                    src={Congress}
                    alt=" "
                    style={{height: '350px'}}
                    />
                        <Carousel.Caption className="text-yellow" bg="hotpink">
                            <h3><Badge bg="hotpink">Independence Declared!</Badge></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                     <Carousel.Item>
                     <img
                    src={Surrender}
                    alt=" "
                    style={{height: '350px'}}
                    />
                        <Carousel.Caption bg="hotpink">
                            <h3><Badge bg="hotpink">General Cornwallis Surrenders!</Badge></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    src={Constitution}
                    alt=" "
                    style={{height: '350px'}}
                    />
                        <Carousel.Caption bg="hotpink">
                            <h3><Badge bg="hotpink">Constitution Signed!</Badge></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    src={Delaware}
                    alt=" "
                    style={{height: '350px'}}
                    />
                        <Carousel.Caption>
                            <h3><Badge bg="hotpink">General Washington Makes a Daring Escape!</Badge></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col></Col>
        </Row>
    </Container>
</Container>
</>
)
}

export default ImgCarousel