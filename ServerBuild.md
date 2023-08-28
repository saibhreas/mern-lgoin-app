<p align='center'>
  <a href="https://github.com/saibhreas">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white">
  </a>  
  <a href='https://www.linkedin.com/in/siobhanknuttel'>
      <img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>
  </a>
    <a href='https://www.upwork.com/freelancers/siobhank4?viewMode=1'> 
    <img src='https://img.shields.io/badge/UpWork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white' witth="45" height="20"> 
  </a>
  
</p>
Basic MERN APP

# Server Side Development
Server is Node js with Mongo Database

Server requires:

  * **express** node framework
  * Folder dedicated to its components
  * Root File generally *server.js* or *index.js* 
    - *this app utilizes index.js*

* cd to main folder abd initialize package.json

  - edit package.json with:

        "type": "module",
        "scripts": {
           "dev": "nodemon api/index.js",
           "start":"node api/index.js",
         },

    - *This allows the server to run and update while editing and testing*

* create **api folder** to house backend
* create index.js

       import express from 'express';

* test server by entering in terminal:

        http://localhost:5173/



#### Server nodejs dependencies

    * npm i express
    * npm i nodemon
    * npm i dotenv
    npm install mongoose
