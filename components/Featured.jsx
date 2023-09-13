import React from 'react';
import {View,Text,FlatList,StyleSheet,Image,Pressable} from 'react-native';

const Featured = ({navigation}) => {
    return (
        <View >
            <Text >Featured Restaurants</Text>
            {/* <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <Pressable onPress={() => navigation.navigate('Details',{item})}>
                        <Image source={{uri: item.image}}/>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            /> */}
        </View>
    );
};

export default Featured;