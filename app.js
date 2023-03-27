const express = require("express")

const routerUser = require("./routes/usersRoutes.routes")
const repairController = require("./routes/repairRoutes.routes")

const app = express()

app.use(express.json());


app.use("/api/v1/users", routerUser)

app.use("/api/v1/repairs", repairController)



module.exports = app;



