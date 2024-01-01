import { app } from "./app";
import "dotenv/config"
import env from "./util/validatEnv"


const port = env.PORT;


app.listen(port, ()=>{
    console.log("server has been started on port "+port)
})


