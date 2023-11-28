import './style.css'
import { FC } from 'react'
import { IInputProps } from './inputProps'
import { useState } from 'react'

const Input: FC<IInputProps> = ({ title, type, required, value, changeHandler, onFocusHandler, validationResult }) => {
    const [active, setActive] = useState<boolean>()

    const focusHandler = () => {
        onFocusHandler()
        setActive(true)
    }

    const blurHandler = () => {
        setActive(false)
    }

    return (
        <div className='input'>
            <div className='input__title'>
                {required && <span className='input__title-required'>*</span>}
                {title}
            </div>
            <div className='input__container'>
                <input
                    className={active ? 'active' : ''}
                    type={type}
                    value={value}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
                <div
                    className={`input__nonValidMessage ${!validationResult.isValid ? 'active' : ''}`}
                >
                    {validationResult.message}
                </div>
            </div>
        </div >
    )
}

export default Input