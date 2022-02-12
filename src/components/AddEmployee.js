import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { addNewEmployeeRecord } from "../api/authprovider";
import { STATES } from '../App';

function NewEmployee(props) {
  const [newEmployeeName, setNewEmployee] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [formerrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!newEmployeeName) {
      errors.newEmployeeName = "Employee name is required";
    }
    if (!jobTitle) {
      errors.jobTitle = "Job Title is required";
    } 
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validate(newEmployeeName, jobTitle)) {
    addNewEmployeeRecord(newEmployeeName, jobTitle, STATES[0]).then((response) => {
      props.handlestatefn(response.data);
      setJobTitle('');
      setNewEmployee('');
      props.onHide();
    });
    }else{
      return false;
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Employee Record
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              controlid="formBasicName"
              type="text"
              value={newEmployeeName}
              placeholder="Enter Employee Name"
              onChange={(e) => setNewEmployee(e.target.value)}
              
            />
            {formerrors.newEmployeeName && (
              <p className="text-warning">{formerrors.newEmployeeName}</p>
            )}
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              controlid="formBasicTitle"
              value={jobTitle}
              placeholder="Enter Job Title"
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </Form.Group>
          {formerrors.jobTitle && (
              <p className="text-warning">{formerrors.jobTitle}</p>
            )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleOnSubmit(e)}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const AddEmployee = (props) => {
  const [showNewEmployeeForm, setNewEmployeeForm] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setNewEmployeeForm(true)}>
        New
      </Button>
      <NewEmployee
        show={showNewEmployeeForm}
        handlestatefn={() => props.handleAfterAdditionFn}
        onHide={() => setNewEmployeeForm(false)}
      />
    </>
  );
};

export default AddEmployee;
