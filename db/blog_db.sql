DROP DATABASE IF EXISTS blog_mgmt;
CREATE DATABASE blog_mgmt;
USE blog_mgmt;

create table users(user_id int primary key ,fullname varchar(30), email varchar(30),password varchar(30),phone_no varchar(15),created_time datetime);
create table categories(category_id int primary key,title varchar(50), c_description varchar(200));
create table blogs(blog_id int primary key ,title varchar(30),content varchar(1000),created_time datetime,user_id int references users(user_id),category_id int references categories(category_id));