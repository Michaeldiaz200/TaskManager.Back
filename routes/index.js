const userRoute = require("./userRoute")
const taskRoute = require("./taskRoute")


module.exports = (app)=>{
    console.log("Si")
    app.use(userRoute)
    app.use(taskRoute)
}