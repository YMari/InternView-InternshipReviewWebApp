import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { stringify } from 'querystring';
import container from '../../../lib/container'
import * as st from '../../../lib/domain/student'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
//   const db = await sqlite.open('./mydb.sqlite');

  const ser = container.resolve(st.StudentService)

  if (req.method === 'POST') {
    hash(req.body.password, 12, async function(err, hash) {
      // Store hash in your password DB.

      const output = await ser.registerStudent(
        {
            name: req.body.name,
            email: req.body.email,
            universityId: req.body.universityId,
            studyProgramId: req.body.studyProgramId,
            passwordHash: hash
        }
      )
    //   const statement = await db.prepare(
    //     'INSERT INTO Student (name, email, password) values (?, ?, ?)'
    //   );
    //   const result = await statement.run(req.body.name, req.body.email, hash);
    //   result.finalize();

    //   const person = await db.all('select * from person');
      res.json(output);
    });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}