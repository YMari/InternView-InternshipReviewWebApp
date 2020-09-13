import { NextApiRequest, NextApiResponse } from 'next';

export default async function getAccountByID(req: NextApiRequest, res: NextApiResponse) {
    
    res.json({hello: 'world', id: req.query.id, method: req.method});
} 