## 🚀 Travel Vista Server

Welcome to the TravelVista Server repository! This project serves as the backend for the TravelVista application, a travel tips and destination guides platform.

### 🛠️ Technologies Used

- Node.js: Backend runtime environment.
- Express: Web framework for building RESTful APIs.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.
- JWT: JSON Web Tokens for secure authentication.
- Bcrypt: Password hashing and security.
- AmarPay: Payment system integration.

### 📁 Project Structure

- src/
- ├── app/
- ├── config/
- │ └── index.js
- ├── middlewares/
- │ └── errorHandler.js
- │ └── auth.js
- ├── Error/
- │ └── AppError.js
- ├── Module/
- │ ├── User/
- │ │ └── user.interface.js
- │ │ └── user.model.js
- │ │ └── user.service.js
- │ │ └── user.controller.js
- │ │ └── user.validation.js
- │ │ └── user.route.js
- │ ├── Post/
- │ │ └── post.interface.js
- │ │ └── post.model.js
- │ │ └── post.service.js
- │ │ └── post.controller.js
- │ │ └── post.validation.js
- │ │ └── post.route.js
- │ ├── Slot/
- │ ├── Payment/
- │ ├── Comment/
- │ ├── Follow/
- ├── routes/
- │ └── index.js
- ├── utils/
- └── connectDB.js
- app.js
- server.js

### ⚙️ Installation

1. Clone the Repository:

```bash
git clone https://github.com/your-username/TravelVista-Server.git
```

2. Install Dependencies:

```bash
npm install
```

3. npm install

```bash
   Environment Variables: Create a .env file in the root directory and configure the following:
```

3. Environment Variables: Create a .env file in the root directory and configure the following:

```bash
DATABASE_URL=your-mongodb-url
PORT=your-port
JWT_SECRET=your-secret-key
```

4. Run the Server:

```bash
npm run start
```

### 📋 Endpoints

#### Authentication

- Register User: POST /api/v1/auth/register
- Login User: POST /api/v1/auth/login

#### User

- Get User Details: GET /api/v1/users/:id
- Update User: PATCH /api/v1/users/:id

#### Post

- Create Post: POST /api/v1/posts
- Get All Posts: GET /api/v1/posts
- Update Post: PATCH /api/v1/posts/:id
- Delete Post: DELETE /api/v1/posts/:id

#### Payments

- Create Payment: POST /api/v1/payments
- et Payment Details: GET /api/v1/payments/:id

### 🧪 Testing

To run tests:

```bash
npm run test
```

### 🌐 Deployment
For deployment:

1. Install Heroku CLI and log in to your Heroku account:

```bash
heroku login
```

2.Create a Heroku App and push:

```bash
heroku create your-app-name
git push heroku main
```

### 📧 Contact

Feel free to reach out for any queries or issues.

```

```
