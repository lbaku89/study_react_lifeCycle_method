import React, {useState} from "react";
import ReactDOM from "react-dom";

import './App.css';
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor(){
  return "#"+(Math.random()*100000000000).toString(16).slice(1,7)
}


function App() {
  const [color,setColor] = useState("#000000");
  const [visible, setVisible] = useState(true);

  const onClick = () =>{
    setColor(getRandomColor())
  };

  const onToggle = () =>{
    setVisible(!visible);
  };


  return (
   <>
    <button onClick={onClick}>랜덤색상</button>
    <button onClick={onToggle}>토글</button>
    {visible && <LifeCycleSample color={color} />}
   </>
  );
}

export default App;
