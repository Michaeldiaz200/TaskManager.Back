const userRoute = require("./userRoute")
const taskRoute = require("./taskRoute")
const tagRoute = require("./tagRoute")


module.exports = (app)=>{
    console.log("Si")
    app.use(userRoute)
    app.use(taskRoute)
    app.use(tagRoute)
}