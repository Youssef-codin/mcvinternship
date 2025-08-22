CREATE TABLE employees(
name VARCHAR(100) PRIMARY KEY,
salary DECIMAL,
department VARCHAR(45) NOT NULL,
manager VARCHAR(100),
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

INSERT INTO employees (name, salary, department, manager) VALUES
('Alice Johnson', 90000, 'Engineering', NULL),
('Bob Smith', 70000, 'Engineering', 'Alice Johnson'),
('Charlie Brown', 65000, 'Engineering', 'Alice Johnson'),
('Diana Prince', 85000, 'HR', NULL),          
('Ethan Hunt', 55000, 'HR', 'Diana Prince'),
('Fiona Gallagher', 50000, 'HR', 'Diana Prince'),
('George Miller', 95000, 'Finance', NULL),      
('Hannah Baker', 72000, 'Finance', 'George Miller'),
('Ian Wright', 68000, 'Finance', 'George Miller'),
('Julia Roberts', 88000, 'Marketing', NULL),     
('Kevin Lee', 60000, 'Marketing', 'Julia Roberts'),
('Laura Chen', 62000, 'Marketing', 'Julia Roberts');

CREATE PROCEDURE reset
AS
BEGIN
	DELETE FROM employees;

	INSERT INTO employees (name, salary, department, manager) VALUES
	('Alice Johnson', 90000, 'Engineering', NULL),
	('Bob Smith', 70000, 'Engineering', 'Alice Johnson'),
	('Charlie Brown', 65000, 'Engineering', 'Alice Johnson'),
	('Diana Prince', 85000, 'HR', NULL),          
	('Ethan Hunt', 55000, 'HR', 'Diana Prince'),
	('Fiona Gallagher', 50000, 'HR', 'Diana Prince'),
	('George Miller', 95000, 'Finance', NULL),      
	('Hannah Baker', 72000, 'Finance', 'George Miller'),
	('Ian Wright', 68000, 'Finance', 'George Miller'),
	('Julia Roberts', 88000, 'Marketing', NULL),     
	('Kevin Lee', 60000, 'Marketing', 'Julia Roberts'),
	('Laura Chen', 62000, 'Marketing', 'Julia Roberts');
END;
GO

-- 1st task
CREATE PROCEDURE add1000
AS
UPDATE employees SET salary = SALARY + 1000
GO

EXEC reset;
EXEC add1000;
SELECT * FROM employees ORDER BY department;

-- 2nd task
CREATE PROCEDURE add25percent
AS 
UPDATE employees SET salary = salary * 1.25
GO

EXEC reset;
EXEC add25percent;
SELECT * FROM employees ORDER BY department;

-- 3rd task
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


EXEC reset;
EXEC addpercategory;
SELECT * FROM employees ORDER BY department;

-- 4th task
CREATE PROCEDURE secondhighestsalary
AS
SELECT * FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees))
GO

EXEC secondhighestsalary
SELECT * FROM employees ORDER BY salary DESC;

-- 5th task
CREATE PROCEDURE highestdepartment
AS
SELECT TOP 1 department, SUM(salary) AS sumsalary FROM employees GROUP BY department ORDER BY sumsalary DESC;
GO

EXEC highestdepartment
SELECT department, SUM(salary) AS sumsalary FROM employees GROUP BY department ORDER BY sumsalary DESC;

-- 6th task
CREATE PROCEDURE departmentsalary @department VARCHAR(45)
AS
UPDATE employees SET salary = salary * 1.25 WHERE department = @department;
GO

EXEC reset
EXEC departmentsalary @department = "HR";
SELECT * FROM employees ORDER BY department;

-- 7th Task
CREATE PROCEDURE showdata
AS
SELECT 
    e.department, 
    e.manager, 
    e.name, 
    e.salary
FROM 
    employees e
JOIN (
    SELECT department, SUM(salary) AS dept_total
    FROM employees
    GROUP BY department
) d ON e.department = d.department
ORDER BY 
    d.dept_total DESC,       
    e.salary DESC;
GO

EXEC showdata