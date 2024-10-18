drop database if exists task_manager;
create database task_manager character set utf8 collate utf8_general_ci;
use task_manager;

create table task(
    id int not null primary key auto_increment,
    titulo varchar(100) not null,
    descricao varchar(100) not null,
    data_de_criacao datetime,
    nome varchar(100) not null

);

show tables;

