// import qs from 'qs';
const qs = require('qs');
import router from 'umi/router';

const post = (url: string, params: object): any => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  }).then(res => {
    if(res.status ===401 ) {// token 已过期
       router.replace("/login")
       return {
         code:401
       }
    }
    if(res.status===200) { // 请求成功
      return res.json();
    }
  }).catch(error => console.log('success',error))
};
const get = (url: string): object => {
  const sendUrl = `${url}}`
  return fetch(url, {
    method: 'GET',
    // body: JSON.stringify(params),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  }).then(res => {
    if(res.status ===401 ) {// token 已过期
      router.replace("/login")
      return {
        code:401
      }
   }
   if(res.status===200) { // 请求成功
     return res.json();
   }
  });
};

export { post,get };
