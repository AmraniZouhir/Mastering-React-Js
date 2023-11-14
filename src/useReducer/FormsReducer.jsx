import React, { useReducer } from 'react'

export default function FormsReducer() {
    const initstate ={
        name :'',
        email :'',
        note :'',
    }
    const reducer =(state , action)=>{
        switch(action.type){
            case 'input' :return {...state , [action.field]:action.value};
            case 'reset' : return initstate;
            default : return state 
        }
    }

    const [state , dispatch ] =useReducer(reducer , initstate)

    const handelChange =(e)=>{
        dispatch({
            type :'input',
            field : e.target.name,
            value : e.target.value
        })
    }

    const handelReset =()=>{
        dispatch({type:'reset'})
    }

    const handelSabmit =(e)=>{
        e.preventDefault()
        console.log(state)
    }
    return (
        <form onSubmit={handelSabmit}>

            <div className="form-group">
                <labe>Furst name </labe>
                <input type="text" name="name" className="form-control" value={state.name}  onChange={handelChange}/>
            </div>

            <div className="form-group">
                <labe>email </labe>
                <input type="email" name="email" className="form-control" value={state.email} onChange={handelChange}/>
            </div>

            <div className="form-group">
                <labe>note</labe>
                <textarea name='note' className="form-control" value={state.note} onChange={handelChange}/>
            </div>

            <div className="form-check">
                <button type='submit'
                >Save</button>
            </div>
            <div className="form-check">
                <button type='button' onClick={handelReset}
                >reset</button>
            </div>
        </form>


    )
}

