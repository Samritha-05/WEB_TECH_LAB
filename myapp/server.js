const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
.then(() => console.log('Connected to MongoDB successfully.'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    state: { type: String, required: true },
    skills: { type: [String], required: true }
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/server', async (req, res) => {
    try {
        let { name, password, age, mobile, email, gender, state, skills } = req.body;

        if (typeof skills === 'string') {
            skills = [skills];
        } else if (!skills) {
            skills = [];
        }

        const newUser = new User({
            name,
            password,
            age,
            mobile,
            email,
            gender,
            state,
            skills
        });

        const savedUser = await newUser.save();
        const skillsFormatted = savedUser.skills.join(', ');

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>User Submitted Details</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 30px;
                    }
                    h2 {
                        color: blue;
                        text-decoration: underline;
                    }
                    table {
                        border-collapse: collapse;
                        width: 450px;
                    }
                    td {
                        border: 1px solid #ccc;
                        padding: 10px;
                        color: blue;
                    }
                    td:first-child {
                        font-weight: bold;
                        width: 40%;
                    }
                </style>
            </head>
            <body>
                <h2>User Submitted Details</h2>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>${savedUser.name}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>${savedUser.password}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>${savedUser.age}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td>${savedUser.mobile}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>${savedUser.email}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>${savedUser.gender}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>${savedUser.state}</td>
                    </tr>
                    <tr>
                        <td>Skills</td>
                        <td>${skillsFormatted}</td>
                    </tr>
                </table>
            </body>
            </html>
        `);
    } catch (err) {
        res.status(500).send('Error saving user data: ' + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});