import Settings from "../screens/Settings";
import {createDrawerNavigator} from "@react-navigation/drawer";
import React from "react"
import CustomDrawer from "../components/CustomDrawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Image} from "react-native";
import Dashboard from "../screens/Dashboard";
import Product from "../screens/Product";
import Restaurants from "../screens/Restaurants";
import Category from "../screens/Category";
import Offers from "../screens/Offers";
import Order from "../screens/Order";


const Drawer = createDrawerNavigator();

function MyDrawer({login}) {
    return (
            <Drawer.Navigator initialRouteName="Restaurants" drawerContent={(props) => <CustomDrawer login={login} {...props} />}
                              drawerContentOptions={{
                                  activeTintColor: 'rgba(252, 221, 236, 1)',
                                  inactiveTintColor: 'rgba(242, 242, 242, 0.87)', /* Font color for inactive screens' labels */
                              }}
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                    drawerIcon: ({ color, size }) => (
                    <Image source={require("../assets/img/Drawer/dsb.png")} style={{marginLeft:19,width:18,height:18}}/>)}}
                />
                <Drawer.Screen
                    name="Products"
                    component={Product}
                    options={{
                    drawerIcon: ({ color, size }) => (
                        <Image source={require("../assets/img/Drawer/prd.png")} style={{marginLeft:17,width:22,height:22}}/>)}}
                />
                <Drawer.Screen
                    name="Restaurants"
                    component={Restaurants}
                    options={{
                    drawerIcon: ({ color, size }) => (
                        <Image source={require("../assets/img/Drawer/rst.png")} style={{marginLeft:17,width:22,height:22}}/>)}}
                />
                <Drawer.Screen
                    name="Category"
                    component={Category}
                    options={{
                    drawerIcon: ({ color, size }) => (
                    <Image source={require("../assets/img/Drawer/ctg.png")} style={{marginLeft:17,width:22,height:22}}/>)}}
                />
                <Drawer.Screen
                    name="Orders"
                    component={Order}
                    options={{
                    drawerIcon: ({ color, size }) => (
                    <Image source={require("../assets/img/Drawer/ord.png")} style={{marginLeft:17,width:22,height:22}}/>)}}
                />
                <Drawer.Screen
                    name="Offer"
                    component={Offers}
                    options={{
                    drawerIcon: ({ color, size }) => (
                    <Image source={require("../assets/img/Drawer/ofr.png")} style={{marginLeft:17,width:22,height:22}}/>)}}
                />
            </Drawer.Navigator>
    );
}

export default MyDrawer
