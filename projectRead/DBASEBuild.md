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

# Build out Mongo database

![screenshot](/images/threeElements2.png)

Create a new mongoDB account, then add it as an environment variable on your machine (Mac) or Git Bash (Windows).

    npm install mongodb
    npm i dontenv
    npm install mongoose


Edit *\BasicMERNapp\api\index.js* to include added modules

    import dotenv from 'dotenv';
    import mongoose from 'mongoose';

Initialize Dotenv:

    dotenv.config();
    mongoose
      .connect(process.env.MONGO) 
      .then(() => {
         console.log('Connected to MongoDB');
       })
      .catch((err) => {
         console.log(err);
    });

Create *.env* file in root to hide database password.

  - *.env* files are text based key pairs.  Strings such as Mongo db url must be enclosed in "DOUBLE QUOTES".  Single quote'quote' will result in non connection to database.

## Framework for data 

### Create User model
  
Set up a home for your test database to reside. Create a test database on the criteria of the object.

#### *Sites like **https://json-generator.com/** can help*

Commit changes and upload to origin

[Home](/READme.md)
