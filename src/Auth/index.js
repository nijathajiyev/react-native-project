import React, {useEffect, useState} from "react"
import {View} from "react-native";
import {Main} from "../screens/Main";
import {Login} from "../screens/Login";
import {Style} from "../screens/Login/Style.js";
import {productApi} from "../api/product";
import {useDispatch} from "react-redux";
import {addProduct, addRestaurant} from "../store/slice/all/allSlice";
import {restaurantApi} from "../api/restaurant";


export const Auth = ()=>{

    const [isLogin,setIsLogin] = useState(false)
    const dispatch = useDispatch()

    const login=()=>{
        setIsLogin(!isLogin)
    }

    useEffect(()=>{
        productApi.then(res=>(
            dispatch(addProduct(res.data.products))
        ))
        restaurantApi.then(res=>(
            // console.log(res.data),
            dispatch(addRestaurant(res.data.restaurants))
        ))
    },[])

    return(
        <View style={Style.main}>
            {isLogin ? <Main login={login}/> : <Login login={login}/>}
        </View>
    )
}


