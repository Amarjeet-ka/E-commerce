const express = require('express');
const app = express();

app.get("/",function(res,req){
    res.send('Ecommerce server')
});

app.use(function(res,req,next){
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
    next();
});

const port = process.env.REACT_APP_PORT || 5000;

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});
