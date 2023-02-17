import react from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const category = (props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <View style={{ alignItems: "center", padding: 15 }}>
        <Image source={props.image} />
      </View>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default category;

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginTop: 50,
    borderWidth: 0.5,
    borderColor: "#dddd",
    alignItems: "center",
    borderRadius: 16,
    margin: 8,
    elevation: 6,
    backgroundColor: "#FFF",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontSize: 24,
    paddingBottom: 16,
    paddingTop: 16,
  },
});
