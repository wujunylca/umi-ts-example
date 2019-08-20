

const post =( url:string, params:object):any => {

 return fetch(url,{
  method:"POST",
  body:JSON.stringify(params),
  headers: new Headers({
    'Content-Type': 'application/json',
    "Authorization":`Bearer ${localStorage.getItem('token')}`
  }),

}).then( res => {
  return res.json()
})

}


export {
  post
}
