import React from "react";
// import Child from "./Child";
import {Navbar,Nav,NavDropdown,Card,Button} from "react-bootstrap";
import "./ui.css";
// CSS IN JS

const UI = () => {
//   const handler = () => {
//     console.log("handler fired");
//   };

  return (
    <div className="par">
    <div className="shadow-box-example z-depth-5">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">StudyToursIndia.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar" id="basic-navbar-nav">
            <Nav className="mx-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Button style={{backgroundColor:'#f393ded5',border:'none', outline:'none'}} bsClass="custom-btn home">Home</Button>
            <Nav.Link href="#link">Destinations</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            
            </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
            <Button style={{backgroundColor:'#cd08dfd5', border:'none', outline:'none'}} bsClass="custom-btn">Login</Button>
        </Navbar.Collapse>
        </Navbar>
        </div>

        <div className="section-2 container mt-5 mb-5">
                <div className="text container mt-5">
                    <h4>Tell us who you are</h4>
                    <h6 className="text-muted">And win travel vouchers worth Rs 5000</h6>
                </div>
                
                <div className="section-3 d-flex mt-5">
                    <Card className="shadow-box-example z-depth-5 card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title className="title first">I am a student</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                        
                    </Card.Body>
                    </Card>

                    <Card className="shadow-box-example z-depth-5 card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1610963196817-7d1415647029?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title className="title second">Like minded person</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                        
                    </Card.Body>
                    </Card>

                    <Card className="shadow-box-example z-depth-5 card " style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1556634202-129a046351c0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title className="title third">School/College</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                        
                    </Card.Body>
                    </Card>

                    <Card className="shadow-box-example z-depth-5" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1556634202-129a046351c0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title className="title fourth">Solo Traveller</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                        
                    </Card.Body>
                    </Card>
                </div>
                <div className="bottom mt-5">
                    <h4>Click above and answer some silly but important questions</h4>
                </div>
        </div>
    </div>

    
  );
};

export default UI;
