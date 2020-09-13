import { NextApiRequest, NextApiResponse } from 'next';
// import sqlite from 'sqlite';

export default async function createAccount(req: NextApiRequest, res: NextApiResponse) {
    // const db = await sqlite.open('./mydb.sqlite');
    // const vehicle = await db.all('select * from vehicle');

    res.json({hello: 'world', id: req.query.id, method: req.method});
} 