import * as React from 'react';
import Redirect from 'umi/redirect';
import {get} from '@utils/index';

interface isState {
  root:boolean,
  hasPath:boolean
}

export default class Authority extends React.Component<{},isState> {
  constructor(props:any){
    super(props)
    this.state ={
      root:false,
      hasPath:true
    }
  }
 async componentWillMount() {
     const res = await get('http://localhost:7001/authorize');
     const {code,data} = res;
     if(Object.is(code,1001)){
        const hasPath = this.props.route.routes.find((item:any) => item.path===this.props.location.pathname);
        if(hasPath) {
          data.forEach((item:object )=> {
            if(item===hasPath.authority) {
              this.setState({root:true})
              return ;
            }
          } );
        } else {
          this.setState({hasPath:false})
        }

     }
  }
  render() {
    const {children} = this.props
    const {root,hasPath} = this.state;
    return (
      <div>{hasPath ? root? children:"":<Redirect to="/404" /> }</div>
    )
  }
}

