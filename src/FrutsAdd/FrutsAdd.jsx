import { useState } from "react"

export default function Fruts(){

    const [Fruts ,setFruts] = useState('')
    const [FrutsList ,setFrutsList] = useState([])
    const DisplaytFruts = () => FrutsList.map((Fr,frkey)=> <li key={frkey}>{Fr}</li> ) // had l key kayhsblina chhal mn click drti3la l button 


    const handelInput =()=>{
        const frutsValus = document.querySelector('#fruts').value
        setFruts(frutsValus)
     }

     const handelClick = (e)=>{
        e.preventDefault()
        setFrutsList([...FrutsList,Fruts])

        
        
     }

    return <>
    <form>
        <input type="text" id="fruts" onChange={handelInput}/>
        <input type="submit" value='etre un fruts' onClick={handelClick}/>
    </form>
     <ul>
        {DisplaytFruts()}
     </ul>
    
    </>

}