import * as React from 'react';
import {Form,Button,Input,Icon,Tabs, message,Table} from 'antd';
import {post} from '@utils/index';

interface isState {
  pageData:{
    list:[],
    total:number
  },
  loading:boolean,
  pageNum:number,
  pageSize:number
}
interface isProps {
  form:any
}

 class Home extends React.Component<isProps,isState> {

  constructor(props:any) {
    super(props);
    this.state ={
      pageData:{
        list:[],
        total:0
      },
      pageNum:1,
      pageSize:10,
      loading:false
    }
  }
 async componentDidMount() {
  //  const request = get('http://localhost:7001/home');
  }
  handlePaginationChange =async (pageNum:number,pageSize:any) => {
    // console.log('dddd',page1,page2)
    await this.setState({pageNum,pageSize})
    await this.handleSearch();
  }
  handleSearch= async () => {
    await this.setState({loading:true});
    const {pageNum,pageSize} = this.state;
    this.props.form.validateFields(async (err:boolean, values:object) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const params ={
          ...values,
          pageSize,
          pageNum
        }
       const request = await post('http://localhost:7001/home',params);
       console.log('参数',request)
       if(Object.is(request.code,1001)) {
         this.setState({pageData:request.data,loading:false})
       }
      }
      // this.props.form.resetFields();
    });
  }
  render() {
    const {pageData,loading} = this.state;
    const {form:{getFieldDecorator}} = this.props;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div  >
      <Form {...formItemLayout} layout='inline' >
        <Form.Item label="标识码">
          {getFieldDecorator('identCode', {
            rules: [
              {
                required: false,
                message: 'Please input your E-mail!',
              },
            ],
            initialValue:undefined
          })(<Input />)}
        </Form.Item>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [
              {
                required: false,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item >
         <Button type='primary' onClick={this.handleSearch} >查询</Button>
        </Form.Item>
      </Form>
          <Table
          loading={loading}

           dataSource={pageData.list}
           columns={columns}
           pagination={ {
            total:pageData.total,
            onChange:this.handlePaginationChange
          } }
           rowKey={(record:any) => record.identCode}
            />
      </div>
    )
  }
}
export default Form.create()(Home)
