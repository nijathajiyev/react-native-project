import {Text, View} from "react-native";
import React from "react"
import MyDrawer from "../../Navigation/MyDrawer";
import { NavigationContainer } from '@react-navigation/native'

export const Main = (props)=>{
    return(
        <View style={{flex:1}}>
            <NavigationContainer>
                <MyDrawer {...props}/>
            </NavigationContainer>
        </View>
    )
}
