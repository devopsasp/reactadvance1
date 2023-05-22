import HocTable from "./hoctable"
function TableData(props)
{

       return <div>
         <table className="table">  
         <thead>
             <th>
                Item Name
             </th>
              <th>
                Price 
              </th>
              <th>
                Quantity
              </th>
            </thead> 
            {
                props.data.map((e)=><tr className="text-primary" style={{fontSize:"20px"}}>
                    <td>{e.itemname}</td>
                
                <td>{e.price}</td>
                <td>{e.quantity}</td>
                </tr>)
            }
         </table>

       </div>
}
export  default HocTable(TableData)