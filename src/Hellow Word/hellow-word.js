/*export default function HelloWorld({lastName}) {
    const age = 18
        return <h1>Hello {lastName} {age>= 18 ? 'Adult' : 'Minor'}</h1>
}*/

import {Component} from "react";
class HelloWorld extends Component {
    age = 15
    timer = null
    clickBody = () => {
        alert('body clicked ! ')
    }
    componentDidMount() {
        console.log('component mounted')
        // document.addEventListener('click', this.clickBody)
        this.timer = setInterval(() => {
           console.log('a')
        },1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component updated')
    }

    componentWillUnmount() {
        console.log('our component is dead')
        // document.removeEventListener('click', this.clickBody)
        clearInterval(this.timer)
    }

    render() {
return <h1 style={(this.props.isDarkModed)?{color:'white'}: {color : "red"}}>hello {this.props.lastName} {this.age > 18 ? 'adult' :'minor'}</h1>
    }
}
export default HelloWorld
 