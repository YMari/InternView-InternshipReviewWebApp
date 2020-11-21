import { NextApiRequest, NextApiResponse } from 'next';
import container from '../../../lib/container';
import * as app from '../../../lib/application';
import {ERROR_MESSAGE} from '../../../lib/application/constants';
import * as re from '../../../lib/domain/review';

export default async function updateReview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ser = container.get<re.IReviewRepository>(re.R_TYPES.IReviewRepository);

  if (req.method === 'PUT') {
    let output = await ser.updateReview(Number(req.query.id), req.body as re.IReview)

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
    res.status(405).json({ message: 'We only support PUT' });
  }
}