USE triggers_exe;

DROP TRIGGER IF EXISTS after_salary_update;

-- Trigger for updating salaries

DELIMITER //
CREATE TRIGGER after_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
	IF OLD.salary <> NEW.salary THEN
		INSERT INTO employees_log (
			employee_id,
			old_salary,
			new_salary,
			changed_at
		)
		VALUES (
			OLD.id,
			OLD.salary,
			NEW.salary,
            NOW()
		);
	END IF;
END;
DELIMITER //