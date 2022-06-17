import { BlankUser } from '../../models/users/register'
import { Response } from '../../models/users/get'
import GetUser from '../../database/get/user'
import Database from '../../database'


const VerifyUser = async (_id: string): Promise<Response> => {
  const res = { status: 0, data: BlankUser }

  if (_id) {
    try {
      const database = new Database
      await database.connect()

      const collection = database.db.collection('users')

      const response = await collection.updateOne({ _id }, { verificated: true })
      const user = await GetUser('_id', response.upsertedId)

      if (user.status !== 0) {
        res.status = 1
        return res
      }

      res.status = user.status
      res.data = user.data
    }
    catch { res.status = -1 }
  }

  return res
}


export default VerifyUser