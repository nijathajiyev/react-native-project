import {Button, Image, Modal, Pressable, SafeAreaView, Text, TextInput, View, TouchableOpacity} from "react-native";
import React, {useCallback, useEffect, useLayoutEffect, useState} from "react"
import {Style} from "./Style";
import SelectDropdown from 'react-native-select-dropdown'
import {useTranslation} from "react-i18next";
import AsyncStorage from '@react-native-community/async-storage';
import PushNotification from "react-native-push-notification";
import { scale } from 'react-native-size-matters';
import {handleNotification} from "../../Notification/notification";

export const countries = [
    {title:"en", image:require("../../assets/img/language/en.png")},
    {title:"az", image:require("../../assets/img/language/az.png")},
    {title:"fr", image:require("../../assets/img/language/fr.png")},
]

export const Login = (props) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const{t,i18n} = useTranslation();

    const Submit = useCallback(()=>{
        if(user.toLowerCase() === "as" && pass.toLowerCase() === "az"){
            AsyncStorage.setItem("username",user)
            props?.login()
            handleNotification()
        }else{
            setModalVisible(true)
        }
    }
    )

    useLayoutEffect(() => {
        AsyncStorage.getItem('username').then(res => {
            setUser(JSON.parse(res));
        })},[])

    const createChannels = ()=>{
        PushNotification.createChannel({
            channelId:"test-channel",
            channelName:"Test Channel"
        })
    }

    useEffect(()=>{
        createChannels()
    },[])

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
            <View style={{flexDirection:"row",position:"relative"}}>
                <Image source={require("../../assets/img/login/main.png")} style={{marginTop: scale(11), marginLeft: scale(19)}}/>
                    <View style={{position:"absolute",right:scale(15)}}>
                        <SelectDropdown
                            data={countries}
                            buttonStyle={Style.dropdown1BtnStyle}
                            dropdownStyle={Style.dropdown4DropdownStyle}
                            rowStyle={Style.dropdown2RowStyle}
                            rowTextStyle={Style.dropdown2RowTxtStyle}
                            defaultValueByIndex={selectLanguage()}
                            renderCustomizedButtonChild={(selectedItem, index) => <Image style={{height:scale(41),width:scale(41)}} source={selectedItem?.image}/>}
                            renderCustomizedRowChild={(item, index) => <Image style={{height:scale(41),width:scale(41)}} source={item?.image}/>}
                            onSelect={lang => {
                                i18n.changeLanguage(lang.title)
                                // console.log(lang)
                            }}
                        />
                    </View>
            </View>
            {Platform.OS === "android" ?
                <View>
                    <Image source={require("../../assets/img/login/img.png")} style={{marginTop: scale(25), marginLeft: scale(15)}}/>
                    <Text style={Style.loginTextAndroid}>{t("welcome")}</Text>
                </View>:
                <View>
                    <Image source={require("../../assets/img/login/img.png")} style={{marginTop: scale(55), marginLeft: scale(40)}}/>
                    <Text style={Style.loginText}>{t("welcome")}</Text>
                </View>
            }

            <View>
                {Platform.OS === "android"?
                    <View>
                        <TextInput
                            style={{ paddingLeft: scale(18),marginTop:scale(0),fontSize:scale(14), height: scale(42),width:scale(320),backgroundColor:"#5A5B70",marginLeft:scale(15),}}
                            placeholder={t("user")}
                            placeholderTextColor={'#C7C7C7'}
                            onChangeText={setUser}
                            value={user}
                            // maxLength={9}
                        />

                        <TextInput
                            style={{ paddingLeft: scale(18),marginTop:scale(17.44),fontSize:scale(14), height: scale(42),width:scale(320),backgroundColor:"#5A5B70",marginLeft:scale(15),}}
                            placeholder={t("pass")}
                            placeholderTextColor={'#C7C7C7'}
                            onChangeText={setPass}
                            value={pass}
                            // maxLength={9}
                        />
                    </View>:
                    <View>
                        <TextInput
                            style={{ paddingLeft: scale(18),marginTop:scale(0),fontSize:scale(14), height:scale( 42),width:scale(320),backgroundColor:"#5A5B70",marginLeft:scale(15),}}
                            placeholder={t("user")}
                            placeholderTextColor={'#C7C7C7'}
                            onChangeText={setUser}
                            value={user}
                            // maxLength={9}
                        />

                        <TextInput
                            style={{ paddingLeft: scale(18),marginTop:scale(17.44),fontSize:scale(14), height: scale(42),width:scale(320),backgroundColor:"#5A5B70",marginLeft:scale(15),}}
                            placeholder={t("pass")}
                            placeholderTextColor={'#C7C7C7'}
                            onChangeText={setPass}
                            value={pass}
                            // maxLength={9}
                        />
                    </View>}

                {Platform.OS === "android"?
                    <TouchableOpacity style={{height: scale(42),width:scale(320),backgroundColor:"#C035A2",marginTop:scale(32),borderRadius:scale(5),marginLeft:scale(15)}} onPress={()=>Submit()}>
                        <Text style={{color:"#fff",alignItems:"center",justifyContent:"center",flexDirection:"row",marginTop:scale(12),marginLeft:scale(150)}}>{t("sign")}</Text>
                    </TouchableOpacity>:
                    <View style={{height: scale(42),width:scale(320),backgroundColor:"#C035A2",marginTop:scale(32),paddingVertical:scale(5),borderRadius:scale(5),marginLeft:scale(15)}}>
                        <Button title={t("sign")} onPress={()=>Submit()} color="#fff"/>
                    </View>}

            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={Style.centeredView}>
                    <View style={Style.modalView}>
                        <Text style={Style.textStyle}>{t("usOrPassWrong")}</Text>
                        <Pressable
                            style={Style.buttonCancel}
                            onPress={() => setModalVisible(false)}
                        >
                                <Text style={Style.buttonCancelText}>{t("close")}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}


