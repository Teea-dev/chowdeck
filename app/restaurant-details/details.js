import React from 'react';
import { Stack } from 'expo-router';
import { View, ScrollView,SafeAreaView } from 'react-native';
import { PromoCode } from '../../assets/icons';

function Details({route}) {
    const { name } = route.params;
    return ( 
       <SafeAreaView>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.white, },
                headerShadowVisible: false,
                headerRight: () => (
                    // <PromoCode/>
                    <ScreenHeaderBtn iconUrl={icons.discounted} dimension="60%" />
                ),
                headerLeft: () => (
                    <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
                ),
                headerTitle: "Chicken Republic",
            }}
            />
        <ScrollView>
            <View>
                <Text> {name}Details</Text>
            </View>
        </ScrollView>
       </SafeAreaView>
     );
}

export default Details;