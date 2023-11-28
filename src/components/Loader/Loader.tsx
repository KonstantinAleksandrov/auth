import './style.css'
import { FC } from 'react'
import loaderIcon from '../../images/icons/loaderIcon.svg'

const Loader: FC = ({ }) => {
    return (
        <div className='loader'>
            <div className='loader__icon'>
                <img src={loaderIcon} alt="loader_icon" />
            </div>
        </div>
    )
}

export default Loader