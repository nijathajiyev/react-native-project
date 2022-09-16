import PushNotificationIOS from '@react-native-community/push-notification-ios';

const handleNotification = ()=>{
    PushNotificationIOS.presentLocalNotification({
        alertTitle: "Welcome",
        alertBody:"Welcome Nijat's World!"
    })
}

export {handleNotification}
