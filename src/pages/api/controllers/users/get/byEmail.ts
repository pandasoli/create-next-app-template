import UserType, { BlankUser } from '../../../models/User'
import Database from '../../../database'


const GetUserByEmail = async (email: string) => {
  const res = { status: 1, data: BlankUser }
  const database = new Database()

  await database.connect()

  const collection = database.db.collection('users')
  const query = await collection.findOne({ email })

  if (query?._id) {
    res.status = 0
    res.data = { ...query as UserType, password: '' }
  }

  database.end()
  return res
}


export default GetUserByEmail