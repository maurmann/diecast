import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Models from './models';
import Title from './title';
import Toolbar from './toolbar';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Title></Title>
          <Toolbar></Toolbar>
          <Models></Models>
        </Col>
      </Row>
    </Container >

  );
}

export default App;