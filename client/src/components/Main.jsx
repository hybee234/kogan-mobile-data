import dayjs from 'dayjs'
import { useState } from 'react'


function Main() {

    const users = [
        {
            id: 1,
            name: "Hy",
            data: 145,
            start: "2025-01-05",
            length: 365            
        },
        {
            id: 2,
            name: "Elaine",
            data: 145,
            start: "2025-01-14",
            length: 365                    
        },       
        {
            id: 3,
            name: "Elaine Mum",
            data: 145,
            start: "2025-01-27",
            length: 365                    
        }       
    ]

    const [dataUsed, setDataUsed] = useState ('')

    const handleInputChange = (e) => {     
        //console.log(e)   
        const { value } = e.target;
        //console.log (e.target.value)
        return setDataUsed(value) 
    };

    //Your own code ...

    // const [hy, setHy] = useState(145)
    // const [elaine, setElaine] = useState(145)
    // const [elainemum, setElaineMum] = useState(145)


    // const remainDays = 365 - elapsedDays
    // const currentUseRate = dataUsed / elapsedDays *30 
    // const currentUseRate2dec = Math.round(dataUsed / elapsedDays *30 *20) / 20   //round to 2 decimal place
    // const currentUseRate365 = Math.round(dataUsed / elapsedDays *365 *20) / 20   //round to 2 decimal place

    // const targetUseRatedaily = Math.round( remainingData / remainDays * 20) /20 // target daily use rate
    // const targetUseRate30 = Math.round( remainingData / remainDays * 30 * 20) /20 // target 30 day use rate

    const remainingDataHandler = (data, dataUsed) => {
        return data - dataUsed
    } 
    
    const elapsedDaysHandler = (start) => {
        const planStartEpoch = new Date(start)  //This doesn't give me an epoch time but javascript is still happy to calculate the difference *shrug*
        //console.log (planStartEpoch)
        const nowEpoch = Date.now()
        //console.log (nowEpoch)        
        const diffTime = Math.abs(nowEpoch - planStartEpoch);   // Milliseconds - Do calculations using epoch time!!
        const elapsedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))  // Convert milliseconds to days 
        //console.log (elapsedDays)        
        return elapsedDays
    } 


    return (
        <div className = "border-2">
            <h1> Kogan Data Use calculator</h1>

            {/* <p>Hy: {hy}GB</p> */}
            {/* <p>Elaine: {elaine}GB</p> */}
            {/* <p>Elaine's Mum: {elainemum}GB</p> */}
            {/* <p>Hy Sign up Epoch: {hySignUpEpoch}</p> */}
            {/* <p>Hy Sign up Local: {userPlanStart}</p>  */}

            <div className = "border-2 p-2">
                <p className="read-the-docs ">
                    How much data have you used (GB)?
                </p>
                <input
                    className = "border-2 p-1 m-1 bg-gray-900"
                    value={dataUsed}
                    name="dataUsed"
                    onChange={handleInputChange}
                    type="numeric"
                    placeholder="Data used to date"
                />GB

            {/* <p>{remainingData} GB remaining</p> */}
            {/* <p>Difference Time (milliseconds): {diffTime}</p> */}
            {/* <p>{remainDays} days remaining</p> */}
            
            {/* <h2 className = "text-2xl p-5"> Current Use </h2> */}
            {/* <p>Current use rate (30 days) {currentUseRate2dec} GB/ 30 days</p> */}
            {/* <p>Current use rate (365 days) {currentUseRate365} GB / 365 days</p> */}

            {/* This means you will be under/over by x GB */}

            {/* <h2 className = "text-2xl p-5"> To target 145GB by 365 days</h2> */}

            {/* <p> You can use {targetUseRatedaily} GB per day </p> */}
            {/* <p> You can use {targetUseRate30} GB per 30 days </p> */}

            {/* You must decrease/can increase your data usage */}
            </div>

        <div id = "card-container" className = "flex border-2 justify-center border-violet-500 m-2">
                {                    
                users.map((users) => {
                    return (
                        
                        <div className= "card border-2 border-amber-200 p-5 m-2" key={users.id}>
                            <h2>{users.name}</h2>
                            <h3> Plan details </h3>
                            <p>Start: {dayjs(users.start).format('DD/MM/YY')}</p>
                            <p>Length: {users.length} days</p>
                            <p>Data allowance: {users.data} GB </p>   

                            <h3>Current state</h3>
                            <p>Days elapsed: {elapsedDaysHandler(users.start)} </p>
                            <p>Remaining Data: {remainingDataHandler(users.data, dataUsed)} GB</p>                    

                            <h3 className = "text-2xl p-5"> Current Use </h3>
                            <p>Current use rate (30 days)  {Math.round(dataUsed/elapsedDaysHandler(users.start)*30 * 20) /20 } GB/ 30 days</p>
                            <p>Current use rate ({users.length} days) {Math.round(dataUsed/elapsedDaysHandler(users.start)* users.length * 20) /20} GB / {users.length} days</p>

                            {
                                (Math.round(dataUsed/elapsedDaysHandler(users.start)* users.length * 20) /20) < users.data ? (
                                    <p className = "text-green-500 p-2">Usage pattern within data allowance</p>
                                ) : (
                                    <p className = "text-red-500 p-2">Usage pattern will exceed data allowance</p>
                                )
                            }

                            {/* This means you will be under/over by x GB */}

                            <h3 className = "text-2xl p-5 my-3"> To target {users.data} GB by {users.length} days</h3>

                            <p> You can use {Math.round((users.data - dataUsed)/(users.length - elapsedDaysHandler(users.start)) *20 ) /20 } GB per day </p>
                            <p> or { Math.round((users.data - dataUsed)/(users.length - elapsedDaysHandler(users.start)) *30 *20 ) /20 } GB per 30 days </p>

                            {/* You must decrease/can increase your data usage */}
                        </div>

                    )
                })
                }
        </div>

        </div>

    )

}

export default Main;