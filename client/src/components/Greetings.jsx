import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'

function Greetings() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount ((count + 1))
        console.log (`New Value of count: ${count}`)
    }




    return (
        <div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
                <h1>Vite + React</h1>

            <div className="card">
                <button 
                    // onClick={() => setCount((count) => count + 1)}
                    onClick={handleClick}
                >
                    count is {count}
                </button>

                <div className="card-body">
                    <p className="card-text">Click Count: {count}</p>
                    {/* In our button element, we add a onClick event that invokes our handleClick method */}
                    <button className="btn btn-primary" type="button" onClick={handleClick}>
                    Increment
                    </button>
                </div>


                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

        </div>
    )

}

export default Greetings;