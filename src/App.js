import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./App.css";
import "./css/states.css";
import { getAllEmployees } from "./api/authprovider";
import EmployeeStatus from "./components/EmployeeStatus";
import AddEmployee from "./components/AddEmployee";

export const STATES = ["ADDED", "IN-CHECK", "APPROVED", "ACTIVE", "INACTIVE"];

const App = () => {
  const [employees, setEmployees] = useState([]);
  // Fetch all employees
  useEffect(() => {
    if (employees.length === 0) {
      getAllEmployees()
      .then((response) => { const empData= response.data.map((emp) => {
        if(STATES.indexOf(emp.state)===-1)
        emp.state=STATES[0];
        return emp;
      })
      setEmployees(empData)
    })
        .catch((error) => console.log(error)); 
    }
  }, [employees]);



  const handleUpdateEmployeeState = (id, state) => {
    const data = employees.map((element) => {
      if (element.id === id) {
        element.state = state;
        return { ...element, state: state };
      }
      return element;
    });
    setEmployees(data);
  };

  const sortFunc = (a, b, order) => {
    if (order === "asc") {
      return Number(b) - Number(a);
    }
    return Number(a) - Number(b);
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      sortFunc: sortFunc,
      headerStyle: () => {
        return { width: "80px", textAlign: "center" };
      },
    },
    {
      dataField: "name",
      text: "EMPLOYEE NAME",
      headerStyle: () => {
        return { width: "200px", textAlign: "center" };
      },
    },
    {
      dataField: "jobTitle",
      text: "JOB TITLE",
    },
    {
      dataField: "state",
      text: "STATE",
      headerStyle: () => {
        return { width: "180px", textAlign: "center" };
      },
    },

    {
      dataField: "changestate",
      text: "CHANGE STATE",
      formatter: (cell, row) => {
        return (
          <EmployeeStatus
            empId={row.id}
            status={row.state ? row.state : ""}
            updateEmployee={handleUpdateEmployeeState}
          />
        );
      },
    },
  ];

  const handleEmployeesAfterAddition = (data) => {
    setEmployees([...employees, data]);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">WorkMotion</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App-header">
        <AddEmployee handleAfterAdditionFn={handleEmployeesAfterAddition} />
      </div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={employees}
        noDataIndication="No Data Found!"
        columns={columns}
      />
    </>
  );
};
export default App;
