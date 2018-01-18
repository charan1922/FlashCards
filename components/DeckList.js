import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getData } from "../utils/api";
import { connect } from 'react-redux'
import {getDecks} from '../utils/api'
import {receiveDecks} from '../actions'

class DeckList extends React.Component {
  componentDidMount(){
    getDecks()
    .then(decks => this.props.receiveAllDecks(decks))
  }
  
  render() {
    const {decks} = this.props
    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { title, questions } = decks[deck];
          return (
            <View key={deck}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
            <Button 
            onPress={() => this.props.navigation.navigate('DeckView',{entryId:deck}) }
            title="View Deck" >
            </Button>
            </View>
          );
        })}
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapDispatchToProps(dispatch){
  return {
    receiveAllDecks : (decks) => dispatch(receiveDecks(decks))
  }
}

function mapStateToProps(decks){
   return {
     decks
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
