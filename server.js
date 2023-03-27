require("dotenv").config()
const app = require("./app")
const {db} = require("./database/config")


db.authenticate()
.then(() =>
console.log("database authenticate")
)
.catch((err) => console.log(err))

db.sync()
.then(() => console.log("database sync"))
.catch((err) => console.log(err))

const port = 3002

app.listen(3002, () => {
    console.log(port);
});
