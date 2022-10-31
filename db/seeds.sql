USE employee_db;
INSERT INTO department (department_name)
VALUES ("Marketing"), ("IT"),("Sales");
SELECT * FROM department;

INSERT INTO role(title, salary, department_id)
VALUES ("IT Support",60000,2),
("Marketing Rep",80000,1),
("Sales Rep",80000,3);
SELECT * FROM role;

INSERT INTO employee (first_name, last_name,role_id)
VALUES ( "John", "Doe",1),
       ( "Jane", "Smith", 2),
       ( "Allen", "Klein",3);

SELECT * FROM employee;
      
