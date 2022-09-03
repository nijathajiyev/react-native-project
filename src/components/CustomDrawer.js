import Animated from "react-native-reanimated";
import RadialGradient from "react-native-radial-gradient";
import Styles from "../common/Styles";
import Colors from "../constants/Colors";
import {BlurView} from "@react-native-community/blur";
import React from "react"
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../common/Styles";
import Feather from 'react-native-vector-icons/Feather'
import { TouchableRipple, Title } from 'react-native-paper';
import {Image, Text, TouchableOpacity, View} from "react-native";

const UserView = ({ navigation, opacity }) => {
    return (
            <Animated.View style={[styles.drawerHeader, { opacity }]}>
                <View style={{flexDirection:"row",marginBottom:32.42}}>
        <TouchableRipple onPress={() => navigation.goBack()}>
                <Image style={{marginTop:6,width: 20,height: 30,marginLeft:11}} source={require('../assets/img/Drawer/back.png')} />
        </TouchableRipple>
                <Image style={{marginTop:6,width: 110,height: 35,marginLeft:30}} source={require('../assets/img/Drawer/icon.png')} />
                </View>
            </Animated.View>
    )
}

const CustomDrawer = (props) => {
    const translateX = Animated.interpolateNode(props.progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    const opacity = Animated.interpolateNode(props.progress, {
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.1, 1]
    })
    return (
        <RadialGradient style={Styles.container}
                        colors={['#C74FEB']}
            // stops={[0.1, 0.5, 0.75, 1]}
                        center={[145, 100]}
                        radius={650}>
            <BlurView
                style={styles.blurAbsolute}
                blurType="light"
                blurAmount={20}
                overlayColor="transparent"
                reducedTransparencyFallbackColor="white"//ios only
            />
            <Animated.View style={{ flex: 1, transform: [{ translateX }] }}>
               <View style={{flex:1}}>
                   <DrawerContentScrollView {...props}>
                       <UserView {...props} opacity={opacity} />
                       <DrawerItemList {...props}/>
                   </DrawerContentScrollView>
                   <View style={{flex:1,marginTop:30,flexDirection:"row"}}>
                       <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>props.login()}>
                       <Image source={require("../assets/img/Drawer/lgo.png")} style={{marginLeft:39,width:22,height:22}}/>
                       <Text style={{marginLeft:30,color:"rgba(242, 242, 242, 0.87)"}}>Logout</Text>
                       </TouchableOpacity>
                   </View>
               </View>
            </Animated.View>
        </RadialGradient>
    )
}

export default CustomDrawer
