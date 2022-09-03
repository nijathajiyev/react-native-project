import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import React from "react";

import {Style} from "./Style";

const Header = ({navigation}) => {
    return (
        <SafeAreaView style={Style.main}>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require("../../assets/img/Header/ham.png")} style={{marginLeft: 11.5, marginTop: 9,height:18,width:25
                    }}/>
                </TouchableOpacity>
                    <Image source={require("../../assets/img/Header/img.png")}
                       style={{marginLeft: 15, height: 32, width: 112, marginTop: 5}}/>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                <Image source={require("../../assets/img/Header/plus.png")} style={{height: 50,width:50,marginTop:2,marginRight:10}}/>
                    </TouchableOpacity>
                <Image source={require("../../assets/img/Header/admin.png")} style={{height: 40,width:40,marginTop:2,marginRight:15}}/>
            </View>
        </SafeAreaView>
    )
}

export default Header
