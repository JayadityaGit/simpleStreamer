import express, { NextFunction, Request, Response } from "express"
import createHttpError, {isHttpError} from "http-errors";
import { router } from "./Router/appRouter";


export const app = express();

    app.use(express.json())


      
   app.use("/", router)


   app.use((req, res, next)=>{
     next(createHttpError(404, "ikkada em ledu ra babu venaki vellu"))
   })

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   app.use((error: unknown, req: Request, res: Response, next: NextFunction)=>{
                console.error(error)

                let errorMessage = "unknow error occured"
                let statusCode = 500

                if(isHttpError(error)){
                    errorMessage = error.message;
                    statusCode = error.status
                }

                res.status(statusCode).json({error: errorMessage})
   })








   
   