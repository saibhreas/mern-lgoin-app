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


Github User: https://github.com/saibhreas
Email: fullstack@saibhreas.com

## Purpose

Review basic MERN application development

## Table of Content
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [App development](#appdevelopment)
  4. [Usage](#usage)
  5. [Technologies](#technologies)
  6. [Links](#links)
  
  
## Description

### This file is two part example my work. 

#### Part One:  **READme.md** chronicles the progression through the Udemy course
>  MERN Auth: Full-Stack MERN App Mastery by Dr. Sahand Ghavidel Web Developer

This READme.MD is published as a demonstration of basic:

* Documentation standards
* Technical writing
* Understanding of technical concepts
* Example of writing style

#### Part Two **mern-lgoin-app** is a currently work in progress building a basic functioning MERN based login authroization app.

*  review of MERN App generation concepts.  
* Very basic app that is mobile first, displaying:
  - Initial Sign up
  - Login/Authorization
  - Profile page
  - Logout functionality
  - Update functionality

Demonstrate grasp of software

* Reactjs
* Nodejs + Vite

## Installation

### Development environment is VS Code

- may need to install extensions:

  * Prettier
  * Tailwind CSS Intellisense
  * Auto Rename Tag
  * ES7+ React/Redux/React-Native snippets
  * Console Ninja

NPM create vite@latest client 
* REACT
* JavaScript + SWC

Dependencies:
  - cd to folder for client side
  * npm install
  * npm run dev
  * npm install -D Tailwindcss postcss autoprefixer
  * npx tailwindcss init -p

Strip out unnecessary files/delete:
* vite.svg and react.svg
* App.jsx: contents need to be changed
  - delete contents and replace by typing 'rfc'(react functional component)

### Run

* currently just building client side
  - cd client
  - npm run dev

response should look like this:

    VITE v4.4.9  ready in 851 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help


## App Development

### Client Side

  * #### Build pages
    
    - create /client/src/pages/
    - add 5 pages:
      home.jsx, about.jsx. profile.jsx, signin.jsx, signup.jsx
    - use rfc to create 'react functional component'on each page

  * #### React Router Dom

    - use terminal in client folder:

        npm i react-router-dom

    advantage is speed on page experience
    
    - edit App.js introducing routes

  * #### Create uniform page display using App.jsx as wrapper

    - cd to source and add folder: components
    - introduce concept of components
    - create header component: header.jsx
    - add import line to App.jsx
    - introduce closing tag grammar: 

           <Header />
    - introduce Tailwinds concepts.
    - Add links to the pages

            import {Link} from 'react-router-dom'

### Server Side Development

Server is Node js with Mongo Database

* cd to main folder abd initialize package.json

  - edit package.json with:

        "type": "module",

* create **api folder** to house backend
* create index.js

       import express from 'express';

* test server by entering in terminal:

        http://localhost:5173/



#### Server nodejs dependencies

    * npm i express
    * npm i nodemon


## Usage

Free to read and fork. 

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Technologies

* Node JS

## Links

https://auth.100jsprojects.com/
