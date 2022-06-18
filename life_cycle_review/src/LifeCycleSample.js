import React, { Component } from 'react'

 class LifeCycleSample extends Component {

    state = {
        number:0,
        color: null
    };

    myRef = null;

    constructor(props){
        super(props);
        console.log("constructor");
    }
  
    // Component가 처음 rendering or rerendering 되기전 실행된다
    // return 되는 값은 현재 state를 대체한다. 
    // 다른 lifeCycle method와 다르게 앞에 static을 붙인다
    // 함수안에서 this 사용 불가능하다. 

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps!==prevState){
            return {color:nextProps.color};
        }
        return null;
    }

  
    componentDidMount(){
        console.log("ComponentDidMount")
    }

  
  render() {
    return (
      <div>LifeCycleSample</div>
    )
  }
}


export default LifeCycleSample;