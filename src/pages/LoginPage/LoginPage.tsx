import './style.css'
import { FC } from 'react'
import { Header } from '../../components'
import { LogInForm } from '../../containers'

const LoginPage: FC = ({ }) => {

    const logIn = () => {
        console.log('logIn')
    }

    return (
        <div className='loginPage'>
            <Header text='Логин' clickHandler={logIn} />
            <div className='loginPage__form'>
                <LogInForm />
            </div>
        </div>
    )
}

export default LoginPage