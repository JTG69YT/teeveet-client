import React, { useRef, useState } from "react";

import { Form, Button, Card, Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Salasanat eivät täsmää");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Rekisteröityminen epäonnistui");
    }
    setLoading(false);
  }

  return (
    <>
      <Helmet>
        <title>Rekisteröidy - Teeveet</title>
      </Helmet>
      <Card
        style={{
          background: "var(--darkBlue)",
          borderRadius: "0px"
        }}>
        <Card.Body>
          <h2 className="text-center" style={{ color: "white" }}>Rekisteröidy</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label style={{ color: "white" }}>Sähköposti</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label style={{ color: "white" }}>Salasana</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label style={{ color: "white" }}>Salasana uudelleen</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Rekisteröidy
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center" style={{ background: "var(--darkBlue)", color: "white" }}>
        Onko sinulla jo tili? <Link to="/login" style={{
          color: "white"
        }}>Kirjaudu sisään</Link>
      </div>
    </>
  );
}
