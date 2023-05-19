const express = require('express');
const app = express();
const connectdatabase = require('./config/database.js');
connectdatabase;
app.get("/",function(res,req){
    res.send('Ecommerce server')
});


app.use(function(res,req,next){
    res.status(404).send('\x1b[35m%s\x1b[0m',"Sorry, that route doesn't exist. Have a nice day :)");
    next();
});

const port = process.env.REACT_APP_PORT || 5000;

app.listen(port, function() {
    console.log( '\x1b[35m%s\x1b[0m',`Server running on port ${port}`);
});
