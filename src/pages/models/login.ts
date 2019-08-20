
import login from '../services/login';
import router from 'umi/router';

type C = {
  payload:any,
  put:any,
  call:any,
  select:any
};

export default {
  namespace:'login',
  state:[],
  effects:{
    *login({payload}:C,{put,call,select}:C){
       const data = yield call(login,payload)
       console.log('444444',data)
       if(data.data.user) {
         localStorage.setItem('token',data.data.token);
         router.replace('/');
       }
    }
  },
  reducers:{

  }
}
