//guiin
//git add . - to save in local directory
//git  commit -a -m "a new file is added"(commit all changes)
//git  commit -a -m "a new file is added"
//[master (root-commit) 60f2bff] a new file is added
 //2 files changed, 1 insertion(+)
 //create mode 100644 app.js
 //create mode 100644 test.js
 //master is a local repisotory branch
 //then we need to push it on repisotory
 //remote is a pipeline which will connect to local with global reposotory.
 //we can use command but better use gui.
 //now give a remote name ,i.e, origin
 //now we will push,git push origin  master(branch name)
 //npm install -g nodemon - to save nodemon globally
 /*


 //npm install nodemon --save-dev - to install nodemon locally
//The --save-dev flag adds nodemon as a development dependency in your project's package.json file.
//
/*Create a script in your package.json: Open your package.json file in your project folder, and add a script to run your Node.js application with nodemon. Modify your scripts section like this:

json
Copy code
"scripts": {
  "start": "nodemon your-main-file.js"
}
Replace your-main-file.js with the entry point file of your Node.js application.

Start your application: Now, you can start your Node.js application using the following command:

sql
Copy code
npm start

*/
 /*

 bodu parser


In order to use body-parser in a Node.js project within Visual Studio Code (VS Code), you don't actually install it within VS Code itself, but rather within your Node.js project. body-parser is a middleware for parsing incoming HTTP request bodies. Here are the steps to install and use body-parser in your Node.js project:

Open a Terminal: Open a terminal or command prompt within your Node.js project directory. You can do this by navigating to your project folder in VS Code and then selecting "Terminal" > "New Terminal" from the top menu.

Install body-parser: Use npm (Node Package Manager) to install body-parser within your project. You should install it as a project dependency:

css
Copy code
npm install body-parser --save
The --save flag adds body-parser as a dependency in your project's package.json file.

Import and use body-parser: In your Node.js application code, import and use body-parser. Here's an example of how you might use it with an Express.js application:

javascript
Copy code
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Your routes and application logic go here

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Make sure to replace "Your routes and application logic go here" with your actual application logic.

Start your application: Run your Node.js application as you normally would. You can use the node command to start your application script:

Copy code
node your-app.js
Replace your-app.js with the filename of your Node.js application entry point.

With these steps, you've successfully installed and used body-parser in your Node.js project in Visual Studio Code. It will help you parse incoming request bodies in your application.


*/

/*

git init

# Add the changes to the staging area
git add package.json

# Commit the changes
git commit -m "Add repository field to package.json"

# Add your remote repository URL (if not already added)
git remote add origin https://github.com/your-username/your-repo.git

# Push your changes to the remote repository
git push -u origin master


The error message you're encountering, "Cannot find module 'express'", suggests that your Node.js application is trying to use the Express.js framework, but the 'express' module is not installed or not properly imported. To resolve this issue, you should follow these steps:

Install Express.js:

Make sure that you have Express.js installed as a dependency in your project. You can do this using npm (Node Package Manager) by running the following command in your project's directory:

bash
Copy code
npm install express --save
The --save flag will add Express.js as a dependency in your project's package.json file.







*/