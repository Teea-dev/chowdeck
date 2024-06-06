// import React from 'react';
// import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import { COLORS } from '../../../constants';
// import Handpicked from '../_local-components/Handpicked';
// import Featured from '../_local-components/Featured';
// import Allrestaurants from '../_local-components/Allrestaurants';
// import ScreenHeaderBtn from '../_local-components/header/ScreenHeaderBtn';
// import LocationSearch from '../_local-components/locationSearch/locationSearch';
// import Categories from '../_local-components/Categories';
// import Footer from '../_local-components/footer/Footer';
// import { PromoCode, Filter } from '../../../assets/icons';

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <Categories />
//         <Handpicked />
//         <Featured />
//         <Allrestaurants />
//       </ScrollView>
//       {/* <Footer /> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 960,
//     marginHorizontal: 'auto',
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 36,
//     color: '#38434D',
//   },
// });


import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};

export default HomeScreen;
