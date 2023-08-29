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
# Basic MERN APP

# Client Side

## Table of Content

[Frame Front](#build-pages)

[Style](#style)

  * #### Build pages
    
    - create: */client/src/pages/*
    - add 5 pages:
      *Home.jsx*, *About.jsx*, *Profile.jsx*, *Signin.jsx*, *Signup.jsx*
    - use rfc to create 'react functional component'on each page

  * #### React Router Dom

    - use terminal in client folder:

        npm i react-router-dom

    advantage is speed on page experience
    
    - edit App.js introducing routes adding:

          import { BrowserRouter, Routes, Route} from 'react-router-dom';

      * edit module return to include *BrowserRouter*

             export default function App() {
              return (
                <BrowserRouter>{/*header*/}
                 <Header />
                 <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/sign-in" element={<SignIn />}/>
                  <Route path="/sign-up" element={<SignUp />}/>
                  <Route path="/profile" element={<Profile />}/>
                 </Routes>
              </BrowserRouter>
              );
            }

  * #### Create uniform page display using App.jsx as wrapper

Add folder and file:*client\src\components\header.jsx*

Adding *header.jsx* path to *App.jsx* above the routes makes each page have a uniform component called header.

**course introduces closing tag grammar:

    <Header />

Style the header using Tailwinds Css. Set up menubar and links.

Add links to the pages

     import {Link} from 'react-router-dom'



[Home](/READme.md)
