-- DROP DATABASE IF EXISTS menu_db;
-- CREATE DATABASE menu_db;

USE menu_db;

-- DROP TABLE IF EXISTS goodies;

CREATE TABLE goodies(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price INT default 0,
  category VARCHAR(100) NOT NULL,
  available BOOLEAN default true,
  PRIMARY KEY (id)
);

INSERT INTO goodies (name, price, category)
VALUES ("Chocolate 5 inch Drip Cake", 50, "cake"),
    ("Vanilla 5 inch Drip Cake", 50, "cake"),
    ("Red Velvet 5 inch Drip Cake", 50, "cake"),
    ("Noche Buena Cupcakes (6)" , 21, "cupCake"),
    ("Noche Buena Cupcakes (12)" , 42, "cupCake"),
    ("Flan-Bae Cupcakes (6)" , 21, "cupCake"),
    ("Flan-Bae Cupcakes (6)" , 42, "cupCake"),
    ("Nutella Sylvanas (6)", 20, "cookie"),
    ("Nutella Sylvanas (12)", 39, "cookie"),
    ("Ube Sylvanas (6)", 20, "cookie"),
    ("Ube Sylvanas (12)", 39, "cookie"),
    ("Cookies n' Cream Sylvanas (6)", 20, "cookie"),
    ("Cookies n' Cream Sylvanas (12)", 39, "cookie");
   
-- SELECT * FROM menu_db.goodies;

/* 
DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
 */