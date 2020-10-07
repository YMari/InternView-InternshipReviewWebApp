import { NextApiHandler } from "next";



export interface IMiddleware {

    authenticated: (fn: NextApiHandler) => Promise<void>

}