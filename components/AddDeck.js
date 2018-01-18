import React from "react";
import { StyleSheet, View, Text } from "react-native";

class AddDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from the AddDeck Component</Text>
      </View>
    );
  }
}

export default AddDeck;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})