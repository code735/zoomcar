import React from 'react';
import './PaymentSuccess.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PaymentSuccess = () => {
  return (
    <Container className="payment-success-container">
      <Row className="payment-success-row">
        <Col xs={12}>
          <h1 className="payment-success-title">Payment Successful!</h1>
        </Col>
        <Col xs={12}>
          <p className="payment-success-text">
            Thank you for your purchase. Your transaction has been completed,
            and a receipt for your purchase has been sent to your email address.
          </p>
        </Col>
        <Col xs={12}>
          <Button className="payment-success-button" href="/">
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;