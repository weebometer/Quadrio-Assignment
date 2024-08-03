const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoutes = require('../../routes/adminRoutes');
const userRoutes = require('../../routes/userRoutes');
const carRoutes = require('../../routes/carRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/api/admin', adminRoutes);
app.use('/.netlify/functions/api/user', userRoutes);
app.use('/.netlify/functions/api/cars', carRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.log(err));

module.exports.handler = serverless(app);
