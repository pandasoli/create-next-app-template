import { NextApiRequest, NextApiResponse } from 'next'


const Handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Hello, world!' })
  }

  res.setHeader('allow', [ 'GET' ])
  res.status(405).json({ method })
}


export default Handler