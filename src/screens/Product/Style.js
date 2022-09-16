import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    main:{
        backgroundColor:"#1E1E30",
        height:"100%"
    },
    headBox:{
        backgroundColor:"#27283C",
        marginTop:70,
        height:"23%",
        marginHorizontal:9,
        borderRadius:4
    },
    cardImg:{
        width:193,
        height:179,
        marginTop:15,
        marginLeft:40

    },
    cardMainTitle:{
        marginLeft:50,
        marginTop:15,
        color:"#1E1E30",
        fontSize:22
    },
    cardTitle:{
        marginLeft:50,
        marginTop:20,
        color:"#8E8E93",
        fontSize:15
    },
    cardPrice:{
        marginLeft:50,
        marginTop:30,
        color:"#00B2A9",
        fontSize:15
    },
    cardIcons:{
        position:"absolute",
        bottom:27,
        right:20
    },
    cardIcon:{
        width:18.15,
        height:22.55,

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
        marginTop:14,
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
        marginLeft:120,
        marginRight:10
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 40,
    },
    plStyle:{
      color:"#fff",
        marginLeft:4,
        fontSize:18
    },

    card:{
        width:"64%",
        height:350,
        borderRadius:5,
        backgroundColor:"#fff",
        marginLeft:76,
        marginTop:30,
        position:"relative"
    },
    dropdown: {
        backgroundColor: '#5A5B70',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingHorizontal:15,
        marginTop: 16,
        marginHorizontal:22,
        height:45,
        borderRadius:4
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    centeredView: {
        height:"100%",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 35,
        height:"40%",
        width:"90%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,

    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    buttonDelete: {
        marginTop:25,
        width:"98%",
        backgroundColor: "#D63626",
    },
    buttonCancel: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,
        marginTop:10,
        width:"98%",
        // backgroundColor: "#D63626",
        borderWidth:2,
        borderColor:"#BDBDBD"
    },
    buttonDeleteText: {
        color: "#fff",
        textAlign:"center",
        fontSize:20
    },
    buttonCancelText: {
        color: "#BDBDBD",
        // backgroundColor:"#000",
        textAlign:"center",
        fontSize:20
    },

    textStyle: {
        color: "#000000",
        marginTop:46,
        fontWeight:"bold",
        fontSize:26,
        textAlign: "center"
    },
    textStyleP: {
        color: "#4F4F4F",
        fontSize:18,
        paddingHorizontal:30,
        lineHeight:30,
        marginTop:15,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
