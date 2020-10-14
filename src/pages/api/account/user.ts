import {NextApiResponse } from 'next'
import container from '../../../lib/container'
import { IMiddleware, M_TYPES, IRequestWithIssuer } from '../../../lib/middleware'


const midWare = container.get<IMiddleware>(M_TYPES.IMiddleWare)


export default midWare.withUser(async function register(
    req: IRequestWithIssuer,
    res: NextApiResponse
){

    if (req.method==='GET') {
        res.status(200)
        res.json({data:req.user})
    }
    else {
        res.status(405)
    }

})