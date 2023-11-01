const express = require('express')
const cors = require('cors')
const app = express()
const router = require("./routes")
const PORT = 9090;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );

  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });

  app.use("/api", router)