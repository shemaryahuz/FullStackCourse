CREATE DATABASE IF NOT EXISTS triggers_exe;
USE triggers_exe;

-- Create tables

CREATE TABLE employees (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
salary DECIMAL(10, 2)
);

CREATE TABLE employees_log (
log_id INT PRIMARY KEY AUTO_INCREMENT,
employee_id INT,
old_salary DECIMAL(10, 2),
new_salary DECIMAL(10, 2),
changed_at DATETIME
);
