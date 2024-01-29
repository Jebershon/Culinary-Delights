import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import './/Home-2.css';
import './/Home.css';
import soldGroceriesData from './purchaseDetails.js';
function SoldDetails(){
    return(
        <div>
        <Container>
         {soldGroceriesData.map((x)=>(
            <Row>
            <Col lg={12}>
            <Card className='mt-3 mb-3 Nutri-card'>
                <Card.Header style={{color:"#fc8019",fontSize:"25px"}}><span className='gip'>{x.username}</span></Card.Header>
                <Card.Text className='mt-3' style={{color:"#c8c8d0",fontSize:"15px"}}><span className='gip' style={{color:"white"}}>Address:</span>{x.address}   ||   <span className='gip' style={{color:"white"}}>Email:</span>{x.userEmail}</Card.Text>
                <hr/>
            </Card>
            </Col>
            </Row>
         ))}
         <Row>
            <Col lg={12}>
            <Table responsive="lg" striped bordered hover className='mt-3 mb-3 table-bg'>
            <thead>
                <tr>
                <th style={{color:"#fc8019"}}>Username</th>
                <th style={{color:"#fc8019"}}>User Email</th>
                <th style={{color:"#fc8019"}}>Address</th>
                <th style={{color:"#fc8019"}}>Recipe Name</th>
                <th style={{color:"#fc8019"}}>Recipe Exists</th>
                <th style={{color:"#fc8019"}}>Grocery Items</th>
                <th style={{color:"#fc8019"}}>Total Price</th>
                <th style={{color:"#fc8019"}}>Purchase Date</th>
                <th style={{color:"#fc8019"}}>Status</th>
                <th style={{color:"#fc8019"}}>Grocery ID</th>
                <th style={{color:"#fc8019"}}>Recipe ID</th>
                </tr>
            </thead>
            <tbody>
                {soldGroceriesData.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.username}</td>
                    <td>{entry.userEmail}</td>
                    <td>{entry.address}</td>
                    <td>{entry.recipeName}</td>
                    <td>{entry.recipeExists ? 'Yes' : 'No'}</td>
                    <td>
                    <ul>
                        {entry.groceryItems.map((item, i) => (
                        <li key={i}>{`${item.name}: ${item.quantity}`}</li>
                        ))}
                    </ul>
                    </td>
                    <td>{entry.totalPrice}</td>
                    <td>{entry.purchaseDate}</td>
                    <td>{entry.status}</td>
                    <td>{entry.groceryId}</td>
                    <td>{entry.recipeId}</td>
                </tr>
                ))}
            </tbody>
            </Table>
            </Col>
            </Row>
            </Container>
        </div>
    );
}
export default SoldDetails;