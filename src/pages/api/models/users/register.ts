import { ObjectId } from 'mongodb'


type UserType = {
  _id: ObjectId | null
  name: string
  email: string
  link: string
  validated: boolean
  password: string
}

const BlankUser: UserType = {
  _id: null,
  name: '',
  link: '',
  email: '',
  validated: false,
  password: ''
}


export { BlankUser }
export default UserType