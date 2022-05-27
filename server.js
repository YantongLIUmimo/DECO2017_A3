const express = require('express');
var path = require('path')
const app = express();

// app.use(express.static('dist'));
// app.use(express.static('public'));
app.use(express.static(__dirname + "/dist"));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
   })

let server = app.listen(1313, function(){
    console.log("App server is running on port 1313");
});

