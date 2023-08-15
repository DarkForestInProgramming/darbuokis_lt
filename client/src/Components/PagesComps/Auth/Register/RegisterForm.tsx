import { RegisterFormProps } from "../../../../utils/interfaces/registerFormProps";
import { Button, Form } from "react-bootstrap";

const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleRegisterSubmit,
}: RegisterFormProps) => {
  return (
    <Form style={{ marginTop: 20 }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Vartotojo Vardas</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

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
        className="w-100 mb-2"
        onClick={handleRegisterSubmit}
        disabled={!(name.length > 0 && email.length > 0 && password.length > 0)}
      >
        Registruotis
      </Button>
    </Form>
  );
};

export default RegisterForm;
