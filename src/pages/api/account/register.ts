import { NextApiRequest, NextApiResponse } from 'next';
import container from '../../../lib/container'
import * as app from '../../../lib/application'
import {ERROR_MESSAGE} from '../../../lib/application/constants';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {

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

    if ( output.status === ERROR_MESSAGE ) {
      res.status(400)
    }

    res.json(output);
    
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}