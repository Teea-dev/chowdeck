import React from 'react';
import { View, Text } from 'react-native';
import Search from './_searchPage';
import SearchInput from '../../../components/reusables/form/searchInput';
import SearchTabs from '../../../components/reusables/tab';

const SearchPage = () => {
  return (
    <View>
      <Text>Welcome to the Home Page</Text>
      <SearchInput/>
      <SearchTabs/>
    </View>
  );
};

export default SearchPage;
