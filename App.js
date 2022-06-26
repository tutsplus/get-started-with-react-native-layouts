import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Import available layouts
import VerticalStack from "./layouts/VerticalStack";
import VerticalStack2 from "./layouts/VerticalStack2";
import HorizontalStack from "./layouts/HorizontalStack";
import JustifyContent from "./layouts/JustifyContent";
import AlignItems from "./layouts/AlignItems";
import Grid from "./layouts/Grid";
import Absolute from "./layouts/Absolute";
import HeaderFooter from "./layouts/HeaderFooter";
import SuperGrid from "./layouts/SuperGrid"

export default function App() {
  return (
    <SuperGrid/>
  );
}