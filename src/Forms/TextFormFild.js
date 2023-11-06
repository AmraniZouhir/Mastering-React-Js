 export default function TextForms({children,labelltext , inputname}) {  //({props})
    return (
        // react fragment 
    <> 
        <label>{labelltext}</label>
        <input name={inputname} type="text"/>
        <div> {children}</div>
    </>
    )
 }

// import { Component } from "react";




// export default class TextFormFild extends Component{
// render (){
// return  <> 
//          <label>{this.props.labelltext}</label>
//          <input name={this.props.inputname} type="text"/>
//          <div> {this.props.children}</div>
//      </>
// }
// }