import React from 'react'
import s from '../components/signUp/SignUp.module.scss'

const Button = ({children,btnType}) => {
  return (
    <button className={s.form__btn} type={btnType}>{children}</button>
  )
}

export default Button