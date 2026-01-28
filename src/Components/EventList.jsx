import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const EventList = ({ events, onView, onRegister }) => {
  return (
    <Container className="my-4">
      <Row>
        {events.map(event => (
          <Col md={6} lg={4} key={event.id}>
            <Card className="mb-4 shadow-sm">
              {event.image && (
                <img src={event.image} alt={event.title} className="w-100" style={{height:160,objectFit:'cover',borderTopLeftRadius:8,borderTopRightRadius:8}} />
              )}
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <Badge bg="light" text="dark" className="mb-2">{event.category}</Badge>
                  <span className={event.status === 'available' ? 'status-available' : 'status-out'}>{event.status === 'available' ? 'Available' : 'Out'}</span>
                </div>

                <Card.Title className="mt-2">{event.title}</Card.Title>

                <Card.Text className="text-muted small">
                  📅 {event.date} · 📍 {event.location}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <div className="event-price">₹{event.price}</div>
                    <small className="text-muted">👥 {event.attendees ?? 0} attending</small>
                  </div>
                  <div>
                    <Button size="sm" variant="outline-primary" className="me-2" onClick={() => onView(event)}>View</Button>
                    <Button size="sm" variant="success" onClick={() => onRegister(event.id)} disabled={event.status !== 'available'}>Register</Button>
                  </div>
                </div>

                <Card.Text className="small text-truncate">
                  {event.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventList;