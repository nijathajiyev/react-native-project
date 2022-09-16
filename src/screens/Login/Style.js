import { ScaledSheet } from 'react-native-size-matters';

export const Style = ScaledSheet.create({
    main:{
        backgroundColor:"#1E1E30",
        height:"100%",
    },
    loginTextAndroid:{
        marginLeft:'10@s',
        paddingVertical:'35@s',
        // height:47.91,
        width:'400@s',
        color:"#C7C7C7",
        fontSize:'44@s',
        lineHeight:'29.26@s',
    },
    loginText:{
        marginLeft:'15@s',
        paddingVertical:'40@s',
        // height:47.91,
        width:'400@s',
        color:"#C7C7C7",
        fontSize:'47@s',
        lineHeight:'29.26@s',
    },
    dropdown1BtnStyle: {
        width: '56@s',
        height: '51@s',
        marginTop: '5@s',
        borderRadius: '50@s',
        backgroundColor:"#1E1E30"
    },
    dropdown4DropdownStyle: {width: '59@s',backgroundColor: '#27283C',marginRight:'205@s'},
    dropdown2RowStyle: { borderBottomColor: '#F3F4F6',width:'41@s',height:'73@s',marginLeft:'9@s'},
    dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },



    centeredView: {
        height:"100%",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '10@s'
    },
    modalView: {
        margin: '20@s',
        backgroundColor: "white",
        borderRadius: '4@s',
        padding: '35@s',
        height:"25%",
        width:"90%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: '10@s',
            height: '2@s'
        },
        shadowOpacity: '0.25@s',
        shadowRadius: '4@s',
        elevation: '5@s'
    },
    buttonCancel: {
        marginTop:'30@s',
        borderRadius: '4@s',
        padding: '10@s',
        elevation: '2@s',
        width:"98%",
        // backgroundColor: "#D63626",
        borderWidth:'2@s',
        borderColor:"#BDBDBD"
    },
    buttonCancelText: {
        color: "#BDBDBD",
        // backgroundColor:"#000",
        textAlign:"center",
        fontSize:'20@s'
    },

    textStyle: {
        color: "#000000",
        marginTop:'6@s',
        fontWeight:"bold",
        fontSize:'26@s',
        textAlign: "center"
    },
    textStyleP: {
        color: "#4F4F4F",
        fontSize:'18@s',
        paddingHorizontal:'30@s',
        lineHeight:'30@s',
        marginTop:'15@s',
        textAlign: "center"
    },

})
