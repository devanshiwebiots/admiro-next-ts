"use client";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginWithTooltipContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="5" className="login_two_image" />
        <Col xl="7" className="p-0">
          <div className="login-card login-dark login-bg">
            <LoginForm logoClass="text-center" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginWithTooltipContainer;
