import { ObjectId } from 'mongodb'


type UserType = {
  _id: ObjectId | null
  name: string
  email: string
  link: string
  validated: boolean
  password: string
}

export type UserResponseType = {
  status: number
  data: UserType
}

const BlankUser: UserType = {
  _id: null,
  name: '',
  email: '',
  link: '',
  validated: false,
  password: ''
}


export { BlankUser }
export default UserType