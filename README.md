# Тестовое задание для Alseco

---

#### Структура проекта

> client - Frontend: Vue.js
> server - Backend: Node.js + Express + PostgreSQL

##### Как запустить сервер?

1. Переходим в папку server: `cd server`
2. Устанавливаем зависимости: `npm install`
3. Создаем .env файл в корне папки server с нужными значениями

```
PORT=8000  ->  Порт на котором будет запускаться сервер
PGUSER=rakhat  ->  Логин юзера базы данных PostgreSQL (введите свой)
PGHOST=localhost  ->  SQL хост - по умолчанию localhost
PGDATABASE=alsecodb  ->  Название базы данных (нужно создать)
PGPORT=5432  ->  Порт на котором будет запускаться база
```

4. Создаем базу данных с нужными таблицами и тестовыми данными:

```
CREATE DATABASE alsecodb;

\c alsecodb    ->    Подключаемся к созданной базе

CREATE TABLE employees (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   surname VARCHAR(100) NOT NULL
);

CREATE TABLE material_items (
   id SERIAL PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   price INT NOT NULL,
   employee_id INT NOT NULL REFERENCES employees(id) ON DELETE CASCADE
);

# Создем сотрудников
INSERT INTO employees (name, surname) VALUES ('Андрей', 'Павлюченко');
INSERT INTO employees (name, surname) VALUES ('Олжас', 'Ратбек');
INSERT INTO employees (name, surname) VALUES ('Рахат', 'Алпысбай');

# Создаем выданные МЦ для сотрудников
INSERT INTO material_items (title, price, employee_id) VALUES ('Ноутбук ASUS', 190000, 1);
INSERT INTO material_items (title, price, employee_id) VALUES ('Беспроводная мышь', 5000, 1);
INSERT INTO material_items (title, price, employee_id) VALUES ('Macbook M1 Air', 500000, 3);
```

5. Запускаем сервер: `npm start или же npm run dev`

##### Как запустить frontend?

1. Переходим в папку client: `cd client`
2. Устанавливаем зависимости: `npm install`
3. Создаем .env файл в корне папки client с нужным значением

```
VUE_APP_API_URL=http://localhost:8000/api   ->   URL на котором запускается сервер
```

4. Запускаем приложение через скрипт: `npm run serve`

##### Скриншоты работающего приложения:

![image](https://user-images.githubusercontent.com/66871165/137080152-2b229cd9-b2c7-4719-9a86-a5c7e7020326.png)
![image](https://user-images.githubusercontent.com/66871165/137080172-7ab759e2-17be-4882-b0eb-8dd9aa580ee7.png)
![image](https://user-images.githubusercontent.com/66871165/137080188-562acfe9-5c04-4f00-9773-8e93b9343a01.png)
![image](https://user-images.githubusercontent.com/66871165/137080190-31be7c18-81f8-47e2-9e8c-d33ff38da1b9.png)
![image](https://user-images.githubusercontent.com/66871165/137080191-496806b1-1d60-4ac3-a486-6681546c6b74.png)
