import React, { useEffect, useState } from 'react'
import Button from '../../utils'
import s from './Login.module.scss'
import axioss from '../../api'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from '../../context/store'

const Login = () => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
const [state,dispatch] = useContext(AppContext)
console.log(state);
  const [passError, setPassError] = useState({
    caracters: true
  })

  useEffect(() => {
    setPassError({
      caracters: pass.length >= 8 ? false : true
    })
    
  }, [pass])

  const handleStartLogin = (e)=>{
e.preventDefault()

const getdata = async () => {
  try {
    let res = await axioss.post("/auth/login", {
      email,
      password: pass
    })
console.log(res);

    if (res.status === 201) {
      toast.success("Congratulations, you have successfully passed the registration section")
let data = res.data.access_token
localStorage.setItem("data",JSON.stringify(data))
delete res.data.password
dispatch({type:"LOGIn",user:res.data})
    }
    else {
      toast.error("Must be the same as the Sign up information")
    }
  }
  catch (error) {
    if (error.response) {
      toast.error(error.response.data.message[0])
    }
  }
let getData= localStorage.getItem("data")
console.log(getData);


}
getdata()
  }
  return (
    <div className={s.body}>
    <form onSubmit={handleStartLogin} action="#" className={s.form}>
      <h1 className={s.form__tit}>Login</h1>

      <input type="email" className={s.form__inp} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
     
      <input type="password" className={s.form__inp} placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
      {
        passError.caracters && <p className={s.formPass__text}>At least 8 characters!</p>
      }
      <Button btnType="submit" className={s.form__btn}>
        Login
      </Button>
    </form>
  </div>

  )
}

export default Login