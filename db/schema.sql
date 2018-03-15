-- D A T A B A S E  S C H E M A

drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers(
	id int not null auto_increment,
	burger_name varchar(50) not null,
	devoured boolean not null default false,
	primary key (id)
);