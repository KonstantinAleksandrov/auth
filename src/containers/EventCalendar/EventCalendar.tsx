import './style.css'
import { FC } from 'react'
import { Calendar } from 'antd'

const EventCalendar: FC = ({ }) => {
    return (
        <div className='eventCalendar'>
            <Calendar />
        </div>
    )
}

export default EventCalendar