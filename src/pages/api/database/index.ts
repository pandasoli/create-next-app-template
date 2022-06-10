import { Db, MongoClient } from 'mongodb'
import UserType, { BlankUser } from '../models/User'


class Datbase {
  private client = {} as MongoClient
  public db = {} as Db

  public async connect() {
    this.client = new MongoClient(process.env.mongoUri as string)
    await this.client.connect()

    this.db = this.client.db('Inken')
  }

  public end() {
    this.client.close()
  }
}


export default Datbase