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
        })
        .then(function({options}){
            switch (options){
                case "view all departments":
                    displayDepartments();
                break;
                case"view all roles":
                displayRoles();
                break;
                case"view all employees":
                displayRoles();
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
    let query=``;
    Options();
};