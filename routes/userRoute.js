const Express = require("express")
const router = Express.Router()
const jwt = require("jsonwebtoken")
const { User } = require("../models")

async function auth(req, res, next) {
    try {
        let token = req.headers['authorization'];
        let resultadoToken = jwt.verify(token, '@Ebrat182529');
        let usuario = await User.findOne({
            where: {
                id: resultadoToken.id
            },
            attributes: { exclude: ['password'] }
        });
        req.user = usuario;
        next();
    } catch (err) {
        req.err = err
    }
}

router.post("/login", async (req, res) => {

    console.log(req.body.email)
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        })

        if (!user) {
            res.json({ message: "Correo Incorrecto" })
        } else {
            if (user.password !== req.body.pass) {
                res.json({ message: "Contraseña Incorrecta" })
            } else {
                const token = jwt.sign({ id: user.id }, "@Ebrat182529", { expiresIn: '180000s' })
                res.json({ token, message: "Success" })
            }
        }
    } catch (error) {
        res.json({ error: error.message })
    }
})

router.post("/singup", async (req, res) => {

    console.log(req.body)
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.pass
        })

        const token = jwt.sign({ id: user.id }, "@Ebrat182529", { expiresIn: '180000s' })
        res.json({ user: user, token, message: "Registrado Correctamente" })
    } catch (error) {
        res.json({ error: error, message: "Error" })
    }
})

router.get("/infoUser", auth, async (req, res)=>{
    if(req.user){
        const user = req.user
        res.json({user, message: "OK"})
    }else{
        res.json({error: req.err, message: "Error Inesperado"})
    }
})

module.exports = router