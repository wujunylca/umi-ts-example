
import React,{PureComponent} from 'react';


const tween = {
  linear(t, b, c, d) {
  return c * t / d + b;
},
easeIn(t, b, c, d) {
  return c * (t /= d) * t + b;
},
strongEaseIn(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
},
strongEaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
},
sineaseIn(t, b, c, d) {
  return c * (t /= d) * t * t + b;
}
};

class Animate extends PureComponent {

  state ={
    position:0
  }
  timer;

  // 启动定时器
  componentDidMount() {
    this.startTimer();

  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer= () => {
    this.timer = setInterval(this.step,19);
  }

  clearTimer =() => {
    clearInterval(this.timer);
  }
 // 计算某一针
  step =() => {
    const {startTime, duration, startPos, endPos, easing} = this.props;

    const nowTime = +new Date();

    if(nowTime >= startTime +duration) { // 当前时间大于开始时间和持续时间，动画结束
      return this.setState({position:endPos});
    }

    const position = tween[easing](
      nowTime -startTime,
      startPos,
      endPos - startPos,
      duration
    )
    this.setState({ position })
  }

  render() {
    const {children =() => {}} = this.props;
    const {position} = this.state;

    return <div>{children({position})}</div>
  }

}

export default Animate;
