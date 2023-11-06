// import { Component } from "react"
//  export default class Counter extends Component {

import { useEffect, useState } from "react"

//     constructor(props){ 
//         super(props) // bach had  props tl3 hta f les paramter dyal l CMPONENET
//         this.state={ // hna f les parametre dyal state kadir lib4itii 
//             counter : 0,
//         }
//     }

//     handelClick =() =>{
//         console.log(this)
//         this.setState(
//             prevState => {
//                 return {counter : prevState.counter+1}
//             }
//            )
//     }

//     // componentDidMount(){ // hadi katchof wach l composont 3ytnalih ola mazal
//     //     setInterval( 
//     //         ()=>{
//     //             this.setState(
//     //                 prevState => {
//     //                     console.log(prevState)
            
//     //                     return {counter : prevState.counter+1}
//     //                 }
//     //                )
//     //         }
//     //         , 1000)
      
//     //     // this.setState( { counter: 5})
//     // }


//     render( ){
//         return <>
//       <button onClick={this.handelClick}>Click to increment</button>  {/* for arrw function */}
//         {/* <button onClick={this.handelClick.bind(this)}>Click to increment</button> for sample function */}
//         <div>Il y a {this.state.counter} scound </div>
//         </>
//     }
// }




export default function Counter({initsialValu ,staps})
{
   
    // React hooks useState
    const [count,setCount] =useState(initsialValu)
    const [age,setAge] =useState()

    
    useEffect(
        ()=>{
            console.log('every  rander !')
        }
    );

    useEffect(
        ()=>{
            console.log('component mounthed ')
        },[]
    );

    useEffect(
        ()=>{
            console.log('age  changed')
        },[count,age] //depandencise chorot dyal dakchi lib4iti itra
    );


return <div>
    <span>
    <button onClick={()=>{
        setCount(prevStat=>{return prevStat +staps})
    }}>Click to increment</button> 
    <button onClick={()=>{setCount(0)}}>Reset !!</button> 


    Il y a {count} scound
    </span>
</div>

}