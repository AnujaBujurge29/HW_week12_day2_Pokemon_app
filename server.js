// Load Express
const express = require("express");
const app = express();
// Port Variable
const port = 3000;

// Import Data
const pokemon = require('./models/pokemon')
// Middlware
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
// Routes
app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!!')
})

app.get('/pokemon', (req,res)=>{
    res.render('Index', { pokemon : pokemon })
})

// Tell express to Listen
app.listen(port, () => {
    console.log(`Port: ${port}`);
  });
  