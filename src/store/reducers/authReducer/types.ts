import { IUser } from "../../../models";

export interface IAuthState {
    isAuth: boolean
    user: IUser,
    isLoading: boolean,
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface ISetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface ISetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export interface ISetLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING
    payload: boolean
}

export interface ISetUserAction {
    type: AuthActionsEnum.SET_USER
    payload: IUser
}

export type AuthAction = ISetAuthAction | ISetLoadingAction | ISetErrorAction | ISetUserAction
