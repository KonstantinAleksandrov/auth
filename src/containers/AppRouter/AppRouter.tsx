import './style.css'
import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../../routes'
import { useTypedSelector } from '../../hooks'

const AppRouter: FC = ({ }) => {
    const { isAuth } = useTypedSelector(state => state.authReducer)

    return (
        <div className='appRouter'>
            {
                isAuth
                    ?
                    <Routes>
                        {privateRoutes.map((route) => {
                            return (
                                <Route path={route.path} element={<route.component />} key={route.path} />
                            )
                        })}

                        <Route path={'*'} element={<Navigate to={RouteNames.EVENT} />} />
                    </Routes>
                    :
                    <Routes>
                        {publicRoutes.map((route) => {
                            return (
                                <Route path={route.path} element={<route.component />} key={route.path} />
                            )
                        })}
                        <Route path={'*'} element={<Navigate to={RouteNames.LOGIN} />} />
                    </Routes>
            }
        </div>
    )
}

export default AppRouter