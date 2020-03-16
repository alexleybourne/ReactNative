import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};


Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
  header: {
    height: 100, 
    padding: 15,
    backgroundColor: '#007CFF'
  },
  text: {
      marginTop: 40,
      color: 'white',
      fontSize: 23,
      fontWeight: 'bold',
      textAlign: 'center'
  }
})

export default Header;
