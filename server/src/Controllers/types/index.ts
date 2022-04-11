/**
 * Basic JSON response for Controllers
 */
 export type BasicResponse = {
    message: string
}

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}

/**
 * Response of goodbye
 */

export type ResponseOfGoodbye={
    status:number,
    message:string
}


/**
 * Error of goodbye
 */

export type ErrorOfGoodbye={
    status:number,
    error:string,
    message:string
}
