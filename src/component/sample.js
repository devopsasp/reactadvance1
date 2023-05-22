import MyComponent from "./parent"
function Sample(props)
{
   const {currency_symbol,amount}=props
   
    return <div>
          {currency_symbol} {amount}
          </div>
}
export default MyComponent(Sample)