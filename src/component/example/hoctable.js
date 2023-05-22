import React from 'react'
const HocTable=(Component)=>{

     


       class HigherTableComp extends React.Component{

         constructor()
         {
            super()
            this.state={
                items:[{
                    itemname:"Coffee",
                    price:20,
                    quantity:10
                 },
                 {
                   itemname:"Tea",
                   price:30,
                   quantity:15
                 },
                 {
                   itemname:"Ice Tea",
                   price:25,
                   quantity:20
                 }]
            }
         }
        
           render()
           {
            return <div>
             <div className="panel panel-default">
               <span className="text text-info">Search Box</span> <input type='text' className="text text-primary"  onChange={(e)=>{
                       this.setState({items:this.state.items.filter((srch)=>srch.itemname.search(e.target.value)>0)})
                       console.log(this.state.items)
                }}/>
             </div>
            
            <Component  data={this.state.items}/>
            </div>
           }
       }
 return HigherTableComp
}

export default HocTable