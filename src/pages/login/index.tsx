import * as React from 'react';
import {Form,Button,Input,Icon,Tabs, message} from 'antd';
import { connect } from 'dva'
import {post} from '@utils/index';
import styles from './index.css'

 interface Props {
  name:string;
  form:any,
  dispatch:any
}

interface State {
  token:string
}
const { TabPane } = Tabs;

@connect()
 class Hello extends React.Component<Props,State> {
   constructor(props:any) {
     super(props)
     this.state ={
       token:''
     }
   }
  handleLogin =()=> {
    const {validateFields} = this.props.form;
    validateFields(['username','password'],(err:boolean,values:{username:string,password:string})=>{
      if(err) {return }
      console.log('111111111111111111',values)
      const {username,password} = values;
      this.props.dispatch({type:'login/login',payload:values})
    //   fetch('http://localhost:7001/login',{
    //   method:"POST",
    //   body:JSON.stringify({
    //     ...values
    //   }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //     // "Authorization":'Bearer 123'
    //   }),

    // }).then(async res => {
    //   return res.json()
    // })
    // post("http://localhost:7001/login",values).then((data:any) => {
    //   console.log('3333333333',data)
    //   if(data.data.user) {
    //     localStorage.setItem('token',data.data.token)
    //   } else {
    //     this.props.form.setFields({
    //       username: {
    //         value:username,
    //         errors: [new Error('username or password is error')],
    //       },
    //       password:{
    //         value:username,
    //         errors: [new Error('username or password is error')],
    //       }
    //     });
    //   }
    // })
    })
  }
  handleRegist =() => {
    const {validateFields} = this.props.form;
    validateFields(['registName','registPassword'],(err:any,values:any)=>{
      if(err) return err;
      const {registName,registPassword} = values;
      fetch('http://localhost:7001/regist',{
      method:"POST",
      body:JSON.stringify({
        ...{
          username:registName,
          password:registPassword
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        // "Authorization":`Bearer ${localStorage.getItem('token')}`
      }),

    }).then(async res => {
      return res.json()
    }).then(res => {
       if(Object.is(res.code,1001) && res.data.user){
          message.success('注册成功',2)
       } else {
        //  message.error('注册失败',2)
        this.props.form.setFields({
          registName: {
            value:registName,
            errors: [new Error('username or password is error')],
          },
          registPassword:{
            value:registPassword,
            errors: [new Error('username or password is error')],
          }
        });
       }
    })
  })

  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={styles.container} >
       <Tabs defaultActiveKey="1">
        <TabPane tab="Login" key="1">
        <Form className={styles['justify-content']}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{width:"100%"}} onClick={this.handleLogin} >
            Login
          </Button>
        </Form.Item>
      </Form>
        </TabPane>
        <TabPane tab="Regist" key="2">
        <Form className={styles['justify-content']}>
        <Form.Item>
          {getFieldDecorator('registName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('registPassword', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{width:"100%"}} onClick={this.handleRegist} >
           regist
          </Button>
        </Form.Item>
      </Form>
        </TabPane>
      </Tabs>
      </div>
    )
  }
}

export default  Form.create()(Hello)
