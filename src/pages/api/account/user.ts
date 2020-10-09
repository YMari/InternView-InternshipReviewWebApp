import { NextApiRequest } from 'next'
import container from '../../../lib/container'
import { IMiddleware, M_TYPES, IResponseWithIssuer } from '../../../lib/middleware'


const midWare = container.get<IMiddleware>(M_TYPES.IMiddleWare)


export default midWare.withUser(async function register(
    req: NextApiRequest,
    res: IResponseWithIssuer
){

    if (req.method==='GET') {
        res.status(200)
        res.json({data:res.user})
    }
    else {
        res.status(405)
    }

})