import { Container, Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

const Header = () => {
  const navigate = useNavigate();
  const auth = useContext(LoginContext);

  const onLogin = () => {
    navigate("/login");
  };

  const onSignup = () => {
    navigate("/registration");
  };
  const onLogout = () => {
    auth.logOut();
  };
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/" className="fs-1 fw-bold">
          Itransition
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {localStorage.getItem("userData") ? (
            <Button className="m-3" variant="danger" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button className="m-3" variant="success" onClick={onLogin}>
                Login
              </Button>
              <Button className="m-3" variant="danger" onClick={onSignup}>
                Sign Up
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
