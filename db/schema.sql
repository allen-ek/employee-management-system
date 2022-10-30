drop database if exists employee_db;
create database employee_db;
use employee_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE rolee (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary Decimal NOT NULL,
  FOREIGN KEY (id)
  REFERENCES department(id)
  ON DELETE SET NULL
);
CREATE TABLE employee(
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    Rolee_id INT NOT NULL,
    
    manager_id INT
);