import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={style.Button} onPress={props.onPress}>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            paddingVertical: 16,
            paddingHorizontal: 32,
            fontSize: 16,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  Button: {
    borderRadius: 100,
    marginHorizontal: 32,
    backgroundColor: "#FBFAFF",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  text: {
    alignSelf: "center",
  },
});
