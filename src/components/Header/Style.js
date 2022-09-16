import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    main:{
        backgroundColor:"#27283C",
        height:105,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomLeftRadius:20
    },
    dropdown1BtnStyle: {
        width: 56,
        height: 41,
        marginTop: 2,
        borderRadius: 50,
        backgroundColor:"#27283C"
    },
    dropdown4DropdownStyle: {width: 59,backgroundColor: '#27283C',marginRight:205},
    dropdown2RowStyle: { borderBottomColor: '#F3F4F6',width:41,height:73,marginLeft:9},
    dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
