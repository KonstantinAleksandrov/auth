import { IUser } from "../../../models";
import { AuthActionsEnum, ISetAuthAction, ISetErrorAction, ISetLoadingAction, ISetUserAction } from "./types";
import { AppDispatch } from "../../store";
import { dataService } from "../../../services";

export const AuthActionCreators = {
    setUser: (user: IUser):ISetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user }),
    setError: (error: string): ISetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): ISetLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading}),
    setIsAuth: (isAuth: boolean): ISetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const response: IUser[] = await dataService.getUsers()
            const currentUser = response.find((user)=> user.username === username && user.password === password)
            if (currentUser) {
                dataService.setToLocalStorage('auth','true')
                dataService.setToLocalStorage('username',currentUser.username)
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(currentUser))
            }else {
                dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при загрузке данных пользователя'))
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        dataService.removeLocalStorage('auth')
        dataService.removeLocalStorage('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setError(''))
    }

}