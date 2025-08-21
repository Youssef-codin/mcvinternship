CREATE TABLE employees(
name VARCHAR(100) PRIMARY KEY,
salary DECIMAL,
department VARCHAR(45) NOT NULL,
FOREIGN KEY (department) REFERENCES department(name)
);

CREATE TABLE department (
name VARCHAR(45) PRIMARY KEY,
);

INSERT INTO department (name) VALUES
('Engineering'),
('HR'),
('Finance'),
('Marketing');

INSERT INTO employees (name, salary, department) VALUES
('Alice Smith', 75000, 'Engineering'),
('Bob Johnson', 68000, 'Engineering'),
('Carol White', 52000, 'HR'),
('David Brown', 88000, 'Finance'),
('Eve Black', 60000, 'Marketing'),
('Frank Green', 72000, 'Engineering'),
('Grace Lee', 54000, 'HR'),
('Henry Adams', 95000, 'Finance'),
('Ivy Chen', 63000, 'Marketing'),
('Jack Turner', 80000, 'Engineering');

CREATE PROCEDURE reset
AS
BEGIN
	DELETE FROM employees;

	INSERT INTO employees (name, salary, department) VALUES
	('Alice Smith', 75000, 'Engineering'),
	('Bob Johnson', 68000, 'Engineering'),
	('Carol White', 52000, 'HR'),
	('David Brown', 88000, 'Finance'),
	('Eve Black', 60000, 'Marketing'),
	('Frank Green', 72000, 'Engineering'),
	('Grace Lee', 54000, 'HR'),
	('Henry Adams', 95000, 'Finance'),
	('Ivy Chen', 63000, 'Marketing'),
	('Jack Turner', 80000, 'Engineering');
END;
GO

CREATE PROCEDURE add1000
AS
UPDATE employees SET salary = SALARY + 1000
GO

-- 1st task
EXEC reset;
EXEC add1000;
SELECT * FROM employees ORDER BY department;

CREATE PROCEDURE add25percent
AS 
UPDATE employees SET salary = salary * 1.25
GO

-- 2nd task
EXEC reset;
EXEC add25percent;
SELECT * FROM employees ORDER BY department;

CREATE PROCEDURE addpercategory
AS 
BEGIN;
	UPDATE employees SET salary = salary * 1.4 WHERE
	salary <= 50000;
	
	UPDATE employees SET salary = salary * 1.3 WHERE
	salary > 50000 and salary <= 75000;
	
	UPDATE employees SET salary = salary * 1.25 WHERE
	salary > 75000;
END;
GO

-- 3rd task
EXEC reset;
EXEC addpercategory;
SELECT * FROM employees ORDER BY department;

CREATE PROCEDURE secondhighestsalary
AS
SELECT * FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees))
GO

-- 4th task
EXEC secondhighestsalary
SELECT * FROM employees ORDER BY salary DESC;

CREATE PROCEDURE highestdepartment
AS
SELECT TOP 1 department, SUM(salary) AS sumsalary FROM employees GROUP BY department ORDER BY sumsalary DESC;
GO

-- 5th task
EXEC highestdepartment
SELECT department, SUM(salary) AS sumsalary FROM employees GROUP BY department ORDER BY sumsalary DESC;

CREATE PROCEDURE departmentsalary @department VARCHAR(45)
AS
UPDATE employees SET salary = salary * 1.25 WHERE department = @department;
GO

-- 6th task
EXEC reset
EXEC departmentsalary @department = "HR";
SELECT * FROM employees ORDER BY department;
