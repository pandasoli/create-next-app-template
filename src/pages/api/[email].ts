import { NextApiRequest, NextApiResponse } from 'next'
import GetUserByEmail from './controllers/users/get/byEmail'


const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req

  if (req.method === 'GET') {
    try {
      return res.status(200).json(
        await GetUserByEmail(query.email as string)
      )
    }
    catch (err) {
      return res.status(500).json({
        message: '[ERROR /api/<username>]: ' + err
      })
    }
  }

  res.setHeader('allow', [ 'GET' ])
  res.status(405).json({ method })
}


export default Handler