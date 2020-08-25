import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';


function domRender(reactElem,node) {
  let div;
  if(node) {
    div  = typeof node === 'string'? document.getElementById(node):node;
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  return ReactDOM.render(reactElem,div);
}

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const TypeModal = {
  'info':() => {
    info()
  },
  'error':() =>{
    error()
  },
  'warning':() => {
    warning();
  }

}

class SingletonModal extends PureComponent {
  state ={
    show:false,
  }
  instance = null;

  open({type,onOk,onCancel}) {
    TypeModal[type]({onOk,onCancel});
  }
  show() {
    if(this.state.show) {
      return;
    }
    this.setState({show:true});
  }

  hide() {
    if(!this.state.show)  {
      return
    }
    this.setState({show:false});
  }

  render() {
    return (
      <div>
        <Modal
          title={'提示'}
          visible={this.state.show}
          onCancel={() => {this.setState({show:false})}}
          onOk={() => {this.setState({show:false})}}
          >
          主要的内容
        </Modal>
      </div>
    )
  }
}

 const Dialog = domRender(<SingletonModal/>,null);
 export default Dialog;
