/*------------------------------- Starter Code -------------------------------*/

//Dependencies
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const prompt = require('prompt-sync')();


//Customer Model
const Customer = require('./models/customer');

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runProgram()

    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

    // Close our app, bringing us back to the command line.
    process.exit();
};

//CRUD Methods

const createCustomer = async () => {
    const customerData = {};

    let name = prompt('What is the customer name?');
    let age = prompt('What is the customer age?');
    customerData.name = name;
    customerData.age = age;

    const customer = await Customer.create(customerData);
    console.log('Customer creation successful')
    console.log('New Customer', customer);

};

const findCustomer = async () => {
    const customers = await Customer.find({});
    customers.forEach((customer) => {
        console.log(`Id: ${customer.id} --Name: ${customer.name} --Age: ${customer.age}`);
    })
};

const updateCustomer = async () => {
    await findCustomer();
    const id = prompt('What is the id number of the customer you would like to update?');
    const name = prompt('What is the new name? If it stays the same enter the current name.');
    const age = prompt('What is the new age? If it stays the same enter the current name.')

    const updateCustomer = await Customer.findByIdAndUpdate(
        id,
        {name, age},
    )
    console.log('Customer Update Successful');
};

const deleteCustomer = async () => {
    await findCustomer();
    const id = prompt('Enter the id number of the customer you would like to delete:')

    await Customer.findByIdAndDelete(id);
    console.log('Customer deletion was successful');

}

const runProgram = async () => {
    
    let actionsList = [
        { option: '1. Create a customer' },
        { option: '2. View all customers' },
        { option: '3. Update a customer' },
        { option: '4. Delete a customer' },
        { option: '5. Quit' },
    ]
    
    console.log('Welcome to the CRM');
    console.log('What would you like to do?');
    actionsList.forEach(item => { console.log(item.option) });
    const action = prompt('Number of action to run:');

    // The functions calls to run queries in our db will go here as we write them.
    if (action === '1') {
        console.log('Create a New Customer');
        await createCustomer();
    } else if (action === '2') {
        console.log('Find Customers');
        await findCustomer();
    } else if (action === '3') {
        console.log('Update Customer');
        await updateCustomer();
    } else if (action === '4') {
        console.log('Delete Customer');
        await deleteCustomer();
    } else if (action === '5') {
        console.log('Exiting the program...')
    }
};

connect();
/*------------------------------ Query Functions -----------------------------*/

