import React from 'react';


const TabItem = props => {
  const {active,onTabClick,children,defaultKey} = props;

  console.log('props',props)
  console.log('active',active)
  console.log('key',defaultKey)

  return (
    <div style={{ color: active===defaultKey?"red":"#000"}} onClick={onTabClick}>
      {
        children
      }
    </div>
  )
}


// class Tabs extends React.PureComponent{
class Tabs extends React.Component{
  static TabItem = TabItem;

   constructor(props) {
     super(props);
      this.state ={
        active:props.defaultkey
      }

   }

  render() {
    const {active} = this.state;

    const newChildren = React.Children.map(this.props.children,(child,index) => {
      console.log('child',child);
      if(child.type) {
        return React.cloneElement(child,{

          active: active,
          defaultKey:child.key,
          onTabClick:() => this.setState({active:child.key})
        })
      } else {
        return child
      }
    })
    return (
      <div>
        {
          newChildren
        }
      </div>
    )
  }
};

class TestTabs extends React.PureComponent {



  render() {
    const {TabItem} = Tabs;
    return (
      <div>
        <Tabs defaultkey='1' >
          <TabItem key='1'>
            这是内容一
          </TabItem>
          <TabItem key='2'>
            这是内容2
          </TabItem>
          <TabItem key='3'>
            这是内容3
          </TabItem>
        </Tabs>
      </div>
    )
  }
}



export default TestTabs;
