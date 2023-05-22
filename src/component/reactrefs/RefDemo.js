import React from 'react'
class RefDemo extends React.Component{

      constructor()
      {
        super()
        this.myref=React.createRef()
      }
   componentDidMount()
   {
    console.log(this.myref.current.focus())
   }
       
        render()
        {
            return <div> 
   <h1>
   Ref Demo
    </h1>
      <input type='text'  ref={this.myref} />
                  
            </div>
        }
}

export default RefDemo