import { createContext, useReducer } from "react";
import { authReducer } from './authReducer';

//Definir como va a lucir la información que guardaré en este context
export interface AuthState {
    isLoggedIn: boolean;
    username ?: string;
    favoriteIcon ?: string;
};

//Estado inicial de mi context
export const authInitialState: AuthState= {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

//AuthContextProps es todo lo que el context le dará a los hijos (child components)
export interface AuthContextProps  {
    authState: AuthState, //para mostratle a los hijos como luce la info que será guardada
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
    logOut: () => void;
};

//Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

//Crear el componente que provee la información a los hijos
export const AuthProvider = ( { children } : any ) =>  {

    //Un reducer es una simple función 
    //El use reducer es casi lo mismo que un useState, pero se usa cuando el state es más comlpejo y se necesita más seguridad
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    };

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            changeUsername,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}