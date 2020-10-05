import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { stringify } from 'querystring';
import container from '../../../lib/container'
import * as app from '../../../lib/application'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
//   const db = await sqlite.open('./mydb.sqlite');

  const ser = container.get<app.application_interfaces.IAuthenticationService>(app.A_TYPES.IAuthenticationService)

  if (req.method === 'POST') {
    

    const output = await ser.register(
      {
          name: req.body.name,
          email: req.body.email,
          universityId: req.body.universityId,
          studyProgramId: req.body.studyProgramId,
          passwordHash: req.body.password
      }
    )

    if ( output.status === "Error" ) {
      res.status(400)
    }
      
    res.json(output);
    
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}