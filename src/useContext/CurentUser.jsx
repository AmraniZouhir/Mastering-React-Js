import React, { useContext } from 'react'
import { UserContext } from './Context'

function CurentUser() {
    const {userOne} = useContext(UserContext)

  return (
    <div>{userOne}</div>
  )
}

export default CurentUser