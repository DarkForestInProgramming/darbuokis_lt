import { LoginFormProps } from "../../../../utils/interfaces/loginFormProps";
import { Form, Button } from "react-bootstrap";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLoginSubmit,
}: LoginFormProps) => {
  return (
    <Form style={{ marginTop: 20 }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>El. Paštas</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Slaptažodis</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="success"
        onClick={handleLoginSubmit}
        className="w-100 mb-2"
        disabled={!(email.length > 0 && password.length > 0)}
      >
        Prisijungti
      </Button>
    </Form>
  );
};

export default LoginForm;
