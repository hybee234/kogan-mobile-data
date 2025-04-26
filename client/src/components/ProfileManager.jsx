import {useEffect} from 'react';


export default function ProfileManager () {

//-------------------------------//
//- Populate Cart on Page load  -//
//-------------------------------//

let profiles =[]

useEffect(()=> {
    //const retrieveLocalStorage = ()  => {
        console.log("\n\n⬇️ retrieveLocalStorage() Engaged")
        profiles = JSON.parse(localStorage.getItem("profiles")) ?? [];     
        console.log ("⬇️ profiles.length", profiles.length)
        console.log ("⬇️ profiles", profiles)
   // }
    }
)








    return(
        <div className="flex-wrap">
            <h1>Profile Manager!</h1>
            <p>Manage your profiles here</p>
            <p className = "border-2"> {profiles}</p>
            { profiles.length === 0 ?
                (
                    <p>No profiles in local storage</p>
                ) : (
                    <p> {profiles.length} profile(s) retrieved </p>
                )
            }
            <button>Hello</button>
        </div>
    )
}
