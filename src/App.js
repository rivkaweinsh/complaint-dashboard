import './App.css';
import ComplaintList from './components/ComplaintList'
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid>
      <Row className="header-row">
        <Col>
          <h1>Pending Complaints</h1>
        </Col>
      </Row>
      <Row className="dashboard-row">
        <Col>
          <ComplaintList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
