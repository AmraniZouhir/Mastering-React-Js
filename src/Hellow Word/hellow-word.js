
//Components whet FUNCTION


export default function HoelloWord({lastname}) {
    const age  = 12
return  <h1>Hellow {lastname} {age >=18 ? 'Adult':'Minour'} </h1>

}

//Components whet CLASS
//  import {Component} from "react";


// export default class HoelloWord extends Component {
//     render(){
//         return <div>hellow {this.props.lastname}</div>
//     }
// }
