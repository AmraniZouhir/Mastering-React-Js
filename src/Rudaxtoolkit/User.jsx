import React from 'react'
import { useSelector } from 'react-redux'
import  userSelector  from './STORE/userSelector'

export default function User() {
  const selector = useSelector(userSelector)
  return (
    <>
    {JSON.stringify(selector)}
    </>
  )
}
