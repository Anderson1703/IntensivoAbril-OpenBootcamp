import {IGoodbyeController} from "./interfaces/index";
import {ResponseOfGoodbye} from "./types/index";
import {LogInfo} from "../utils/logger";


export class goodbyeController implements IGoodbyeController {
/**
 *  endpoint to get goodbye
 */
    public async  getResponse(name?: string): Promise<ResponseOfGoodbye> {
       LogInfo("[/api/goodbye]: getting Response");

        return{
            status:200,
            message:`goodbye ${name || "word"}`
        }
    }
    
}