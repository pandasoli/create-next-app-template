import Api from './api'


const Handler = async () =>
  (await Api.get('/')).data


export default Handler