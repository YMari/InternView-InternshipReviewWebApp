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

  if (req.method === 'POST') {
    let output = await ser.createReview(
      {
        content: req.body.content,
        date: req.body.date,
        anonymous: req.body.anonymous,
        email: req.body.email,
        experienceType: req.body.experienceType,
        degreeType: req.body.degreeType,
        score: req.body.score,
        location: req.body.location,
        salary: req.body.salary,
        duration: req.body.duration, // in weeks? idk
        interviewDifficulty: req.body.interviewDifficulty,
        reviewTitle: req.body.reviewTitle,
        company: req.body.company, // Might be company interface?
        interviewQuestions: req.body.interviewQuestions
      }
    )

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
    res.status(405).json({ message: 'We only support POST' });
  }
}