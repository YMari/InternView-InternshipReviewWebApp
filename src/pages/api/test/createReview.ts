import { NextApiRequest, NextApiResponse } from 'next';
import container from '../../../lib/container';
import * as app from '../../../lib/application';
import {ERROR_MESSAGE} from '../../../lib/application/constants';
import * as re from '../../../lib/domain/review';

export default async function createReview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ser = container.get<re.IReviewRepository>(re.R_TYPES.IReviewRepository);
  
}