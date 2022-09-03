import React from 'react'
import { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import Header from '../../components/Header'
// import Colors from '../constants/Colors'

// const CardItem = ({item}) => {
//     const [showMore, setShowMore] = useState(false)
//     return (
//         <Card>
//             <Card.Cover source={{ uri: item.image }} />
//             <Card.Content>
//                 <Title>{item.title}</Title>
//                 <Paragraph numberOfLines={showMore ? 0 : 2}>{item.description}</Paragraph>
//             </Card.Content>
//             <Card.Actions>
//                 <Button>Like</Button>
//                 <Button>Share</Button>
//                 <Button onPress={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Read More"}</Button>
//             </Card.Actions>
//         </Card>
//     )
// }

const Dashboard = ({navigation, route}) => {
    return (
        <View style={{backgroundColor:"#1E1E30",height:"100%"}}>
            <Header navigation={navigation}/>
            <View>

            </View>
            {/*<FlatList*/}
            {/*    data={data}*/}
            {/*    keyExtractor={(item, index) => item.id + index.toString()}*/}
            {/*    contentContainerStyle={{paddingBottom: 20}}*/}
            {/*    ListHeaderComponent={*/}
            {/*        <Header*/}
            {/*            title={route.name} headerBg={Colors.green} iconColor={Colors.black}*/}
            {/*            menu titleAlight="center" optionalBadge={5} navigation={navigation}*/}
            {/*            right="more-vertical" rightFunction={() => console.log('right')}*/}
            {/*            optionalIcon="bell" optionalFunc={() => console.log('optional')}*/}
            {/*        />*/}
            {/*    }*/}
            {/*    renderItem={({ item }) => (*/}
            {/*        <CardItem item={item} />*/}
            {/*    )}*/}
            {/*/>*/}
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    cardStyle: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    }
})
