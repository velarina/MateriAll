import * as React from "react";
import { Image, TouchableOpacity } from "react-native";

const ArrowBack = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={require("../assets/arrow_back.png")} />
    </TouchableOpacity>
  );
};
export default ArrowBack;
