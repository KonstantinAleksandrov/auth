import './style.css'
import { FC } from 'react'
import { Header } from '../../components'
import { useTypedSelector, useAction } from '../../hooks'
import { EventCalendar } from '../../containers'

const EventPage: FC = ({ }) => {
    const { user } = useTypedSelector(state => state.authReducer)
    const { logout } = useAction()

    const logOut = () => {
        //@ts-ignore
        logout()
    }

    return (
        <div className='eventPage'>
            <Header text='Выйти' clickHandler={logOut} name={user.username} />
            <div className='eventPage__container'>
                <EventCalendar />
            </div>
        </div>
    )
}

export default EventPage