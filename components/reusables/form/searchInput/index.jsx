import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Search } from '../../../../assets/icons';
export default function SearchInput() {
  return (
    <View style={styles.container}>
        <Search  size={20} color='#aaa'/>
      {/* <Icon name="search" size={20} color="#aaa" style={styles.icon} /> */}
      <TextInput
        style={styles.input}
        placeholder="Food, drinks, groceries etc."
        placeholderTextColor="#aaa"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
