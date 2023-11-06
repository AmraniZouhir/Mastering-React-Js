import { useState } from "react"

export default function Forms() {
    const [name,setName] =useState('')
    const [age,setAge] =useState('')

    const handelNameInput = ()=> {
        const name =document.querySelector('#name').value
        setName(name)
    }
    const handelAgeInput = ()=> {
        const age =document.querySelector('#age').value
        setAge(age)
    }


   const  handelClick = (e)=>{
    e.preventDefault()
    console.log({name,age})
   }

    return  <>
        <input type="text" id="name" placeholder="Entre votre name" onChange={handelNameInput}></input><br/>
        <input type="number" id="age" placeholder="Entre votre age" onChange={handelAgeInput}></input><br/>
        <button type="submit" value='submit' onClick={handelClick}>Submit</button>
    </>
}