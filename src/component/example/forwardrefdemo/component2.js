import ChildComponent from "./component1"
import React from 'react'
import InputText from "./component1";
/*const InputText = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} />
   ));*/
function ParentComponent()
{
    const ref = React.useRef();

    function focus() {
      ref.current.focus();
    }
   
    return (
      <div className="App">
        <InputText ref={ref} placeholder="my input" />
        <button onClick={focus}>Focus</button>
      </div>
    );

}

export default ParentComponent