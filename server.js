// Load Express
const express = require("express");
const app = express();
const port = 3000; // Port Variable
const pokemon = require('./models/pokemon') // Import Data

//======================== Middlware=================================
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
// ====================Routes =======================================
// Home Page 
app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!!')
})
// Index Page with list of Pokemon Names
app.get('/pokemon', (req,res)=>{
    res.render('Index', { pokemon : pokemon })
})
// Show page with each pokemon details
app.get('/pokemon/:id',(req, res)=>{
    res.render('Show', //second param must be an object
    { pokemon: pokemon[req.params.id] }
    );
})
// ============================ Listen ===============================
// Tell express to Listen
app.listen(port, () => {
    console.log(`Port: ${port}`);
  });