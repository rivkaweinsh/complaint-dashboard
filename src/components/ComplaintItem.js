import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/ComplaintItem.css';


const ComplaintItem = ({ complaint }) => {
    const { subject, complaint: complaintText, purchaseId, emailAddress, fullName } = complaint;

    return (
        <Card className='custom-card'>
            <Card.Header>{subject}</Card.Header>
            <Card.Body>
                <Card.Title className='truncate'>{complaintText}</Card.Title>
                <Card.Text >
                    Customer: {fullName} ({emailAddress})
                </Card.Text>
                <Button variant='info'>more info</Button>
            </Card.Body>
        </Card>
    );
};

export default ComplaintItem;