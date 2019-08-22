import * as React from 'react';
import Redirect from 'umi/redirect';

export default (props:any) => {
  const token = localStorage.getItem('token');
  const isLogin = token !== null && token !== ''  && token.length >=1;
  return (
    <div>
    {
      isLogin?props.children:<Redirect to="/login" />
      }
    </div>
  )
}
