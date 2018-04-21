import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  FlatList
} from 'react-native';
import { Firebase } from "../api/config.js";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Spending',
  };

  constructor(props) {
    super(props)
    this.state = { items: [{ key: '1'}] }
    const items = Firebase.database().ref('users/' + 'joel');
    items.on('value', (snapshot) => {
      const data = snapshot.val()
      const convertedItems = Object.values(data.items)
      convertedItems.map((item, index) => item.key = index.toString())
      this.setState({ items: convertedItems })
    });
  }

  render() {
    const date = new Date()
    const { items } = this.state
    const total = items.map(item => item.amount)
    const totalAmount = total ? total.reduce((accumulator, currentValue) => accumulator + currentValue) : 0
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={items}
            extraData={this.state}
            renderItem={({ item }) =>
              <View style={styles.card}>
                <View style={styles.cardDate}>
                  <Text>{JSON.stringify(item.date)}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text>{item.desc}</Text>
                  <Text>RM {item.amount}</Text>
                </View>
              </View>} />
        </ScrollView>
        <View style={styles.tabBarStickyBottom}>
          <Text style={{ fontWeight: 'bold' }}>Total</Text>
          <Text style={{ fontWeight: 'bold' }}>RM {totalAmount}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    // paddingTop: 30,
  },
  card: {
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  cardDate: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f5f5f5'
  },
  cardRow: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  tabBarStickyBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});
