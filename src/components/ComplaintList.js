import React, { useEffect, useState } from 'react';
import { getComplaints } from '../api/complaintsApi';
import ComplaintSingleItem from './ComplaintItem'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ComplaintList = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const response = await getComplaints();
            const parsedComplaints = parseComplaints(response);
            console.log(parseComplaints);
            setComplaints(parsedComplaints);
        } catch (error) {
            console.error('Error fetching complaints:', error);
        }
    };

    const parseComplaints = (response) => {
        const parsedComplaints = Object.entries(response).map(([userId, complaintData]) => {
            const { subject, complaint, purchaseId, users = null } = complaintData;
            const { emailAddress, fullName } = users;

            return {
                userId,
                subject,
                complaint,
                purchaseId,
                emailAddress,
                fullName
            };
        });

        return parsedComplaints;

    };

    return (

        <div className="complaint-list">
            <Row xs={1} md={3} className="g-4 custom-row ">
                {complaints.map(complaint => (
                    <Col key={complaint.userId}>
                        <ComplaintSingleItem complaint={complaint} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ComplaintList;
