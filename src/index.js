const express = require("express");
const dataSource = require ("./utils").dataSource;
const wilderController = require("./controller/wilder");
const skillController = require("./controller/skill");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.find);
app.put("/api/wilder", wilderController.update);
app.delete("/api/wilder", wilderController.delete);

app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.find);
app.put("/api/skill", skillController.update);
app.delete("/api/skill", skillController.delete);

const start = async() => {
  await dataSource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
};
start();