const express = require('express')

var favicon = require('serve-favicon')
var path = require('path')
const app = express()


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});



const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
