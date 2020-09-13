import { NextApiRequest, NextApiResponse } from 'next';

export default async function reviewByID(req: NextApiRequest, res: NextApiResponse) {

    res.json({hello: 'world', id: req.query.id, method: req.method});
} 

// TODO: add functions for adding, editing, and removing reviews.