import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconRow}>
        <AntDesign name="stepforward" size={24} color="pink" />
        <AntDesign name="rightcircle" size={24} color="blue" />
        <AntDesign name="caretup" size={24} color="grey" />
        <AntDesign name="downcircle" size={24} color="green" />
        <AntDesign name="rightcircleo" size={24} color="orange" />
        <AntDesign name="downcircleo" size={24} color="maroon" />
        <AntDesign name="verticleright" size={24} color="black" />
        <AntDesign name="arrowsalt" size={24} color="yellow" />
        <AntDesign name="arrowdown" size={24} color="red" />
        <AntDesign name="left" size={24} color="purple" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
});

export default IconScreen;