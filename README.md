<!-- ![Tests](https://github.com/cakirilker/a1-car-app/workflows/Tests/badge.svg) -->

![Build and Deploy](https://github.com/cakirilker/a1-car-app/workflows/Build%20and%20Deploy/badge.svg)

# WorkMotion Code Challenge

> This is an implemenation of the code challenge given by WorkMotion as part of interview process. .

Currently developing an employees managment system.

The employee have four different states including the following

- ADDED
- IN-CHECK
- APPROVED
- ACTIVE
- INACTIVE

Task was to build a frontend application using React / Typescript including the following features.

- A simple UI listing the employees
  The application need to use an API endpoint to retrieve the employee's list, Unfortunately the API endpoint isn't developed yet, We recommend using a tool to mock your API with the following specification :
  - GET /employees/
  - POST /employees/
  - PATCH /employees/{employee_id}
- In Every employee row, there should be a component as per the provided picture which will be used to display the current state of this employee and by clicking on another state e.g. APPROVED , it should persist that change to this given employee.

This project was bootstrapped with TypeScript version of the [Create React App](https://github.com/facebook/create-react-app).

## Installation

First, install the packages.

```
npm install
```

Then run following command to start the project.

```
npm start
```

## Features

- Listing Employees
- Change Employee State
- Add new employee
- Sort List by Employee id


## Third Party Libraries

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) for design.
- [React bootstrap table next](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/about.html) for Employee app table
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/download/) for buidling page
- [React Icons](https://react-icons.github.io/react-icons) for icons
- [Axios](https://github.com/axios/axios) for api calls.
- [MockApi](https://mockapi.io/) for mocked data


## Sample mocked Json 

```
[
 {
  "name": "Rebeca",
  "state": "state 1",
  "jobTitle": "Global Web Facilitator",
  "id": "1"
 },
 {
  "name": "Frederick",
  "state": "state 2",
  "jobTitle": "Forward Marketing Representative",
  "id": "2"
 }
]
```
