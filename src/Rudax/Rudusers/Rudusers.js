export const CounterReducer =(state ={value:1 } ,action)=>{
switch(action.type){
    case 'counter/incriment' : return {value :state.value + 1 }
    case 'counter/decrement' : return {value :state.value - 1 }
    default : 
           return state
}
}