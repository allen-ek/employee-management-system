const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require("console.table");
//function calls

//connection to mysql
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  
  Options();


  //functions
function Options(){
    inquirer.prompt({
            type : "list",
            message:'Please select an option',
            choices:["view all departments", "view all roles", 
            "view all employees", "add a department", "add a role", "add an employee","update employee role"],
            name: "options"
        }).then(function({options}){
            switch (options){
                case "view all departments":
                    displayDepartments();
                break;
                case"view all roles":
                    displayRoles();
                break;
                case"view all employees":
                    displayEmployees();
                break;
                case"add a department":
                    addDepartment();
                break;
                case"add a a role":
                    Options();
                break;
                case"add an employee":
                    Options();
                break;
                case"update employee role":
                    Options();
                break;
                
            }
        });
}
function displayRoles(){
    let query=`SELECT * FROM role`;
    db.query(query, function (err, data){ 
        console.table(data);    
    })
    Options();
};

function displayDepartments(){
    let query=`SELECT * FROM department`;
    db.query(query, function (err, data){ 
        console.table(data);
    })
    Options();
};


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

function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            name:"depName",
            message:"What is the department name?"
        }
    ]).then(function(answers){
        let query='INSERT INTO department (department_name) VALUES (?)';
        db.query(query,[answers.depName],function(err,data){
            if (err) throw err;
            console.table("added department");
            Options();
        })
    });
};
function addRole(){
    inquirer.prompt([
        {
            type: "input",
            name:"roleName",
            message:"What is the role name?"
        },
        
        {
            type: "input",
            name:"salary",
            message:"What is the salary ?"
        },
        {
            type: "input",
            name:"roleName",
            message:"Which department does the role belong ?"
        }
    ])
};

    //wip
    function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            name:"fName",
            message:"What is Employees first name?"
        },
        {
            type: "input",
            name:"lName",
            message:"What is Employees last name?"
        },
        {
            type: "input",
            name:"fName",
            message:"What is Employees role?"
        },
]).then(function(answers){

   // let query=`INSERT * FROM department`;
   // db.query(query, function (err, data){ 
   //     console.table(err);
   //     })
     Options();
    })
};