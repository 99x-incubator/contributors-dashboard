//imports
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

//to avoid cors errors
const cors=require('cors');
app.use(cors());

//Setting up body parser
//making the request body in the JSON format
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//setting the person routes
const topcontributorsRoute = require('./routes/topcontributors');
app.use('/topcontributors', topcontributorsRoute);

//Defining the port
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
