import { authReducer } from './authReducer/authReducer';
import { AuthActionCreators } from './authReducer/actionCreators';

export const reducers =  { authReducer };
export const allActionCreators = {
    ...AuthActionCreators
}
