import { useRef } from "react";
import React from 'react'
const InputText = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} />
   ));

   export default InputText