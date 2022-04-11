import { LogInfo, LogError } from "../utils/logger";
import { Response, Request,Router } from "express";
import { goodbyeController } from "../Controllers/goodbyeController";

//http://localhost/api/goodbye?name=yourName
const goodbyeRouter = Router();

//GET
goodbyeRouter.get("/",async(req:Request, res:Response)=>{
    const name:any= req?.query?.name;
    LogInfo(`QueryParams: ${name}`);

    const controller:goodbyeController=new goodbyeController();
    
    controller.getResponse(name)
    .then(response=> res.send(response))
    .catch(err=>{
        LogError(err);
    })
})


export default goodbyeRouter;

