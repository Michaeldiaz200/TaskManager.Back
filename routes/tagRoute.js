const Express = require("express")
const router = Express.Router()
const { Tag } = require("../models")

router.post("/create-tag", async (req, res) => {
    try {
        const tag = await Tag.create({
            UserId: req.body.userId,
            nameTag: req.body.name
        })

        res.json({ tag, message: "OK" })
    } catch (error) {
        res.json({ error, message: "Error inesperado" })
    }
})

router.post("/read-tag", async (req,res)=>{
    console.log(req.body)
    try {
        const tag = await Tag.findAll({
            where: {
                UserId: req.body.userId
            }
        })

        res.json({tag, message: "Ok"})
    } catch (error) {
        res.json({error: error.message, message: "Error inesperado"})
    }
})

module.exports = router