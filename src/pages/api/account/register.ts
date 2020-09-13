import { NextApiRequest, NextApiResponse } from 'next';

export default async function createAccount(req: NextApiRequest, res: NextApiResponse) {

    res.json({hello: 'world', id: req.query.id, method: req.method});
} 