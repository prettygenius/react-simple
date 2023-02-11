    import { useState } from "react"

    function CountButton(props) {

        const [count, setCount] = useState(0)

         function handleClick() {
          setCount(count + props.increment)
        }

        return(
            <div className="card">
            <button onClick={handleClick}>+{props.increment}</button>
            <h1>current count is {count}</h1>
    
          </div>
        )
    }

    export default CountButton