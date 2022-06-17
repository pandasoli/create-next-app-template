import UserType, { BlankUser } from '../../models/users/register'
import { Response } from '../../models/users/get'
import Database from '../'


const GetUser = async (field: string, value: any): Promise<Response> => {
  const res = { status: 0, data: BlankUser }

  try {
    const database = new Database
    await database.connect()

    const collection = database.db.collection('users')

    const response = await collection.findOne({ [field]: value }) as UserType

    if (response === null)
      res.status = 1
    else
      res.data = response
  }
  catch { res.status = -1 }

  return res
}


export default GetUser