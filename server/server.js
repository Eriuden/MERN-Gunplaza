const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
require("dotenv").config({path: "./config/.env"})
require("./config/db")
const {checkUser, requireAuth} = require("./middleware/auth.middleware")
const cors = require("cors")
const GunplaRoutes = require("./routes/gunpla.route")
const userRoutes = require("./routes/user.route")
const app = express()

app.use(cors({origin: process.env.CLIENT_URL}))

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    "allowedHeaders": ["sessionId", "content-type"],
    "exposedHeaders": ["sessionId"],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.get("*", checkUser)
app.get("jwtid", requireAuth, (res) => {
    res.status(200).send(res.locals.user._id)
})

app.use("api/user", userRoutes)
app.use("api/gunpla", GunplaRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Mise a feu sur la rampe ${process.env.PORT}`)
})