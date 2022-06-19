import React, { Component } from 'react'

 class LifeCycleSample extends Component {

    state = {
        number:0,
        color: null
    };

    myRef = null;

    //컴포넌트의 생성자 메서드.
    //컴포넌트가 만들어지면 가장 먼저 실행되는 메서드 
    constructor(props){
        super(props);
        console.log("constructor");
    }
  
    // Component가 처음 rendering or rerendering 되기전 실행된다
    // return 되는 값은 현재 state를 대체한다. 
    // 다른 lifeCycle method와 다르게 앞에 static을 붙인다
    // 함수안에서 this 사용 불가능하다. 
    // state나 prop이 update 될 시 호출된다.

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps!==prevState){
            return {color:nextProps.color};
        }
        return null;
    }

    // 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드 
    componentDidMount(){
        console.log("ComponentDidMount")
    }

    // 컴포넌트가 리렌더링 할지 말지를 결정하는 메서드
    // return 값 flase 이면 리렌더링 x , true이면 렌더링 
    // 아래의 경우 마지막 자리가 4이면 리렌더링 안한다는 의미  
    shouldComponentUpdate(nextProps,nextState){
      console.log("shouldComponentUpdate",nextProps,nextState);
      return nextState.number%10 !==4;
    }

    //컴포넌틑가 화면에서 사라지기 직전에 호출된다.
    componentWillUnmount(){
      console.log("componentWillUnmount");
    }

    // 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을
    // 반환하면 그 다음 발생하게 되는 componentDidUpdate 함수에서
    // 받아와서 사용할 수 있습니다.
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("getSnapshotBeforeUpdate");
      if(prevProps.color!==this.props.color){
        return this.myRef.style.color;
      }
      return null;
    }

    
    // 컴포넌트에 변화가 발생하여 리렌더링이 발생 후 
    // 호출되는 메서드 3번째 파라미터로 
    // getSnapshotBeforeUpdate에서 반환한 값을 조회 가능
  
    componentDidUpdate(prevProps,prevState,snapshot){
      console.log("componentDidUpdate",prevProps,prevState)
    
      if(snapshot){
        console.log("업데이트 되기 직전 색상: ", snapshot)
      }
    }

    handleClick = () =>{
      this.setState({
        number:this.state.number+1
      })
    }
  
  render() {

    console.log("render")

    const style={
      color:this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref=>{this.myRef =ref}}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>        
      </div>
    )
  }
}


export default LifeCycleSample;