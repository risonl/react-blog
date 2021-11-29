import Navigation from "../comps/Navigation"
import { Button, Modal} from "react-bootstrap"
import { useState } from "react";
function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
    return (
        <>
        <Navigation />
        <h1>Got some hot goss? Drop us a line!</h1>
        <input type="text" className="textbox"></input>
        <br />
      <Button bg="hotpink" onClick={handleShow}>
        Send
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We appreciate the tip so we can keep serving you revolutionary realness!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button bg="hotpink" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default Contact