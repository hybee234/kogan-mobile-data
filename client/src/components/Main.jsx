import dayjs from 'dayjs'
import { useState } from 'react'


function Main() {

    const users = [
        {
            id: 1,
            name: "Hy",
            data: 145,
            start: "2025-01-05"            
        },
        {
            id: 2,
            name: "Elaine",
            data: 145,
            start: "2025-01-05"            
        },       
        {
            id: 3,
            name: "Elaine Mum",
            data: 145,
            start: "2025-01-27"            
        }       
    ]



    //Your own code ...
    const [dataUsed, setDataUsed] = useState ('')
    const [hy, setHy] = useState(145)
    const [elaine, setElaine] = useState(145)
    const [elainemum, setElaineMum] = useState(145)

    const userPlanStartEpoch = new Date(users[0].start)    
    const userPlanStart = new Date(userPlanStartEpoch).toLocaleString()   // Date Hy Signed up

    const nowEpoch = Date.now()
    const now = new Date(nowEpoch).toLocaleString()

    const handleInputChange = (e) => {     
        //console.log(e)   
        const { dataUsed, value } = e.target;
        //console.log (e.target.value)
        return setDataUsed(value) 
    };

    let userData = 145
    let remainingData = userData - dataUsed

    const diffTime = Math.abs(nowEpoch - userPlanStartEpoch);   // Milliseconds - Do calculations using epoch time!!
    const elapsedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))  // Days - Do calculations using epoch time!!
    const remainDays = 365 - elapsedDays
    const currentUseRate = dataUsed / elapsedDays *30 
    const currentUseRate2dec = Math.round(dataUsed / elapsedDays *30 *20) / 20   //round to 2 decimal place
    const currentUseRate365 = Math.round(dataUsed / elapsedDays *365 *20) / 20   //round to 2 decimal place

    const targetUseRatedaily = Math.round( remainingData / remainDays * 20) /20 // target daily use rate
    const targetUseRate30 = Math.round( remainingData / remainDays * 30 * 20) /20 // target 30 day use rate

    return (
        <div className = "border-2">
            <h1> Kogan Data Use calculator</h1>

            <p>Hy: {hy}GB</p>
            <p>Elaine: {elaine}GB</p>
            <p>Elaine's Mum: {elainemum}GB</p>


            {/* <p>Hy Sign up Epoch: {hySignUpEpoch}</p> */}
            <p>Hy Sign up Local: {userPlanStart}</p> 



            <p className="read-the-docs ">
                How much data have you used (GB)?
            </p>

            <div className = "border-2 p-2">

                <input
                    className = "border-2 p-2 bg-gray-900"
                    value={dataUsed}
                    name="dataUsed"
                    onChange={handleInputChange}
                    type="numeric"
                    placeholder="Data used to date"
                />GB

            <p>{remainingData} GB remaining</p>
            {/* <p>Difference Time (milliseconds): {diffTime}</p> */}
            <p>{remainDays} days remaining</p>
            
            <h2 className = "text-2xl p-5"> Current Use </h2>
            <p>Current use rate (30 days) {currentUseRate2dec} GB/ 30 days</p>
            <p>Current use rate (365 days) {currentUseRate365} GB / 365 days</p>

            {/* This means you will be under/over by x GB */}

            <h2 className = "text-2xl p-5"> To target 145GB by 365 days</h2>

            <p> You can use {targetUseRatedaily} GB per day </p>
            <p> You can use {targetUseRate30} GB per 30 days </p>

            {/* You must decrease/can increase your data usage */}


            </div>


        <div>
            test mapping ...
                {
                users.map((users) => {
                    return (
                        <div className= "flex-wrap border-2 border-amber-200 p-5 m-5" key={users.id}>
                            <p className = "w-full border-2 border-green-200">User: {users.name}</p>
                            <p className = "w-full">Plan Start date: {dayjs(users.start).format('DD/MM/YY')}</p>
                            <p className = "w-full">Data: {users.data}GB </p>                       
                        


                    
                         </div>
                    )
                })
                }
        </div>

        </div>

    )

}

export default Main;