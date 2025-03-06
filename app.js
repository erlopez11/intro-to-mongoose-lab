/*------------------------------- Starter Code -------------------------------*/

//Dependencies
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose'); 
const prompt = require('prompt-sync')();


//Customer Model
const  Customer = require('./models/customer');

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

//CRUD Methods

const createCustomer = async () => {
    
}



function actionPrompt() {

    let actionsList = [
        {option: '1. Create a customer'},
        {option: '2. View all customers'},
        {option: '3. Update a customer'},
        {option: '4. Delete a customer'},
        {option: '5. Quit'},
    ]

    console.log('Welcome to the CRM');
    console.log('What would you like to do?');
    actionsList.forEach(item => {console.log(item.option)});
    const action = prompt('Number of action to run:');
    console.log(`You chose action number ${action}`);
}

actionPrompt();

const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.
};

connect()
/*------------------------------ Query Functions -----------------------------*/

