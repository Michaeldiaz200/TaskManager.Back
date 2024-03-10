const Express = require("express")
const router = Express.Router()
const { Task } = require("../models")

router.post("/new-task", async (req,res) => {
    try {
        const task = await Task.create({
            UserId:req.body.id,
            title: req.body.title,
            description: req.body.description,
            dateEnd: req.body.dateEnd,
            state: req.body.state,
        })

        res.json({task, message: "Tarea Creada"})
    } catch (error) {
        res.json({error: error.message})
    }
})

router.post("/get-Task", async (req,res)=>{
    try {
        const task = await Task.findAll({
            where:{
                UserId: req.body.id
            }
        })

        res.json({task, message: "OK"})
    } catch (error) {
        res.json({error,message:"Error inesperado"})
    }
})

module.exports = router