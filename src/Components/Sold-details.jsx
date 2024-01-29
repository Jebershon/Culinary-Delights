import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import './/Home-2.css';
import soldGroceriesData from './purchaseDetails.js';
function SoldDetails(){
    return(
        <div>
        <Container>
         {soldGroceriesData.map((x)=>(
            <Row>
            <Col lg={12}>
            <Card className='mt-3 mb-3'>
                <Card.Header><span className='gip'>{x.username}</span></Card.Header>
                <Card.Text className='mt-3'><span className='gip'>Address:</span>{x.address}   ||   <span className='gip'>Email:</span>{x.userEmail}</Card.Text>
                <hr/>
            </Card>
            </Col>
            </Row>
         ))}
         <Row>
            <Col lg={12}>
            <Table responsive="lg" striped bordered hover className='mt-3 mb-3'>
            <thead>
                <tr>
                <th>Username</th>
                <th>User Email</th>
                <th>Address</th>
                <th>Recipe Name</th>
                <th>Recipe Exists</th>
                <th>Grocery Items</th>
                <th>Total Price</th>
                <th>Purchase Date</th>
                <th>Status</th>
                <th>Grocery ID</th>
                <th>Recipe ID</th>
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