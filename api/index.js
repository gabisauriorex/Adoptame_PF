const app = require("./src/app");
const { conn } = require("./src/db");

conn.sync( {force: false }).then( () => {
    app.listen(3000, () => {
        console.log("Listening port 3000")
    })
})