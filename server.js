var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3001;
  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`Connected to local host:\n` + PORT)
  res.end(JSON.stringify(req.body, null, 2))
})



app.listen(PORT, function (){
   
    console.log("App listening on PORT: " + PORT);
    
});