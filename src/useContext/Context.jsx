import React, { createContext, useContext, useState } from 'react'
import User from './User'


export const UserContext = createContext(null)

export default function Context() {

    const [userOne, setuserOne] = useState("zousassshir")



    return (
        <UserContext.Provider value={{userOne}}>
            <User />
        </UserContext.Provider>
    )

    //   <User user ={userOne}/> // rah mnhna mnach kandwzo les props l component lach 3ytna {of lcomponent kanrecupiriw dak lprops}

}

