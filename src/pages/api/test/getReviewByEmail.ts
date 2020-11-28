import { NextApiRequest, NextApiResponse } from 'next';
import container from '../../../lib/container';
import * as app from '../../../lib/application';
import {ERROR_MESSAGE} from '../../../lib/application/constants';
import * as re from '../../../lib/domain/review';

export default async function getReviewByEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ser = container.getReviewRepo()

  if (req.method === 'GET') {
    let output = await ser.getReviewByAuthorEmail(req.query.email as string)

    // Error checking, revise if error message is changed
    // if ( output.status === ERROR_MESSAGE ) {
    //   res.status(400)
    // }

    // else{
    //     res.status(200)
    // }
      res.json(output) 
  }
   else {
    res.status(405).json({ message: 'We only support GET' });
  }
}