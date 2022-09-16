import {FlatList, Image, ScrollView, Text, TouchableOpacity, View, Alert, Modal, Pressable} from "react-native";
import Header from "../../components/Header";
import React, {useEffect, useState} from "react";
import {Style} from "./Style";
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from "react-redux";
import {productDeleteApi} from "../../api/product";
import {addProduct} from "../../store/slice/all/allSlice";
import {useTranslation} from "react-i18next";


const Product = ({navigation}) => {
    const productData = useSelector(state => state.slice.product)
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState(null);
    const [box, setBox] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const {t} = useTranslation()

    const renderItem = ({item}) => (
        <Item {...item} />
    );
    const deleteCard = (id) => {
        console.log(id)
        setModalVisible(false)
        productDeleteApi(id).then(res => {
            console.log(productData)
            let newArr = [...productData].filter(item => item.id !== id);
            dispatch(addProduct(newArr))
        })
    }

    const selectCard = (name) => {
        let filterCard = [...productData].filter(item => item.name === name)
        setDropdown(filterCard)
    }

    const searchCard = () => {
        setBox(dropdown)
    }

    const modal = (id) => {

    }

    const Item = ({name, restaurant, price, id}) => (
        <View style={Style.card}>
            <Image source={require("../../assets/img/Products/piz.png")} style={Style.cardImg}/>
            <Text style={Style.cardMainTitle}>{name}</Text>
            <Text style={Style.cardTitle}>{restaurant}</Text>
            <Text style={Style.cardPrice}>${price}</Text>

            <TouchableOpacity style={Style.cardIcons} onPress={() => setModalVisible(true)}>
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
                            <Text style={Style.textStyle}>{t("title_delete")}</Text>
                            <Text style={Style.textStyleP}>{t("subtitle_product_delete")}</Text>
                            <Pressable
                                style={[Style.button, Style.buttonDelete]}
                                // onPress={() => deleteCard(id)}
                            >
                                <Text style={Style.buttonDeleteText}>delete</Text>
                            </Pressable>
                            <Pressable
                                style={Style.buttonCancel}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={Style.buttonCancelText}>cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Image source={require("../../assets/img/Products/trash.png")} style={Style.cardIcon}/>
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={Style.main}>
            <Header navigation={navigation}/>
            <View style={Style.headBox}>
                <Text style={Style.boxText}>{t("menu.products")}</Text>
                <View>
                    <Dropdown
                        style={Style.dropdown}
                        containerStyle={Style.shadow}
                        data={productData}
                        selectedTextStyle={Style.plStyle}
                        labelField="name"
                        valueField="id"
                        label="Dropdown"
                        placeholder={t("ctype")}
                        onChange={item => selectCard(item.name)}
                        placeholderStyle={Style.plStyle}
                        iconColor="#C7C7C7"
                        textError="Error"
                    />
                    <TouchableOpacity style={{flexDirection: "row"}} onPress={() => searchCard()}>
                        <View style={Style.prButton}>
                            <Image source={require("../../assets/img/Products/search.png")} style={Style.btnIcon}/>
                            <Text style={{marginTop: 10, fontWeight: "bold", color: "#fff", fontSize: 20}}>{t("srch")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {box ?
                <FlatList
                    data={box}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> :
                <FlatList
                    data={productData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />}
        </View>
    )
}

export default Product;
