# CRUD API using Express.js and MongoDB
This is a simple RESTful API that performs CRUD operations (Create, Read, Update, Delete) on a collection in a MongoDB database. The API is built using Node.js, Express.js, and MongoDB. It provides endpoints to manage items in the database.

## Requirements
To run this project, you need to have the following installed on your machine:
1. Node.js
2. MongoDB

## Getting Started
Follow the instructions below to set up and run the project on your local machine.

## Prerequisites
Make sure you have Node.js and MongoDB installed on your machine.

1. Node.js: Download & Install Node.js
2. MongoDB: Download & Install MongoDB

## Installation
1. Clone the GitHub repository:


   ``git clone https://github.com/Rohit9113/CRUD-API.git``
2. Navigate to the project's directory:


    ``cd CRUD-API``
 
3. Install the dependencies:


    ``npm install``
    
## Configuration
Configure the MongoDB connection settings by updating the .env file in the project's root directory. You can use the .env.example file as a template.


``MONGODB_URI=<mongodb://0.0.0.0:27017/mycrudDB>``

``PORT=<3000>``

## Usage
### Starting the Server
To start the server, run the following command:

    npm start
    
    
The server will start running at the specified port.

## API Endpoints
The API exposes the following endpoints:

1. GET /api/items: Retrieves all items from the database.
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/e2447c4b-3cff-41af-8a15-76f304e08f95)


    #### Database:-
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/5e71395b-a39b-4850-a90c-56e3aaa40510)


3. GET /api/items/:id: Retrieves a specific item by its ID.
     ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/0106b11b-0ad1-4548-a72b-8a9837324d40)


    #### Database:- 
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/8b2d0108-b249-4e55-b2fe-ab8cd8281110)


5. POST /api/items: Creates a new item in the database.
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/3a1e0330-078a-4151-8bef-352039db842c)

    #### Database
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/8fbccd80-1b95-47d4-999f-a7172ee9197e)


5. PUT /api/items/:id: Updates an existing item by its ID.
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/e8a79332-6c39-4266-9183-9e55ff92911f)


    #### Database:-
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/a223b51a-7bd8-4081-b76a-1b0f5152d027)


7. DELETE /api/items/:id: Deletes an item by its ID.
    ![image](https://github.com/Rohit9113/CRUD-API/assets/78945252/8d529902-e875-4a77-86b8-f19b4c53f9ee)
      


Make HTTP requests to these endpoints using your preferred HTTP client (e.g., Postman, cURL, or browser extensions).

## Error Handling
The API handles errors gracefully and returns meaningful error messages. Error responses follow a consistent structure with an HTTP status code and an error message.

## License
This project is licensed under the MIT License.
