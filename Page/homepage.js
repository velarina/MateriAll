import react from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import Category from "../components/Category";

const categorypage = ({ navigation }) => {
  const category = [
    {
      id: 1,
      name: "Karate",
      image: require("../assets/karate.png"),
    },
    {
      id: 1,
      name: "Kungfu",
      image: require("../assets/kungfu.png"),
    },
    {
      id: 1,
      name: "Capoeira",
      image: require("../assets/capoeira.png"),
    },
    {
      id: 1,
      name: "Judo",
      image: require("../assets/judo.png"),
    },
    {
      id: 1,
      name: "Boxing",
      image: require("../assets/boxing.png"),
    },
    {
      id: 1,
      name: "Taekwondo",
      image: require("../assets/taekwondo.png"),
    },
    {
      id: 1,
      name: "Krav Maga",
      image: require("../assets/kravmaga.png"),
    },
    {
      id: 1,
      name: "Muay Thai",
      image: require("../assets/muaythai.png"),
    },
    {
      id: 1,
      name: "Gulat",
      image: require("../assets/gulat.png"),
    },
    {
      id: 1,
      name: "Pencak Silat",
      image: require("../assets/pencaksilat.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apa Yang Anda Ingin Ketahui?</Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          horizontal={true}
          data={category}
          renderItem={({ item }) => (
            <Category
              title={item.name}
              image={item.image}
              onPress={() => navigation.navigate("categorypage")}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default categorypage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFF",
    paddingTop: 160,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontSize: 24,
    paddingBottom: 10,
    paddingTop: 24,
  },
});
