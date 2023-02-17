import react from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

import CustomButton from "../components/CustomButtonRed";

const landingpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
          fontSize: 36,
          paddingBottom: 10,
        }}
      >
        MateriAll
      </Text>

      <Text
        style={{
          textAlign: "center",
          color: "black",
          paddingTop: 10,
          paddingBottom: 100,
        }}
      >
        “berani dan jelajahi olahraga bela diri dengan senang”
      </Text>

      <Image source={require("../assets/person.png")} style={styles.person} />

      <View style={{ paddingTop: 50 }}>
        <CustomButton
          onPress={() => navigation.navigate("homepage")}
          text="Ayo Mulai"
        />
      </View>
    </View>
  );
};
export default landingpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFF",
    padding: 6,
    flexDirection: "column",
    justifyContent: "center",
  },
  person: {
    height: 280,
    width: 200,
    alignSelf: "center",
  },
});
