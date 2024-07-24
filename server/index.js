const express = require('express')
require("dotenv").config();
const Routes = require("./routes/general")
const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json());

//sample route only will delete later
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1", Routes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})