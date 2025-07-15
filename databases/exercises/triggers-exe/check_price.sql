USE triggers_exe;

CREATE TABLE products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

DELIMITER $$
CREATE TRIGGER before_insert_check_price
BEFORE INSERT ON products
FOR EACH ROW
BEGIN
	IF NEW.price < 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Price can not be negative';
	END IF;
END $$
DELIMITER $$