import { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie'


export default async function logout(req:NextApiRequest, res:NextApiResponse) {

    const co = cookie.serialize('auth', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', 
        sameSite: 'strict',
        maxAge: 0,
        path: '/'
    })

    res.setHeader(
        "Set-Cookie",
        co
    );

    res.status(200).end()

}