import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { IStudent } from "../domain/student/entities";



export interface IMiddleware {

    withUser: (fn: NextApiHandler) => (req: IRequestWithIssuer, res: NextApiResponse) => Promise<void>

}


export interface IRequestWithIssuer extends NextApiRequest{

    user: IStudent

}