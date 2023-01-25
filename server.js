const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

const db = require("./server/models");

db.sequelize.sync();
//drop table if exisits 
// db.sequilize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db");
// });
// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "welcome to the server" })
// })
//set routes
const apple =require("./server/routes/tutorial.routes");
apple(app);

//set port

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}.");
});