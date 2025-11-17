DROP DATABASE IF EXISTS blog_mgmt;
CREATE DATABASE blog_mgmt;
USE blog_mgmt;

create table users(user_id int primary key AUTO_INCREMENT ,fullname varchar(30), email varchar(30),password varchar(100),phone_no varchar(15),created_time datetime);
create table categories(category_id int primary key AUTO_INCREMENT,title varchar(50), c_description varchar(400));
create table blogs(blog_id int primary key AUTO_INCREMENT ,title varchar(30),content varchar(2000),created_time datetime,user_id int references users(user_id),category_id int references categories(category_id));


insert into users(fullname, email ,password ,phone_no ,created_time) values ('Test User', 'testuser@gmail.com', 'testuser',8288393993, now());

insert into categories(title , c_description ) values ('Test Category', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' );

insert into blogs(title ,content ,created_time ,user_id ,category_id) 
values ('Test Blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
, now(),1, 1);