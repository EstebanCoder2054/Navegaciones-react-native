import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext);
    console.log("🚀  LOGGING 🚀  ~ file: ContactsScreen.tsx ~ line 16 ~ ContactsScreen ~ authState?.isLoggedIn", authState?.isLoggedIn);

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>ContactsScreen</Text>


        {!authState?.isLoggedIn && (
            <Button
                title='Sign In'
                onPress={() => signIn()}
            />
        )}

        </View>
    )
}
