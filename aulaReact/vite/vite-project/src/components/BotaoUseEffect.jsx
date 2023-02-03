import { useEffect, useState } from "react";

function BotaoUseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Contagem ${count}`);
    })

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }
            }>UseEffect</button>
        </div>
    )
}
export default BotaoUseEffect