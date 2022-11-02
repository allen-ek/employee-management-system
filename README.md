# employee-management-system
Allen Klein

- [Link to Video](https://watch.screencastify.com/v/cI31vFmKuKEt2mOoePGt)
- [Link to Github Repository](https://github.com/allen-ek/employee-management-system)


## Why?
I wanted to create a command line application that would be able to create an employee database to display employee information.

## What I learned
I learned how to use Node.js with MySQL to create and query a database to showcase relavent information.
## Technologies Used
MYSQL2 package
Node.js
MySQL
Github

## Code Snippet
```html
function displayEmployees(){
    let query=
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, CONCAT(manager.first_name, ',', manager.last_name) AS manager
  FROM employee 
  LEFT OUTER JOIN role
	ON employee.role_id = role.id
  LEFT OUTER JOIN department 
  ON department.id = role.department_id
  LEFT OUTER JOIN employee manager
	ON manager.id = employee.manager_id`;
    db.query(query, function (err, data){ 
        console.table(data);
    });
    Options();
};
```
The code snippet above was the code in order to handle an input from the command line to show case from the employee database the employees informations

