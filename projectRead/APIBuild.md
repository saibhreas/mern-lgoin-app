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


# API Framing for basic route and CRUD testing

This is the initial framing out of the  API routes, and behaviors.  Once simple processes are proofed, then the files will be reorganized for clarity and modularity for changes, edits and upgrades.

This is done after connection with database had been established.

Create *\BasicMERNapp\api\routes\user.route.js* 

      import express from 'express';
      const router = express.Router()

      router.get('/', (req, res) => {
        res.json({
          message: 'First API is working',
        });
      });

      export default router;
      {/* Since exported as default it needs to be imported to index.js*/}
    
    
Edit *\BasicMERNapp\api\index.js* 

      import userRoutes from './routes.user.routes.js';

### Controllers introduced to hold logic for individual routes.

Create *\BasicMERNapp\controllers\usersController.js*:

    export const test = (req, res) => {
     res.json ({
       message: 'API is working thru the Controller',
      });
    };  

#### Separate User from Authentication

Create *\BasicMERNapp\api\routes\auth.route.js*

      import { Express } from "express";

      const router = express();

      router.post('/signup')

      export default router;

Edit *\BasicMERNapp\api\index.js*

      import userRoutes from './routes/user.route.js';
      import authRoutes from './routes/auth.route.js';

      app.use('/api/auth', authRoutes);
Create *\BasicMERNapp\api\controllers\auth.controller.js*

      


Commit changes and upload to origin



[Home](/READme.md)

