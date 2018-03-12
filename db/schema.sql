-- C R E A T I N G  D A T A B A S E 

drop database if exist burgers_db;

create database burgers_db;

use database burgers_db;

create table burgers(
	id int not null auto_increment,
	burger_name varchar(50) not null,
	devoured boolean not null,
	primary key (id)
);