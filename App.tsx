import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const colors = {
  dark: {
    'bg-primary': '#0C0E12',
    'bg-secondary': '#22262F',
    'text-primary': '#F7F7F7',
  },
  light: {
    'bg-primary': '#FFFFFF',
    'bg-secondary': '#F5F5F5',
    'text-primary': '#181D27',
  },
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colors.light['bg-primary'],
  },
  item: {
    backgroundColor: colors.light['bg-secondary'],
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 32,
    color: colors.light['text-primary'],
  },
});

export default App;
