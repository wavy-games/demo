README

SETUP

Delete
  node_modules/
  package.json
  package-lock.json

Create folder

> npm init -y

> npm install pixi.js

npm install pixi.js@7.4.0   

Create a launch.json file

    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Open index.html",
            "url": "http://localhost:5502",
        }


RUNNING ON LOCALHOST

Start Live Server

From Chrome, navigate to http://localhost:5502


DEPLOYING TO GOOGLE DRIVE / DRIVETOWEB

1. Uncomment rootDir import map variable in index.html for web deployment.
   Check the app name in the path.

2. Log into Google Drive with wavy.at.home@gmail.com account

3. Upload the project directory to Google Drive
   Rename the project folder if necessary.  The folder name must match the name in the import path.

4. Log into DriveToWeb with wavy.at.home@gmail.com account

5. Get link to the uploaded web app

NOTE:  Watch out for file caching by DriveToWeb!!!
