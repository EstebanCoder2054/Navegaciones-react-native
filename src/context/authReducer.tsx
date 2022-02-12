import { AuthState } from './AuthContext';

type AuthAction = 
    { type: 'signIn' } | 
    { type: 'changeFavIcon', payload: string } |
    { type: 'changeUsername', payload: string } |
    { type: 'logOut' };

//el reducer es el que se encarga de generar los nuevos states y de retornarlos
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch ( action.type ) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            };

        case 'changeFavIcon': 
            return {
                ...state,
                favoriteIcon: action.payload,
            };

        case 'logOut': 
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
            };

        case 'changeUsername': 
            return {
                ...state,
                username: action.payload,
            }
    
        default:
            return state;
    }


}