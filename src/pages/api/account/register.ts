import { NextApiRequest, NextApiResponse } from 'next';
import container from '../../../lib/container'
import {ERROR_MESSAGE} from '../../../lib/application/constants';
import { IRegister } from '../../../lib/ui/entities'

interface RegisterRequest extends NextApiRequest {
  body: IRegister
} 

export default async function register(
  req: RegisterRequest,
  res: NextApiResponse
) {

  const ser = container.getAuthenticationService()

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