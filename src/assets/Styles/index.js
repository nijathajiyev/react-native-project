import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    cardStyle: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    drawerNavigator: {
        width: 290,
        backgroundColor: 'transparent',
        // backgroundColor: Colors.accent,
    },
    absolute: {
        flex: 1,
        height: '100%',
    },
    icon: {
        paddingBottom: 2,
    },
    drawerHeader: {
        width: '100%',
        height: 200,
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        // backgroundColor: 'yellow',
    },
    profileImage: {
        backgroundColor: Colors.light,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: Colors.accent,
    },
    backImage: {
        backgroundColor: Colors.light,
        width: 11.67,
        height: 19.8,
        borderRadius: 50,
        marginRight:10,
        borderWidth: 5,
        borderColor: Colors.accent,
    },
    textContainer: {
    },
    title: {
        color: Colors.accent,
        fontSize: 22,
        fontWeight: '500',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginTop: 10,
    },
    description: {
        color: Colors.accent,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 8
    },
    blurAbsolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})
