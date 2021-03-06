import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { Button } from 'react-native-elements'

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      tabBarLabel: 'Review',
      headerRight: (
        <Button
          title="Settings"
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
          onPress={() => navigation.navigate('settings')}
        />
      ),
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }
  
  render() {
    return (
      <View>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    )
  }
}

export default ReviewScreen
