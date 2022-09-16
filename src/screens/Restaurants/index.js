import React from "react"
import {Style} from "./Style";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import Header from "../../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {addRestaurant} from "../../store/slice/all/allSlice";


const Restaurants = ({navigation})=>{
    const restaurants = useSelector(state=>state.slice.restaurant);
    const dispatch = useDispatch()

    const renderItem = ({item}) => (
        <Item {...item} />
    );

    const Item = ({name, photo, id}) => (
        <View style={Style.card}>
            <Image source={{
                uri:photo
            }} style={Style.cardImg}/>
            <Text style={Style.cardTitle}>{name}</Text>
            <TouchableOpacity style={Style.cardIcons}
                              // onPress={()=>deleteCard(id)}
            >
                <Image source={require("../../assets/img/Products/trash.png")} style={Style.trashIcon}/>
            </TouchableOpacity>
        </View>
    );

    const deleteCard = (id)=>{
        const newArr = [...restaurants].filter(item=>item.id !== id);
        console.log(newArr)
        dispatch(addRestaurant(newArr))
    }

    return(
        <View style={Style.main}>
            <Header navigation={navigation}/>
            <View style={Style.headBox}>
                <Text style={Style.boxText}>Restaurants</Text>
                <TouchableOpacity style={{flexDirection: "row"}}>
                    <View style={Style.prButton}>
                        <Image source={require("../../assets/img/Restaurants/plus.png")} style={Style.btnIcon}/>
                        <Text style={Style.boxButton}>ADD RESTAURANTS</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={restaurants}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Restaurants
