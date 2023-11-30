import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './STORE/Store'
import User from './User'
import UserForms from './UserForms'

export default function Appp() {
  return (
    <Provider store={Store}>

        <User/>
        <UserForms/>

    </Provider>
  )
}
