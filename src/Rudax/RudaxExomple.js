import {createStore} from 'redux'
import { CounterReducer } from './Rudusers/Rudusers'

const store = createStore(CounterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// hna kanhto wahd suscribe hada kayb9a hadi state li f store ila tchangat kaygolhaliko bimkank tjib  bih l value dyal stat otafichiha f component
store.subscribe(()=>{
    // alert('State tchanged')
    console.log(store.getState())
})

store.dispatch({type:'counter/increment'})
store.dispatch({type:'counter/increment'})
store.dispatch({type:'counter/increment'})

