// Load Express
const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon"); // Import Data
require("dotenv").config(); // Add dotenv

// Manogoose Connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
// MiddleWare
//======================== Middlware=================================
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false })); ///?????

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// =======================Routes ====================================
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Index Page with list of Pokemon Names
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", { pokemon: allPokemon }); // 2nd para object  // sample(1st) = data/variable to pass to Index  // pokemon(2nd)= data from ./models/pokemon file
  });
});
// Show page with each pokemon details
// app.get("/pokemon/:id", (req, res) => {
//   res.render(
//     "Show", //second param must be an object
//     { pokemon: pokemon[req.params.id] }
//   );
// });
app.get("/pokemon/new", (req, res) => {
  res.render("../views/New");
});
// =============================Create =========================
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    // res.send(createdPokemon)
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", { Pokemon: foundPokemon, });
  });
});
// ============================ Listen ===============================
// Tell express to Listen
app.listen(process.env.PORT, () => {
  console.log(`Port: ${process.env.PORT}`);
});
