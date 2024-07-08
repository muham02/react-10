import React from 'react'
import s from './SignUp.module.scss'
import axioss from '../../api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../utils'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/store'

const SignUp = () => {
  const [state,dispatch] = useContext(AppContext)
console.log(state);
  const [passError, setPassError] = useState({
    caracters: true
  })
  const [nameError, setNameError] = useState({
    upperCase: true,
  })
let navigate = useNavigate()
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  useEffect(() => {
    setPassError({
      caracters: pass.length >= 8 ? false : true
    })
    setNameError({
      upperCase: !(/[A-Z]/g.test(name))
    })
  }, [pass, name])
  const handleStartClick = (e) => {
    e.preventDefault()
    const getdata = async () => {
      try {
        let res = await axioss.post("/users", {
          name,
          avatar: userName,
          email,
          password: pass
        })
        console.log(res);
        if (res.status === 201) {
          toast.success("Success")
     setTimeout(()=>{
navigate("/Login")
     },6000)
        }
        else {
          toast.error("unSuccess")
        }
      }
      catch (error) {
        if (error.response) {
          toast.error(error.response.data.message[0])
        }
      }




    }
    getdata()
  }
  return (
    <div className={s.body}>
      <form onSubmit={handleStartClick} action="#" className={s.form}>
        <h1 className={s.form__tit}>Register</h1>
        <input type="text" className={s.form__inp} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        {
          nameError.upperCase && <p className={s.formName__text}>should begin with UpperWord!</p>

        }
        <input type="password" className={s.form__inp} placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        {
          passError.caracters && <p className={s.formPass__text}>At least 8 characters!</p>
        }
        <input type="email" className={s.form__inp} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="url" className={s.form__inp} placeholder="url" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <Button btnType="submit" className={s.form__btn}>
          Register
        </Button>
      </form>
    </div>
  )
}

export default SignUp