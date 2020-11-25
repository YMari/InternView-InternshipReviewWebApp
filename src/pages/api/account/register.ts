import { NextApiRequest, NextApiResponse } from 'next';
import container from '../../../lib/container'
import {ERROR_MESSAGE} from '../../../lib/application/constants';
import { IRegister } from '../../../lib/ui/entities'
import { IStudent } from '../../../lib/domain/student';

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
      req.body as IStudent
    )

    if ( output.status === ERROR_MESSAGE ) {
      res.status(400)
    }

    res.json(output);
    
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}