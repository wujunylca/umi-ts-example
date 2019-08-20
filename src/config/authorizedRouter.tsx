import * as React from 'react';
import Redirect from 'umi/redirect';

export default (props:any) => {
  // console.log('111111111111111',props)
  const token = localStorage.getItem('token');
  const isLogin = token !== null && token !== ''  && token.length >=1;
  // console.log('token',localStorage.getItem('token'))
  return (
    <div>
    {
      isLogin?props.children:<Redirect to="/login" />
      }
    </div>
  )
}
