import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    //el argumento que se le manda al useContext es el context al cuál queremos acceder, en este caso el AuthContext
    const { authState } = useContext(AuthContext);
    const { favoriteIcon } = authState;
    const insets = useSafeAreaInsets();

    return (
        <View style={{ 
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>Settings Screen</Text>

            <Text>{ JSON.stringify(authState, null, 4) }</Text>

        { favoriteIcon && (
            <Icon
                name={favoriteIcon}
                size={150}
                color={colores.primary}
            />
        ) }
        </View>
    )
}
