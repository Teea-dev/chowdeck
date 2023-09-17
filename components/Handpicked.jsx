import React from 'react';
import {View,Text,FlatList,StyleSheet,Image,Pressable} from 'react-native';

const Handpicked = ({navigation}) => {

    const handpickedResturant=['Hexagon Rice','KFC-Ibadan',"Chef-kabs","Burger-King",'Starbucks']
    return (
        <View style={styles.container} >
            <Text >Handpicked for you 💚</Text>
            <FlatList
                data={handpickedResturant}
                renderItem={({item}) => (
                    <Pressable onPress={() => navigation.navigate('Details',{item})}>
                        <Image  source={{uri: item.image}}/>
                        <Text>{item}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Handpicked;
const styles = StyleSheet.create({

})