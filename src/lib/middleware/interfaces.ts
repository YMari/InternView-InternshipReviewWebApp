import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { IStudentDetailed } from "../domain/student/entities";



export interface IMiddleware {

    withUser: (fn: NextApiHandler) => (req: NextApiRequest, res: IResponseWithIssuer) => Promise<void>

}


export interface IResponseWithIssuer extends NextApiResponse<any>{

    user: IStudentDetailed

}