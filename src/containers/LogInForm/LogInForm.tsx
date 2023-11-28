import './style.css'
import { FC } from 'react'
import { Input, Loader } from '../../components'
import { useTypedSelector, useLoginform, useAction } from '../../hooks'


const LogInForm: FC = ({ }) => {
    const { setError, login } = useAction()
    const { error, isLoading } = useTypedSelector(state => state.authReducer)
    const {
        form,
        formValid,
        changeLogin,
        changePassword,
        changeLoginTouched,
        changePasswordTouched,
        validationLogin,
        validationPassword
    } = useLoginform('Логин', 'Пароль')

    const changeLoginHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        changeLogin(input.value)
        setError('')
    }

    const changePasswordHandler = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        changePassword(input.value)
        setError('')
    }

    const submit = async () => {
        validationLogin()
        validationPassword()
        if (formValid.login.isValid && formValid.password.isValid) {
            // @ts-ignore
            login(form.login, form.password)
        }
    }

    return (
        <div className='logInForm'>
            {error && <div className='logInForm__error'>{error}</div>}
            <Input
                type='text'
                title='Логин'
                required={true}
                changeHandler={changeLoginHandler}
                onFocusHandler={changeLoginTouched}
                value={form.login}
                validationResult={formValid.login}
            />
            <Input
                type='password'
                title='Пароль'
                required={true}
                changeHandler={changePasswordHandler}
                onFocusHandler={changePasswordTouched}
                value={form.password}
                validationResult={formValid.password}
            />
            <div className='logInForm__buttons'>
                <div className='logInForm__buttons-loginBtn' onClick={submit}>Войти</div>
            </div>
            {isLoading && <Loader />}
        </div>
    )
}

export default LogInForm