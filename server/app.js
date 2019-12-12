const express = require("express")
const cors = require("cors")

const EvolutionRouter = require("./router/Evolution")
const A = require("./router/a")

const app = express();
const port = 5000
app.listen(port,()=>{
    console.log(`服务器开启，监听${port}端口`)
})

app.use(cors({
    origin:["http://127.0.0.1:8088","http://localhost:8088"],
    credentials:true
}))

// 挂载路由
app.use("/game",EvolutionRouter)
app.use("/game",A)