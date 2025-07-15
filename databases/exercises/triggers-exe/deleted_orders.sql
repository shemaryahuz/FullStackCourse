USE triggers_exe;

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    total DECIMAL(10, 2)
);

CREATE TABLE deleted_orders (
    id INT,
    customer_name VARCHAR(100),
    total DECIMAL(10, 2),
    deleted_at DATETIME
);

DELIMITER $$
CREATE TRIGGER after_delete_order
AFTER DELETE ON orders
FOR EACH ROW
BEGIN
	INSERT INTO deleted_orders (
        customer_name,
        total,
        created_at
	) VALUES (
		OLD.customer_name,
        OLD.total,
        NOW()
	);
END;
DELIMITER;
