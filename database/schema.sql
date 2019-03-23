DROP DATABASE IF EXISTS db_burgers;
CREATE DATABASE db_burgers;

USE db_burgers;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(55) NOT NULL,
    devourED BOOLEAN
);