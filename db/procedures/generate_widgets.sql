DROP PROCEDURE IF EXISTS generate_widgets;
DELIMITER $$
CREATE PROCEDURE generate_widgets()
BEGIN
  DECLARE i INT DEFAULT 100;

  WHILE i <= 1000000 DO
    INSERT INTO widgets (id, name) VALUES (i, CONCAT('Widget ', i));
    SET i = i + 1;
  END WHILE;
END$$
DELIMITER ;
