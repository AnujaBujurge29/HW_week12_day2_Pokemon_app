// Load Express
const express = require("express");
const app = express();
// Port Variable
const port = 3000;

// Routes
app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!!')
})


// Tell express to Listen
app.listen(port, () => {
    console.log(`Port: ${port}`);
  });
  