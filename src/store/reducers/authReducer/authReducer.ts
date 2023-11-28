import { IAuthState, AuthAction, AuthActionsEnum } from './types';
import { IUser } from '../../../models';

const initialState: IAuthState = {
    isAuth: false,
    user: {} as IUser,
    error: '',
    isLoading: false
};

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };

        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false} 

        case AuthActionsEnum.SET_USER:
            return { ...state, user: action.payload }

        case AuthActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload} 

        default:
            return state;
    }
};
