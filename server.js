const express = require("express");
const mainRouter = require("./routes/mainRouters");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(mainRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});
