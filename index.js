const inquirer = require('inquirer');
//function calls
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
                case "view all employees":
                displayEmployees();
                break;
            }

    });
}

function displayEmployees(){
    Options();
};