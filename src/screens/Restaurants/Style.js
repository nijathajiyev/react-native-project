import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    main:{
        backgroundColor:"#1E1E30",
        height:"100%"
    },
    headBox:{
        backgroundColor:"#27283C",
        marginTop:70,
        height:"15%",
        marginHorizontal:9,
        borderRadius:4
    },
    boxText:{
        marginTop:10,
        marginLeft:22,
        fontSize:30,
        color:"#C7C7C7"
    },
    prButton:{
        flexDirection:"row",
        width:365,
        marginLeft:22,
        height:45,
        marginTop:18,
        borderRadius:4,
        backgroundColor:"#C035A2",
        shadowColor:"#27AE6033",
        shadowOffset: { width: 1, height: 7 },
        shadowOpacity:  0.9,
        shadowRadius: 5,
        elevation: 5,

    },
    btnIcon:{
        height:25,
        width:25,
        marginTop:10,
        marginLeft:60,
        marginRight:10
    },
    card:{
        flexDirection:"row",
        width:"80%",
        height:120,
        borderRadius:5,
        backgroundColor:"#fff",
        marginLeft:46,
        marginTop:40,
        position:"relative"
    },
    cardImg:{
        height:60,
        width:70,
        marginTop:30,
        marginLeft:33
    },
    cardTitle:{
        color:"#1E1E30",
        fontSize:25,
        marginTop:45,
        marginLeft:28
    },

    cardIcons:{
        position:"absolute",
        right:10,
        top:10
    },
    trashIcon:{
        height:25,
        width:20,

    },
    boxButton:{
        marginTop: 10,
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20
    }
})
