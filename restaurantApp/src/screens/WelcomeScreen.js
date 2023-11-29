import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to my Work</Text>
      <View style={styles.logoout}>
        <Image />
      </View>
    </View>
  )
}

export default WelcomeScreen