# Cypress-Automation
"Cypress is a powerful end-to-end testing framework designed for modern web applications. As a software tester, i use Cypress to write automated tests that are fast, reliable, and easy to maintain."


How to start :
1. Clone the project
2. npm i - Install all the dependencies
3. npx cypress open - To run the test scripts in ui mode(headed)
4. npx cypress run - To run the test scripts in terminal(headless)

To run the file upload script : 
1. Install package --  npm install --save-dev cypress-file-upload
2. Add  to command.js in supports :  import 'cypress-file-upload';
3. Run test -- npx cypress run/npx cypress open.

To generate html report(mocha-awesome) : 
1.npx cypress run(report folder will be created after execution under project just open the index.html file in report folder on browser)
