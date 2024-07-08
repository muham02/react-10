import React from 'react'
import  s from './SignUp.module.scss'
import axioss from '../../api'
import { useState } from 'react'
import {toast} from 'react-toastify';
const SignUp = () => {
  const [name,setName ] = useState("")
  const [userName,setUserName ] = useState("")
  const [email,setEmail ] = useState("")
  const [pass,setPass] = useState("")

  const handleStartClick = (e)=>{
    e.preventDefault()
const getdata = async ()=>{
 let res = await axioss("/users",{
  name,
  avatar:userName,
  email,
  password:pass
 })
 if(response.data === 201){
toast.success("Success")
 }else{
toast.error("Success")

 }
}
getdata()
  }
  return (
    <div className={s.body}>
        <form action="#" className={s.form}>
            <h1 className={s.form__tit}>Register</h1>
            <input type="text" className={s.form__inp} placeholder="Name"onChange={(e)=>setName(e.target.value)} />
            <input type="url" className={s.form__inp} placeholder="UserName"onChange={(e)=>setUserName(e.target.value)}/>
            <input type="email" className={s.form__inp} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className={s.form__inp} placeholder="Password"onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleStartClick} className={s.form__btn}>Register</button>
        </form>
    </div>
  )
}

export default SignUp