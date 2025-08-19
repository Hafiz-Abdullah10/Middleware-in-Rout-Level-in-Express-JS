let express = require("express")
const { checkToken } = require("./CheckTokenMidWare")
let app = express()
app.use(express.json())


//app.use(checkToken)


app.get("/", (req, res)=>{
    res.send({status : 1, msg: "Home Page API"})
})

app.get("/news", checkToken ,(req, res)=>{
    res.send({status : 2, msg: "News API"})
})

app.get("/product", (req, res)=>{
    res.send({status : 3, msg: "Prodecut API"})
})

app.get("/login", (req, res)=>{
    res.send({status : 4, msg: "Login API"})
})

app.listen("8000")