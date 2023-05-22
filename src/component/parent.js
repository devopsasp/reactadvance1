import { Component } from "react"

function MyComponent(HOComponent)
{
      return class extends Component{
        render()
        {
            return <div style={{border:"2px solid black",width:"300px",height:"200px",backgroundColor:"aliceblue"}}>
   <HOComponent currency_symbol="$" amount="1000"/>
            </div>
        }
      }
}

export default MyComponent