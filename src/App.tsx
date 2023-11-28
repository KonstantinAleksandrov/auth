import { AppRouter } from "./containers"
import { useEffect } from 'react'
import { dataService } from "./services"
import { useAction } from "./hooks"
import { IUser } from "./models"

function App() {
    const { setUser, setIsAuth } = useAction()

    useEffect(() => {
        const isAuth = dataService.getFromLocalStorage('auth')
        if (isAuth) {
            const username = dataService.getFromLocalStorage('username')
            setUser({ username: username || '' } as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
        <div className="App">
            <AppRouter />
        </div>
    )
}

export default App
