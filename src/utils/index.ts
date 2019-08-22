// import qs from 'qs';
const qs = require('qs');
const post = (url: string, params: object): any => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  }).then(res => {
    return res.json();
  });
};
const get = (url: string, params: object): any => {
  const sendUrl = `${url}?${qs.stringify(params)}`
  return fetch(sendUrl, {
    method: 'POST',
    // body: JSON.stringify(params),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  }).then(res => {
    return res.json();
  });
};

export { post,get };
