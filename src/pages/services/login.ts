import {post} from '@utils/index'

export async function login(params:object) {
   const data = await post('http://localhost:7001/login',params)
  //  console.log('是否成功拿到数据',data)
   return data;
}
export default login
