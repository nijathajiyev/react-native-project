import {Button, Image, SafeAreaView, Text, TextInput, View} from "react-native";
import React, {useCallback, useState} from "react"
import {Style} from "./Style";
import SelectDropdown from 'react-native-select-dropdown'
import {useTranslation} from "react-i18next";
// import * as RNLocalize from "react-native-localize";

const countries = [
    {title:"en", image:require("../../assets/img/language/en.png")},
    {title:"az", image:require("../../assets/img/language/az.png")},
    {title:"fr", image:require("../../assets/img/language/fr.png")},
]

export const Login = (props) => {
    // console.log(RNLocalize.getLocales())
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const{t,i18n} = useTranslation()

    const Submit = useCallback(()=>{
        if(user.toLowerCase() == "admin" || pass.toLowerCase() == "admin"){
            console.log(props,"if")
            props.login()
        }else{
            console.log("false")
        }
    }
    )

    // const selectLanguage =()=>{
    //     if(i18n.language == "en"){
    //         return 0
    //     }else if(i18n.language == "az"){
    //         return 1
    //     }else if(i18n.language == "fr"){
    //         return 2
    //     }else{
    //         return 0
    //     }
    // }

    return (
        <SafeAreaView style={Style.main}>
            <View style={{flexDirection:"row",position:"relative"}}>
                <Image source={require("../../assets/img/login/main.png")} style={{marginTop: 11, marginLeft: 19}}/>
                    <View style={{position:"absolute",right:15}}>
                        <SelectDropdown
                            data={countries}
                            buttonStyle={Style.dropdown1BtnStyle}
                            dropdownStyle={Style.dropdown4DropdownStyle}
                            rowStyle={Style.dropdown2RowStyle}
                            rowTextStyle={Style.dropdown2RowTxtStyle}
                            defaultValueByIndex={0}
                            renderCustomizedButtonChild={(selectedItem, index) => <Image style={{height:41,width:41}} source={selectedItem?.image}/>}
                            renderCustomizedRowChild={(item, index) => <Image style={{height:41,width:41}} source={item?.image}/>}
                            onSelect={lang => {
                                i18n.changeLanguage(lang.title)
                                // console.log(lang)
                            }}
                        />
                    </View>
            </View>
            <Image source={require("../../assets/img/login/img.png")} style={{marginTop: 55, marginLeft: 38}}/>
            <Text style={Style.loginText}>{t("welcome")}</Text>
            <View>
                <TextInput
                    style={{ paddingLeft: 18,marginTop:0,fontSize:14, height: 42,width:340,backgroundColor:"#5A5B70",marginLeft:45,}}
                    placeholder={t("user")}
                    placeholderTextColor={'#C7C7C7'}
                    onChangeText={setUser}
                    value={user}
                    // maxLength={9}
                />

                <TextInput
                    style={{ paddingLeft: 18,marginTop:17.44,fontSize:14, height: 42,width:340,backgroundColor:"#5A5B70",marginLeft:45,}}
                    placeholder={t("pass")}
                    placeholderTextColor={'#C7C7C7'}
                    onChangeText={setPass}
                    value={pass}
                    // maxLength={9}
                />

                <View style={{height: 42,width:340,backgroundColor:"#C035A2",marginTop:32,borderRadius:5,marginLeft:45}}>
                    <Button title={t("sign")} onPress={()=>Submit()} color="#fff"/>
                </View>
            </View>
        </SafeAreaView>
    )
}


