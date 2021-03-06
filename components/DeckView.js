import React from 'react'
import { StyleSheet,Text,View } from 'react-native'
import { getData } from "../utils/api";

class DeckView extends React.Component{
    render(){
        const deck = this.props.navigation.state.params.entryId;
        const decks = getData();

        return(
            <View style={styles.container}>
              <Text> {decks[deck].title}</Text>
              <Text> {decks[deck].questions.length}</Text>
            </View>
        );
    }
}
export default DeckView;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
}) 