DROP DATABASE IF EXISTS bamamazon;
CREATE DATABASE bamamazon;

USE bamamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Unknown Pleasures", "CD", 5, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Closer", "CD", 5, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fractured Box", "CD", 10, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Let the Movie Begin", "CD", 10, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Substance", "CD", 10, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Heart and Soul", "CD", 10, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Les Bains Douches", "CD", 15, 7500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Control", "DVD", 20, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Signed Poster", "Memorabilia", 20, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Don't Walk Away Tshirt", "Other", 50, 1000);


SELECT * FROM products;