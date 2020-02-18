# node.js-cdp

NodeJS Global Mentoring Program

 # Task 4
 - Install packages
 `npm install -g sequelize-cli`
 `sequelize init`
 The last command will create 3 folders (Models, Migrations and Seeder) and a `config.json`file in the `/config` directory
  - Modify config.json
  - Generate models
  <br>User model
  `sequelize model:generate --name User --attributes "name:string, age:integer, login:string, password:string, isDeleted:boolean"`
  <br>Group model
  `sequelize model:generate --name Group --attributes "name:string, permissions:array"`
  <br>UserGroup model
  `sequelize model:generate --name UserGroup --attributes "userId:integer, groupId:integer"`

  - Run migration <br>
  `sequelize-cli db:migrate` <br>
  Check your database, you should see 3 tables
  
  - Run seeders
  `sequelize-cli db:seed:all`
