import React, { useState } from "react";

import { Card, Button, Alert, Modal } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [openLogout, setOpenLogout] = useState(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);

  const handleOpenLogout = () => setOpenLogout(true);
  const handleCloseLogout = () => setOpenLogout(false);

  const handleOpenDeleteAccount = () => setOpenDeleteAccount(true);
  const handleCloseDeleteAccount = () => setOpenDeleteAccount(false);

  const [error, setError] = useState("");
  const { currentUser, logout, deleteUser } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      handleCloseLogout(true);
      await logout();
      history.push("/");
    } catch {
      setError("Uloskirjautuminen epäonnistui");
    }
  };
  
  const handleDeleteUser = () => {
    setError("");

    try {
      handleCloseDeleteAccount(true);
      deleteUser();
      history.push("/");
    } catch {
      setError("Tilin poistaminen epäonnistui");
    }
  };

  return (
    <>
      <Modal
        show={openLogout}
        size="lg"
        onHide={handleCloseLogout}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="w-100 text-center">Kirjaudu ulos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-100 text-center">
          Haluatko varmasti kirjautua ulos?
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100">
            <Button
              variant="primary"
              onClick={handleLogout}
              className="w-100"
            >
              Kirjaudu ulos
            </Button>
            <Button
              variant="secondary"
              onClick={handleCloseLogout}
              className="w-100 mt-3"
            >
              Peruuta
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={openDeleteAccount}
        size="lg"
        onHide={handleCloseDeleteAccount}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="w-100 text-center">Poista tili</Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-100 text-center">
          Haluatko varmasti poistaa tilisi?
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100">
            <Button
              variant="primary"
              onClick={handleDeleteUser}
              className="w-100"
            >
              Poista tili
            </Button>
            <Button
              variant="secondary"
              onClick={handleCloseDeleteAccount}
              className="w-100 mt-3"
            >
              Peruuta
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Helmet>
        <title>Kojelauta - Teeveet</title>
      </Helmet>
      <Card
        className="text-center"
        style={{
          color: "white",
          background: "var(--darkBlue)",
          borderRadius: "0px"
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Profiili</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Sähköposti:</strong> {currentUser.email}
          <div className="w-100 text-center mt-3" style={{
            background: "var(--darkBlue)",
          }}>
            <Button
              style={{
                color: "var(--white)",
                textDecoration: "none",
              }}
              variant="link"
              onClick={handleOpenLogout}
            >
              Kirjaudu ulos
            </Button>
            &bull;
            <Button
              style={{
                color: "var(--white)",
                textDecoration: "none",
              }}
              variant="link"
              onClick={handleOpenDeleteAccount}
            >
              Poista tili
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Dashboard;
