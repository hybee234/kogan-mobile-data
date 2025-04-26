import dayjs from 'dayjs'
import { useState } from 'react'


export default function Main() {

    const users = [
        {
            id: 1,
            name: "Hy",
            data: 150,
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

            <div className = " p-2">
                <p className="read-the-docs ">
                    How much data have you used (GB)?
                </p>
                <input
                    className = "border-2 p-1 m-1 w-25 text-center bg-gray-900"
                    value={dataUsed}
                    name="dataUsed"
                    onChange={handleInputChange}
                    type="numeric"
                    placeholder="Data used"
                />

            </div>

        <div id = "card-container" className = "flex justify-center">
                {                    
                users.map((users) => {
                    return (
                        
                        <div className= "card border-2 border-gray-600" key={users.id}>
                            <h2>{users.name}</h2>
                            <h3> Plan details </h3>
                            <p>Start: {dayjs(users.start).format('DD/MM/YY')}</p>
                            <p>Elapsed: <span className="text-green-500 text-2xl">{elapsedDaysHandler(users.start)}</span> days ({users.length})</p>                            
                            <p>Data Remaining <span className="text-green-500 text-2xl">{remainingDataHandler(users.data, dataUsed)}</span> GB ({users.data} GB)</p>                    

                            <h3 className = "text-2xl p-5"> Current Use </h3>


                            {
                                (Math.round(dataUsed/elapsedDaysHandler(users.start)* users.length * 20) /20) < users.data ? (
                                    <div>
                                        <p><span className="text-green-500 text-2xl">{Math.round(dataUsed/elapsedDaysHandler(users.start)*30 * 20) /20 }</span> GB / 30 days</p>
                                        <p>or <span className="text-green-500 text-2xl">{Math.round(dataUsed/elapsedDaysHandler(users.start)* users.length * 20) /20}</span> GB / {users.length} days</p>
                                        <p className = "text-green-500 p-2">Usage pattern within data allowance</p>
                                    </div>
                                ) : (                                    
                                    <div>
                                        <p><span className="text-red-500 text-2xl">{Math.round(dataUsed/elapsedDaysHandler(users.start)*30 * 20) /20 }</span> GB / 30 days</p>
                                        <p>or <span className="text-red-500 text-2xl">{Math.round(dataUsed/elapsedDaysHandler(users.start)* users.length * 20) /20}</span> GB / {users.length} days</p>
                                        <p className = "text-red-500 p-2">Usage pattern will exceed data allowance</p>
                                </div>
                                )
                            }

                            {/* This means you will be under/over by x GB */}

                            <h3 className = "text-2xl my-3"> To target {users.data} GB by {users.length} days</h3>

                            <p> Use <span className="text-green-500 text-2xl">{Math.round((users.data - dataUsed)/(users.length - elapsedDaysHandler(users.start)) *20 ) /20 }</span> GB / day </p>
                            <p> or <span className="text-green-500 text-2xl">{ Math.round((users.data - dataUsed)/(users.length - elapsedDaysHandler(users.start)) *30 *20 ) /20 }</span> GB / 30 days </p>

                            {/* You must decrease/can increase your data usage */}
                        </div>

                    )
                })
                }
        </div>

        </div>

    )

}

