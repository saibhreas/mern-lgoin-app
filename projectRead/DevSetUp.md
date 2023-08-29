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

# Development Environment Setup

Set the object environment for development

Establish a workspace or folder for repository/folder. This was done locally, then uploaded to GitHub.  Almost all editing was done locally in VS Code, however data was manipulated via Mongo DB Atlas and Mondo DB Compass.

  * Open terminal in root directory

        git init mern-lgoin-app

Add NPM package manager using the terminal initial UI framework

  * npm create vite@latest client 

      Choose React framework from the drop down list

      Choose JavaScript + SWC (faster than 'Create React app)


Dependencies:
  - cd to folder for client side

        npm install
        npm run dev
        npm install -D Tailwindcss postcss autoprefixer
        npx tailwindcss init -p

Strip out unnecessary files/delete: *vite.svg* and *react.svg*


Edit *\BasicMERNapp\client\src\index.css* to use Tailwinds. Replace contents with:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Use VS Code extension ES7 + ReactRedux/React-Native snippets to edit *\BasicMERNapp\client\src\App.jsx*. Replace contents with:

    rfc

Test basic build:

    npm run dev

Your response should look like this:

    > client@0.0.0 dev
    > vite


    VITE v4.4.9  ready in 1668 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help

### **Before usig Git Source Control teate a *.gitignore* to stop unnecessary files from being under control**

Commit changes and upload to origin

[Home](/READme.md)

