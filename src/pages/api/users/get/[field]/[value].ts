import { NextApiRequest, NextApiResponse } from 'next'
import DBGetUser from '../../../database/get/user'


const GetUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req

  if (req.method === 'GET') {
    const response = await DBGetUser(query.field as string, query.value)

    if (response.status !== -1)
      return res.status(200).json(response)

    return res.status(500).json(response)
  }

  res.setHeader('allow', [ 'GET' ])
  res.status(405).json({ method })
}


export default GetUser