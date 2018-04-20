import React from 'react';
import { ScrollView, StyleSheet, Text, Platform, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Item',
  };

  state = { amount: '', desc: '' }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
            <Text style={{ fontSize: 18 }}>Price</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>RM </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(amount) => this.setState({ amount })}
                value={this.state.text}
                keyboardType='numeric'
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                style={[styles.textInput, {flex: 1}]}
                onChangeText={(desc) => this.setState({ desc })}
                value={this.state.text}
                keyboardType='numeric'
                placeholder="Description"
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => alert('pressed')} style={styles.tabBarStickyBottom}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  textInput: {
    width: 80,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10
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
    justifyContent: 'center',
    padding: 10,
  }
});
