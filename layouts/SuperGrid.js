import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
 
const styles = StyleSheet.create({
  Item: {
    color: "red"
  },
  Grid: {
    backgroundColor: "grey"
  }
})

export default function JustifyContent() {
    return (
        <FlatGrid style={styles.Grid}
          itemDimension={130}
          data={[1,2,3,4,5,6]}
          renderItem={({ item }) => (<Text style={styles.Item}>{item}</Text>)}
        />
    );
}