import React from "react";
import { AdItemProps } from "../../../../utils/interfaces/adItemProps";
import { Button, Modal } from "react-bootstrap";

const AdItem = ({ ad, onDelete }: AdItemProps) => {
  const [show, setShow] = React.useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tbody key={ad.id}>
      <tr>
        <td>
          <p style={{ marginTop: "4rem" }}>{ad.title}</p>
        </td>
        <td>
          <img
            style={{ width: "200px", height: "160px" }}
            src={"http://localhost:8000/" + ad.file_path}
            alt={ad.title}
          />
        </td>
        <td>
          <Button
            variant="danger"
            onClick={handleShow}
            style={{ marginTop: "4rem" }}
          >
            Pašalinti
          </Button>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Ar tikrai norite pašalinti {ad.title} skelbimą?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Skelbimas bus pašalintas negrįžtamai.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Atšaukti
          </Button>
          <Button variant="danger" onClick={() => onDelete(ad.id)}>
            Pašalinti
          </Button>
        </Modal.Footer>
      </Modal>
    </tbody>
  );
};

export default AdItem;
