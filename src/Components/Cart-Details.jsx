import { Card, CloseButton, Col, Container, Row } from "react-bootstrap";
import './/Home.css';
import ingre from "./Hardcode-data/Indgredients-details";
function CartDetails(){
    return(
    <Container>
        <br/>
        <br/>
    <Container>
        {ingre?.map(item => (<>
            <Card>
                <Row className="text-center">
                    <Col><Card.Img src={item.image_url} style={{width:"80px",height:"80px"}}></Card.Img></Col>
                    <Col><Card.Title className="mar">{item.name}</Card.Title></Col>
                    <Col><Card.Header className="mar">{item.product_id}</Card.Header></Col>
                    <Col><Card.Header className="text-muted mar">₹{item.price}</Card.Header></Col>
                    <Col className="justify-content-end mar"><CloseButton></CloseButton></Col>
                </Row>
            </Card>
            <br/>
            </>))}
    </Container>
    </Container>
    );
}
export default CartDetails;