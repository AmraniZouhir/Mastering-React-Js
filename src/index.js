import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWord from './Hellow Word/hellow-word';
import TextForms from './Forms/TextFormFild';
import Fruit from './Fruits/Fruits';
import Counter from './Counter/Counter';
import Button from './Event/Event';
import Forms from './Form/Formuler';
import Fruts from './FrutsAdd/FrutsAdd';
import FormsReactuseState from './FormsReact/FormsUseState';
import FormsReactuseRef from './FormsReact/FormsUseRef';
import PageParent from './LanguageSwitherPassingData/PageParent ';
import FormsValidation from './FormsValidation/FormValidationBiginer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray = [
            'Applel',
            'Banana',
            'Lemion',
            'Oronge',
            'dd',
            'dd',
            'dd',
            'dd',
]
root.render(
<FormsValidation/>
  // <PageParent />
  // <FormsReactuseRef/>
/* <FormsReactuseState/> */


  // <Fruts />
  // <Forms/>

/* <Button /> */

//  <Counter initsialValu ={2} staps={2} />  


    /* <Fruit fruits={fruitsArray}/> */

    /* <HelloWord lastname='Zouhir Amrani' />

    <TextForms inputname='lastname' labelltext='write your last name ' >
      Entre votre last name

    </TextForms>

    <br />
    <TextForms inputname='name' labelltext='write your name ' >

      Entre votre name
    </TextForms> */

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
