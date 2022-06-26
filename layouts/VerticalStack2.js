import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
 
const { height } = Dimensions.get('window');
 
const box_count = 3;
const box_height = height / box_count;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  //header
  box1: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  //content
  box2: {
    flex: 10,
    backgroundColor: '#8BC34A'
  },
  //footer
  box3: {
    flex: .5,
    backgroundColor: '#e3aa1a'
  }
});

export default function VerticalStack() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
    );
}