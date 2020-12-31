import './App.css';
import { useState, useEffect } from 'react/cjs/react.development';

const Cursor = (props) => {
  const [position, setPosition] = useState({x: 0, y: 0});

   useEffect(() => {
       addEventListeners();
       return () => removeEventListeners();
   }, []);

   const addEventListeners = () => {
       document.addEventListener("mousedown", onMouseDown);
   };

   const removeEventListeners = () => {
       document.removeEventListener("mousedown", onMouseDown);
   };

   const onMouseDown = (e) => {
       setPosition({x: e.clientX, y: e.clientY});
   };                                                               

   return <div className="cursor"
           style={{
               left: `${position.x}px`,
               top: `${position.y}px`,
               transition: `left ${props.transitionTime}s, top ${props.transitionTime}s`
           }}/>
}

function App() {
  const [transitionTime, setTransitionTime] = useState(0);

  return (
    <div className="App">
      <input type="number" onChange={e => setTransitionTime(e.target.value)} />
      <Cursor transitionTime={transitionTime}/>
    </div>
  );
}

export default App;
