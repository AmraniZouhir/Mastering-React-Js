import React, { useReducer, useState } from 'react'

export default function Reducer() {
    //state reducer = hado 3ibara 3la variablse kayakhdo 9yam ola halat 
    //dispatch initState = hado functions 

    //      count=0    hdi lfunction li 4atbdl l9ima dyal count                      0
    // const [count , setcount] =useState(initvalue)



    const initState = {
        count: 0
    }
   

    const reducer = (state, action) => {
        switch (action.type) {
            case 'up':
                return { count: state.count + 1 };
            case 'down':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            default:
                return state;
        }
    };




    const [state, dispatch] = useReducer(reducer, initState)


    return <>
        <h1>{state.count}</h1>
        <button onClick={() => { dispatch({ type: 'up' }) }}>Up</button>
        <button onClick={() => { dispatch({ type: 'down' }) }}>down</button>
        <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
    </>


}

