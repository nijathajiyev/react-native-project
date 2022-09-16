import PushNotification from "react-native-push-notification";

 const handleNotification = ()=>{
    PushNotification.localNotification({
        channelId:"test-channel",
        title:"click Submit",
        message:"Welcome Nijat's World!"
    })
}

export {handleNotification}
