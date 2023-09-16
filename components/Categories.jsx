import React from 'react';
import {View,Text,FlatList,StyleSheet,Image,Pressable} from 'react-native';

const Categories = ({navigation}) => {
    return (
        <View >
            <Text>
                Categories
            </Text>
          
            {/* <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <Pressable onPress={() => navigation.navigate('Details',{item})}>
                        <Image style={styles.image} source={{uri: item.image}}/>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            /> */}
        </View>
    );
};

export default Categories;