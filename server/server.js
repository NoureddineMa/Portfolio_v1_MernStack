const express = require('express');
require('dotenv').config()
const {router} = require('./Routers/authRouters');
const Blogrouters = require('./Routers/BlogRouters');
const ProjectRouters = require('./Routers/ProjetRouters');

// connect database
require('./Config/configDb').connect();
require('./Models/userSchema');

const PORT = process.env.PORT;
const app = express();
app.use(express.urlencoded ({extended: false}))
app.use(express.json())


app.use('/api/users', router);
app.use('/api/blog', Blogrouters);
app.use('/api/project', ProjectRouters);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
    }
);  


