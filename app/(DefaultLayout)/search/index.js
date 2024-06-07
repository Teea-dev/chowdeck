import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router'; 
import SearchInput from '../../../components/reusables/form/searchInput';
import SearchTabs from '../../../components/reusables/tab';

const SearchPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, 
        }}
      />
      <View style={styles.container}>
        <SearchInput />
        <SearchTabs />
      </View>
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
});
