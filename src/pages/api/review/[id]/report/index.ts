import { NextApiRequest, NextApiResponse } from 'next';

export default async function reportReview(req: NextApiRequest, res: NextApiResponse) {

    res.json({hello: 'world', method: req.method});
} 