import { useRef, useState ,useEffect} from "react"

function MyComponent()
{
   /*const [interval,setInterval]=useState(0)
   useEffect(()=>{
    setInterval(interval+1)
   },[])*/

  let interval=useRef(0)
   
useEffect(()=>{
    interval.current=interval.current+1
})
      return (<div>
        <h1>Use Ref</h1>
        <button onClick={()=>{
            console.log(interval)
        }}>Click</button>
          {interval.current}
        </div>)
}
export default MyComponent