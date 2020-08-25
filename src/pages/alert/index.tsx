import React, { PureComponent } from 'react';
import { Button } from 'antd';
import Dialog from './TestAlert';
import Animate from './Amimate';

export default class TestDialog extends PureComponent {
  handleInfoClick = () => {
    Dialog.open({type:"info"});
  };

  handleErrorClick =() => {
    Dialog.open({type:"error"});
  }

  handleWarnClick =() => {
    Dialog.open({type:"warning"});

  }
  render() {
    return (
      <div>
        <Animate
          startTime={+new Date()} // 开始时间
          startPos={0} // 初始值
          endPos={300} // 结束位置
          duration={5000} // 持续时间
          easing="easeIn" // 缓动函数名称
        >
          {({ position }) => {
            const style = {
              position: 'absolute',
              top: `${position}px`,
              right: `${position}px`,
            };
            return <h2 style={style}>Hello World!</h2>;
          }}
        </Animate>
        <Button onClick={this.handleInfoClick}>点击提示弹窗</Button>
        <Button onClick={this.handleErrorClick}>点击错误弹窗</Button>
        <Button onClick={this.handleWarnClick}>点击警告弹窗</Button>
      </div>
    );
  }
}
