import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirectUrl = searchParams.get("redirect_to")
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      window.location = redirectUrl
    } catch {
      setError("Kirjautuminen epäonnistui");
    }
    setLoading(false);
  }

  return (
    <>
      <Helmet>
        <title>Kirjaudu - Teeveet</title>
      </Helmet>
      <Card
        style={{
          background: "var(--darkBlue)",
          borderRadius: "0px"
        }}>
        <Card.Body>
          <h2 className="text-center" style={{ color: "white" }}>Kirjaudu sisään</h2>
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
            <Button disabled={loading} className="w-100" style={{ background: "#02ccc6" }} type="submit">
              Kirjaudu
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/register?redirect_to=/account" style={{ color: "white" }}>Ei tunnusta? Luo Jesun Maailma -tili</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center" style={{ background: "var(--darkBlue)" }}>
        <a
          href="https://www.privacypolicies.com/live/520c0c3e-b033-4cee-8288-fbb61861f188"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: "white"
          }}
        >
          Käyttöehdot
        </a>
      </div>
      <div className="w-100 text-center" style={{ background: "var(--darkBlue)" }}>
        <a
          href="https://www.privacypolicies.com/live/3d159e75-97bd-48df-9003-2b0178d01836"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            color: "white"
          }}
        >
          Tietosuojaseloste
        </a>
      </div>
    </>
  );
}
