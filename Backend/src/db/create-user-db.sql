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
    role ENUM('Admin', 'User') DEFAULT 'User', 
    age INT(11) DEFAULT 0,
    img VARCHAR(200)
);

INSERT INTO user
VALUES (1, "queen", "passwordd", "Elise", "Abeth", "tt@toto.com", "User", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDW4D03RxIM2Qeke5kFqh_ktIv60vpgUErMNnMxzt&s");
INSERT INTO user
VALUES (2, "zz", "pa", "Zinedine", "Zidane", "zz@toto.com", "User", 45, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8-e04tB2NsXlsITwv2S42UFddCe5-f1sbQ41V86i&s");
INSERT INTO user
VALUES (4, "patoche", "paxsxs", "Patrick", "PasCool", "mojito@toto.com", "Admin", 45, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhi5o2LmnsiLvMqQ7bPlpoIUwxXqv1smoHoxtptQVCQ&s");

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
VALUES (1, "Le titre est super", 3, 25, "la description blabla");

