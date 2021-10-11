CREATE DATABASE alsecodb;

CREATE TABLE employees (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   surname VARCHAR(100) NOT NULL
);

CREATE TABLE material_values (
   id SERIAL PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   price INT NOT NULL,
   owner_id INT NOT NULL REFERENCES employees(id) ON DELETE CASCADE
);

INSERT INTO employees (name, surname) VALUES ('Рахат', 'Алпысбай');
INSERT INTO employees (name, surname) VALUES ('Сергей', 'Иванов');
INSERT INTO employees (name, surname) VALUES ('Дархан', 'Бекалиев');
INSERT INTO employees (name, surname) VALUES ('Толеген', 'Санат');
INSERT INTO employees (name, surname) VALUES ('Андрей', 'Павлюченко');
INSERT INTO employees (name, surname) VALUES ('Олжас', 'Ратбек');

INSERT INTO material_values (title, price, owner_id) VALUES ('Ноутбук ASUS', 190000, 1);
INSERT INTO material_values (title, price, owner_id) VALUES ('Беспроводная мышь', 5000, 1);
INSERT INTO material_values (title, price, owner_id) VALUES ('Macbook M1 Air', 500000, 3);
INSERT INTO material_values (title, price, owner_id) VALUES ('Телефон Samsung', 250000, 4);
INSERT INTO material_values (title, price, owner_id) VALUES ('Компьютерный стол', 40000, 5);
