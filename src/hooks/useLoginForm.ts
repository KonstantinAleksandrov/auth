import { useEffect, useState } from 'react'
import { inputValidation } from '../utils'

interface IInitialForm {
    login: string,
    password: string
}

interface ITouched {
    login: boolean,
    password: boolean
}

interface IValidInput {
    isValid: boolean,
    message: string
}

interface IValidForm {
    login: IValidInput,
    password: IValidInput
}

export const useLoginform = (loginInputTitle: string, passworInputTitle: string) => {
    const [form,setForm] = useState<IInitialForm>({login: '', password: ''})
    const [tuched,setTouched] = useState<ITouched>({login: false, password: false})
    const [formValid,setFormValid] = useState<IValidForm>({
        login: {
            isValid: false,
            message: ''
        },
        password: {
            isValid: false,
            message: ''
        }
    })

    useEffect(()=>{
        if(tuched.login) {
            validationLogin()
        }
    },[form.login])

    useEffect(()=>{
        if(tuched.password) {
            validationPassword()
        }
    },[form.password])


    const changeLogin = (value: string) => {
        setForm((prev)=> {
            return {...prev, login: value}
        })
    }

    const changePassword = (value: string) => {
        setForm((prev)=> {
            return {...prev, password: value}
        })
    }

    const changeLoginTouched = () => {
        setTouched((prev)=>{
            return {...prev, login: true}
        })
    }

    const changePasswordTouched = () => {
        setTouched((prev)=>{
            return {...prev, password: true}
        })
    }

    const validationLogin = () => {
        const validationResult = inputValidation('login',form.login,loginInputTitle)
        setFormValid((prev)=>{
            return {
                ...prev,
                login: validationResult
            }
        })
    }

    const validationPassword = () => {
        const validationResult = inputValidation('password',form.password,passworInputTitle)
        setFormValid((prev)=>{
            return {
                ...prev,
                password: validationResult
            }
        })
    }

    return { 
        form, 
        formValid, 
        changeLogin, 
        changePassword, 
        changeLoginTouched, 
        changePasswordTouched,
        validationLogin,
        validationPassword 
    }

} 