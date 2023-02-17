import React from 'react';
import {View, TouchableOpacity, StyleSheet,Text} from 'react-native';

const CustomButton = (props) =>{
return (
  <View>
    <TouchableOpacity style={style.Button} 
    onPress={props.onPress}>
    <Text style={{color:'black',  fontWeight:'bold'}}>{props.text}</Text>

    </TouchableOpacity>
  </View>

);
}

export default CustomButton;

const style = StyleSheet.create({
  Button: {
    borderRadius: 100,
    marginHorizontal: 32,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#B7DBFD'
  },
})