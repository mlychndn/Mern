const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "./config.env") });

const app = require("./index");
const mongoose = require("mongoose");

console.log(process.env.PORT);

const db = process.env.URL.replace("<PASSWORD>", process.env.PASSWORD);

// mongodb connection
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection succesful ❤️");
  })
  .catch((err) => {
    console.log(`error is ${err.message}`);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
