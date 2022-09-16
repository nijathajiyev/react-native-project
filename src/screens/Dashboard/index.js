import React from 'react'
import {View, Text, FlatList, StyleSheet, ScrollView, Image} from 'react-native'
import Header from '../../components/Header'
import {Style} from "./Style";
import PieChart from 'react-native-pie-chart';
import {StackedAreaChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {useTranslation} from "react-i18next";

const Dashboard = ({navigation, route}) => {
    const{t} = useTranslation()
    const widthAndHeight = 250
    const series = [223, 321, 123, 489, 537]
    const sliceColor = ['#EB5757', '#A84069', '#FFEB3B', '#8D43FF', '#FF9800']

    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 440,
            cherries: 1460,
            dates: 800,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 800,
            cherries: 1760,
            dates: 500,
        },
        {
            month: new Date(2015, 2, 1),
            apples: 1240,
            cherries: 850,
            dates: 900,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 1220,
            cherries: 1650,
            dates: 1200,
        },
    ]

    const colors = ['#914DF0', '#3FAEA3', '#F4A26C']
    const keys = ['apples', 'cherries', 'dates']
    const svgs = [
        {onPress: () => console.log('apples')},
        {onPress: () => console.log('cherries')},
        {onPress: () => console.log('dates')},
    ]
    return (
        <View style={{backgroundColor: "#1E1E30", height: "100%"}}>
            <Header navigation={navigation}/>
            <ScrollView style={{marginBottom:40,}}>
                <View style={Style.dougnutBox}>
                    <Text style={Style.dougnutText}>{t("menu.orders")}</Text>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        style={{marginLeft: 60, marginTop: 10,}}
                        sliceColor={sliceColor}
                        doughnut={true}
                        coverRadius={0.45}
                        coverFill={'#27283C'}
                    />
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:15,height:15,backgroundColor:"#EB5757",borderRadius:20,marginLeft:95,marginTop:20}}></View>
                            <Text style={{marginTop:19,fontSize:17,marginLeft:10,color:"#C7C7C7"}}>KFC</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:15,height:15,backgroundColor:"#A84069",borderRadius:20,marginLeft:65,marginTop:20}}></View>
                            <Text style={{marginTop:19,fontSize:17,marginLeft:10,color:"#C7C7C7"}}>KLM</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{width:15,height:15,backgroundColor:"#BB6BD9",borderRadius:20,marginLeft:95,marginTop:20}}></View>
                        <Text style={{marginTop:15,fontSize:20,marginLeft:10,color:"#C7C7C7"}}>American Express</Text>
                    </View>
                </View>
                <View style={Style.stackedAreaBox}>
                    <Text style={Style.stackedAreaText}>{t("total")}</Text>
                    <StackedAreaChart
                        style={{height: 300, width: "90%", marginLeft: 20, paddingVertical: 16}}
                        data={data}
                        keys={keys}
                        colors={colors}
                        curve={shape.curveNatural}
                        showGrid={false}
                        svgs={svgs}
                    />
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"row"}}>
                            <Image source={require("../../assets/img/Dashboard/boxF.png")} style={{marginLeft:35,height:27,marginTop:2,width:16}}/>
                            <Text style={{marginTop:5,color:"#C7C7C7",marginLeft:6,fontSize:20}}>{t("month.feb")}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Image source={require("../../assets/img/Dashboard/boxM.png")} style={{marginLeft:30,height:25,marginTop:5,width:16}}/>
                            <Text style={{marginTop:6,color:"#C7C7C7",marginLeft:6,fontSize:20}}>{t("month.mar")}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Image source={require("../../assets/img/Dashboard/boxA.png")} style={{marginLeft:30,height:27,marginTop:2,width:16}}/>
                            <Text style={{marginTop:5,color:"#C7C7C7",marginLeft:6,fontSize:20}}>{t("month.apr")}</Text>
                        </View>
                    </View>
                </View>
                <View style={Style.riskBox}>
                    <Text style={Style.riskText}>{t("risk")}</Text>
                    <Text style={Style.riskTextP}>{t("noRisk")}</Text>
                </View>
                <View style={Style.actionBox}>
                    <Text style={Style.actionText}>{t("action")}</Text>
                    <Text style={Style.actionTextP}>{t("noAction")}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard
