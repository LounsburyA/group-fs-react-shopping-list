-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data



CREATE TABLE cart(
id SERIAL PRIMARY KEY,
item VARCHAR(80),
quantity FLOAT,
unit VARCHAR(20),
purchased BOOLEAN);


INSERT INTO cart (item, quantity, unit)
VALUES ('oatmilk', 2, 'gallon'),
('tacos', 11, 'kilos');


