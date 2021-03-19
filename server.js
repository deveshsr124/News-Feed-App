const express = require("express");


const app = express();

app.use(express.static("public"));

const port=process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
})


app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

});