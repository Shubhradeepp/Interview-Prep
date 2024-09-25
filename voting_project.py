# Can you explain the overall architecture of your e-Voting system?

The e-Voting system is built using an MVC (Model-View-Controller) architecture. The backend is developed using Node.js and Express.js, and MongoDB is used as the database. In this architecture:

The Model represents the data schema and business logic, managing users, voting statuses, and candidates.
The Controller handles the requests coming from the client and interacts with the model to fetch or modify data.
The View in this case would be the REST API responses, though since it's a backend project, the views are in JSON format.
This separation allows us to manage data flow efficiently and scale various components of the system independently, like adding more voting categories or handling different types of elections.



# Why did you choose to use MVC architecture for this project? What advantages did it offer?

The MVC architecture provides clear separation of concerns, which is crucial for a system that handles critical actions like voting. It allowed me to:

Keep the code modular and reusable, making it easier to maintain.
Decoupling
Scale the system by separating concerns such as user management and vote processing.


# How does your system handle user authentication and prevent unauthorized access?

The system uses JWT (JSON Web Token) for user authentication. When a user logs in, the server generates a JWT and sends it back to the client. This token contains encrypted information about the user and is required for accessing protected routes, such as casting a vote.  [tokengeneration()]

Additionally, I implemented middleware to check whether a token is present and valid before allowing users to vote or access admin functionalities. [tokenvalidation()]


#Sequrity Features

To secure the voting process:

JWT Authentication: Each user must be authenticated via JWT before they can vote. This ensures that only registered and authenticated users can cast votes.

Vote Limitation: I added checks in the database to ensure that each user can vote only once. Once a vote is cast, the user’s voting status is updated, preventing double voting.

Role-based Access Control (RBAC): Only admins can add candidates, while regular users can only vote.

Data Encryption: Sensitive data, including tokens and passwords, is encrypted both in transit (using HTTPS) and at rest.

Voting Integrity: Each user is allowed only one vote. Before recording a vote, the system checks if the user has already voted. If they have, the system returns an error and prevents further voting.

# Can you explain how you implemented JWT for user authentication in the e-Voting System? How does it ensure robust security?

Me: Absolutely. In the e-Voting System, I implemented JWT (JSON Web Token) for user authentication to ensure robust security. JWT is a widely-used standard for authentication that provides a secure way to verify the identity of users. When a user logs in, a unique token is generated and sent back to the client, which is then stored in local storage. This token is used to authenticate the user for subsequent requests to the API.

To ensure robust security, I implemented token validation on every API request. The token is validated by checking its signature, expiration date, and issuer. If the token is invalid or has expired, the user is redirected to the login page.

# Can you walk me through your design decisions for using Node.js, Express.js, and MongoDB in the e-Voting System's backend?

Me: When designing the backend for the e-Voting System, I chose Node.js as the runtime environment due to its scalability, performance, and ease of use. I used Express.js as the web framework because of its simplicity, flexibility, and extensive ecosystem of packages. For the database, I chose MongoDB due to its scalability, flexibility, and ability to handle large amounts of data.

I designed the backend to be modular, with separate modules for user authentication, candidate management, and voting. This allowed me to easily maintain and update individual components without affecting the entire system.

# How did you implement the RESTful API endpoints for user registration, login, candidate management, and voting? Can you provide an example of a specific endpoint?

Me: I implemented the RESTful API endpoints using Express.js and MongoDB. For example, the user registration endpoint is a POST request to /users that takes a JSON object with the user's details. The endpoint validates the user's input, checks for duplicate usernames, and creates a new user document in the MongoDB database. The endpoint returns a JSON response with the newly created user's details.



# How did you handle concurrent voting requests in real-time to ensure accurate vote recording?
Atomic transactions in MongoDB : =>
To handle concurrent voting, I relied on atomic transactions in MongoDB. When a user votes, their voting status is updated simultaneously with the vote being cast. MongoDB handles this atomically, ensuring that race conditions are avoided. Additionally, if multiple vote requests are received at the exact same time, only the first request is processed, while the others are rejected after checking the voting status.




#voting Algo

http://locaIhost:3000/candidate/vote/65d1d02ae04275593a03dc041  //Parametrised API calls 

router.post('/vote/:candidateID')

candidate.votes.push({user: userId})
        candidate.voteCount++;
        await candidate.save();

        // update the user document
        user.isVoted = true
        await user.save();


   #schema Reference
   votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',   #ref from user schema with id
                required: true
            },]


# Features
User sign up and login with Aadhar Card Number and password
User can view the list of candidates
User can vote for a candidate (only once)
Admin can manage candidates (add, update, delete)
Admin cannot vote





# Authentication Routing
Sign Up
POST /signup: Sign up a user
Login
POST /login: Login a user
Candidates
Get Candidates
GET /candidates: Get the list of candidates
Add Candidate
POST /candidates: Add a new candidate (Admin only)
Update Candidate
PUT /candidates/:id: Update a candidate by ID (Admin only)
Delete Candidate
DELETE /candidates/:id: Delete a candidate by ID (Admin only)
Voting
Get Vote Count
GET /candidates/vote/count: Get the count of votes for each candidate
Vote for Candidate
POST /candidates/vote/:id: Vote for a candidate (User only)
User Profile
Get Profile
GET /users/profile: Get user profile information
Change Password
PUT /users/profile/password: Change user password



#Only 1 Admin
In my e-voting system, I implemented a check within the user creation process to ensure that only one admin can exist at any given time. This is achieved by adding logic in the pre-save hook of the Mongoose schema.

Whenever a user is being saved with the admin role, the system first performs a query to check if an admin already exists in the database. I use the findOne() method to look for any user with the role set to admin. If such a user exists, the system throws an error, preventing the new user from being created as another admin. This ensures that no more than one admin can ever exist.


// Pre-save hook to hash password and check for existing admin
userSchema.pre('save', async function (next) {
    const person = this;

    // If the user is being created with the 'admin' role, check if an admin already exists
    if (person.role === 'admin') {
        const existingAdmin = await mongoose.models.User.findOne({ role: 'admin' });
        if (existingAdmin) {
            const error = new Error('An admin already exists. Only one admin is allowed.');
            return next(error);
        }
    }
}