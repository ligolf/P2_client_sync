###
Schema

CREATE DATABASE clientSync_db;
USE clientSync_db;

CREATE TABLE inventory
(
    id int NOT NULL
    AUTO_INCREMENT,
	catogory varchar
    (255) NOT NULL,
	description varchar
    (255) NOT NULL,
    make varchar
    (255) NOT NULL,
    model varchar
    (255) NOT NULL,
	PRIMARY KEY
    (id)
);

    CREATE TABLE contacts
    (
        id int NOT NULL
        AUTO_INCREMENT,
	profession varchar
        (255) NOT NULL,
	firstName varchar
        (255) NOT NULL,
    lastName varchar
        (255) NOT NULL,
    phone varchar
        (255) NOT NULL,
    email varchar
        (255) NOT NULL,
	PRIMARY KEY
        (id)
);