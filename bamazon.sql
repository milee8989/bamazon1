DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("skirt", "clothing", 79.99, 10),("pajamas", "clothing", 24.99, 5),("candle", "decor", 15.00, 3),("dress", "clothing", 98.99, 7),("wallet", "accessories", 249.99, 5),("earrings", "jewelry", 49.99, 2), ("sofa", "furniture", 500, 2),("sunglasses", "accessories", 159.99, 6),("pants", "clothing", 39.00, 3);

select * from products;