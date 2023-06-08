const express = require("express")
const app = express()
const router = require("../routes/product.route")

app.use(router)

app.listen(6969, () => {
  console.log("start sever port 6969")
})
