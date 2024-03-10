const Express = require("express")
const app = Express()
const cors = require("cors")
require("dotenv").config()
const route = require("./routes/index.js")

const port = process.env.PORT || 4000
app.use(cors({
    origin: "https://front-task-manager-sigma.vercel.app",
    methods: ['POST', 'GET', 'PATCH', 'DELETE', "OPTIONS", "PUT"],
    allowedHeaders: ['Content-Type', 'authorization','Authorization', "X-Powered-By", "Access-Control-Allow-Origin"]
}))
app.use(Express.json())
route(app)

app.get("/", (req, res)=>{
    res.send("Hola")
})
app.listen(port, ()=>{
    console.log("Server run port ", port)
})