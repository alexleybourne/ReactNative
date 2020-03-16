import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>  
        <Text style={styles.text}>{item.text}</Text>
        <Icon 
            name="remove" 
            size={20} color="black" 
            onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = {
    title: 'List Item'
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15, 
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'

  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ListItem;
