const express = require('express');
const mongoose = require('mongoose');
const error = require('./middleware/error');
const invalidRoute = require('./middleware/invalidRoute');
const routeLogger = require('./middleware/routeLogger');
const helmet = require('helmet');
const app = express();
const port = 3000;

const blogRoute = require("./routes/blogs");
app.use(express.json());
app.use(express.urlencoded());
app.use(routeLogger);
app.use(error);
app.use(helmet())
app.use('/v1/blogs',blogRoute);
app.use(invalidRoute);     //afterresgistering all blogs routes if requested route not found then this middleware gets executed

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect('mongodb://localhost/Blogs',{useNewUrlParser : true, useUnifiedTopology : true , useCreateIndex : true})
        .then(()=>console.log("DB Connected"));

