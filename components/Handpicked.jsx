import React from 'react';
import {View,Text,FlatList,StyleSheet,Image,Pressable} from 'react-native';

const Handpicked = ({navigation}) => {
    return (
        <View >
            <Text >Handpicked for you 💚</Text>
            {/* <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <Pressable onPress={() => navigation.navigate('Details',{item})}>
                        <Image  source={{uri: item.image}}/>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            /> */}
        </View>
    );
};

export default Handpicked;