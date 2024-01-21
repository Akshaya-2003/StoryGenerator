//index.js
import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import { Login } from "./models/Signup.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Hello")
});

app.post('/login', (request, response) => {
    console.log('Received login request:', request.body);

    const { email, password } = request.body;
    Login.findOne({ email: email })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        console.error('Login error:', err);
                        response.status(500).json({ error: 'Internal Server Error' });
                    } else if (result) {
                        response.json("Success");
                    } else {
                        response.json("Password is incorrect");
                    }
                });
            } else {
                response.json("No record found");
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            response.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/register', async (request, response) => {
    console.log('Received registration request:', request.body);

    try {
        const { username, email, password } = request.body;

        // Check if the user already exists
        const existingUser = await Login.findOne({ email });
        if (existingUser) {
            return response.status(400).json({ error: 'User already exists' });
        }

        // If the user doesn't exist, proceed with registration
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Login.create({
            username,
            email,
            password: hashedPassword,
        });

        console.log('Registration successful:', user);
        response.json(user);
    } catch (error) {
        console.error('Registration error:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

mongoose.connect(mongoDBURL)
        .then( () => {
            console.log('App is connected to database');
            app.listen(PORT, () => {
                console.log(`App is listening to port: ${PORT}`);
            });
        })
        .catch( (error) => {
            console.log(error);
        });
