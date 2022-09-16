import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import React from "react";

import {Style} from "./Style";
import SelectDropdown from "react-native-select-dropdown";
import {countries} from "../../screens/Login";
import {useTranslation} from "react-i18next";

const Header = ({navigation}) => {

    const{t,i18n} = useTranslation()

    const selectLanguage =()=>{
        if(i18n.language == "en"){
            return 0
        }else if(i18n.language == "az"){
            return 1
        }else if(i18n.language == "fr"){
            return 2
        }else{
            return 0
        }
    }


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
                <Image source={require("../../assets/img/Header/plus.png")} style={{height: 50,width:50,marginTop:2,marginRight:70}}/>
                    </TouchableOpacity>
                <View style={{flexDirection:"row",position:"relative"}}>
                    <View style={{position:"absolute",right:10}}>
                        <SelectDropdown
                            data={countries}
                            buttonStyle={Style.dropdown1BtnStyle}
                            dropdownStyle={Style.dropdown4DropdownStyle}
                            rowStyle={Style.dropdown2RowStyle}
                            rowTextStyle={Style.dropdown2RowTxtStyle}
                            defaultValueByIndex={selectLanguage()}
                            renderCustomizedButtonChild={(selectedItem, index) => <Image style={{height:41,width:41}} source={selectedItem?.image}/>}
                            renderCustomizedRowChild={(item, index) => <Image style={{height:41,width:41}} source={item?.image}/>}
                            onSelect={lang => {
                                i18n.changeLanguage(lang.title)
                                // console.log(lang)
                            }}
                        />
                    </View>
                </View>
                <Image source={require("../../assets/img/Header/admin.png")} style={{height: 40,width:40,marginTop:2,marginRight:15}}/>
            </View>
        </SafeAreaView>
    )
}

export default Header
