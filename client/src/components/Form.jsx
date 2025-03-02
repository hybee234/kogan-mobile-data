import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'

function Form() {


    //Your own code ...
    const [dataUsed, setDataUsed] = useState ('')
    const [hy, setHy] = useState(145)
    const [elaine, setElaine] = useState(145)
    const [elainemum, setElaineMum] = useState(145)


    const handleInputChange = (e) => {     
        console.log(e)   
        const { dataUsed, value } = e.target;
        console.log (e.target.value)
        return setDataUsed(value) 
    };




    return (
        <div>
            <h1> Kogan Data Use calculator</h1>

            <p>Hy: {hy}GB</p>
            <p>Elaine: {elaine}GB</p>
            <p>Elaine's Mum: {elainemum}GB</p>

            <p className="read-the-docs ">
                How much data have you used (GB)?
            </p>


            <input
                className = "border-2 p-2 bg-gray-900"
                value={dataUsed}
                name="dataUsed"
                onChange={handleInputChange}
                type="numeric"
                placeholder="Data used to date"
            />
        </div>
    )

}

export default Form;