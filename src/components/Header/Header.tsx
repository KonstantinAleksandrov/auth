import './style.css'
import { FC } from 'react'
import { IHeaderProps } from './HeaderProps'

const Header: FC<IHeaderProps> = ({ text, clickHandler, name }) => {
    return (
        <div className='header'>
            <div className='header__UserName'>{name}</div>
            <div className='header__menu'>
                <div className='header__menu-item' onClick={clickHandler}>{text}</div>
            </div>
        </div>
    )
}

export default Header