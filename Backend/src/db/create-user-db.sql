DROP DATABASE IF EXIST test_db;
CREATE DATABASE IF NOT EXISTS test_db;
USE test_db;

DROP TABLE IF EXISTS user; 
CREATE TABLE IF NOT EXISTS user
(
    id INT PRIMARY KEY auto_increment,
    username VARCHAR(25) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    role ENUM('Admin', 'SuperUser') DEFAULT 'SuperUser', 
    age INT(11) DEFAULT 0
);

DROP TABLE IF EXISTS anime; 
CREATE TABLE IF NOT EXISTS anime
(
    ref_auteur_id INT PRIMARY KEY auto_increment,
    titre VARCHAR(25) UNIQUE NOT NULL,
    nb_saisons INT(11) DEFAULT 1,
    nb_episodes INT(11) DEFAULT 1,
    description VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO anime
VALUES (1, "le titre est sueper", 3, 25, "la description blabla");

