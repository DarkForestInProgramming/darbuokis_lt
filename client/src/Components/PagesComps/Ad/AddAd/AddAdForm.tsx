import { Button, Form } from "react-bootstrap";
import { AddAdFormProps } from "../../../../utils/interfaces/addAdFormProps";

const AddAdForm = ({
  file,
  title,
  salary,
  description,
  setTitle,
  setSalary,
  setDescription,
  addAd,
  handleClick,
  handleFileChange,
}: AddAdFormProps) => {
  return (
    <>
      <Form style={{ marginTop: 20 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Pareigos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pvz., Frontend programuotojas"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Paveikslėlis</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Atlyginimas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Šiai dienai 607€ per mėn. yra minimumas"
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Darbo pobūdis</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pvz., kurti aplikacijas su Next.js karkasu"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="success"
          className="w-100 mb-2"
          onClick={() => {
            addAd();
            handleClick();
          }}
          disabled={
            !(
              title.length >= 3 &&
              salary.length >= 3 &&
              description.length >= 3 &&
              file
            )
          }
        >
          Skelbti
        </Button>
      </Form>
    </>
  );
};

export default AddAdForm;
