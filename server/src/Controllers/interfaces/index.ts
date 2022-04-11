import { BasicResponse, ResponseOfGoodbye } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

/**
 * interface of goodbye
 */
export interface IGoodbyeController {
    getResponse(name?:string):Promise<ResponseOfGoodbye>
}