import react from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";

import CustomButton from "../components/CustomButtonWhite";
import ArrowBack from "../components/ArrowBack";

const questions = {
  questions: [
    {
      id: 1,
      question:
        "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      answerChoice: [
        {
          id: 1,
          answer: "A. Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          answer: "B. Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          answer: "C. Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          answer: "D. Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 2,
      question:
        "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      answerChoice: [
        {
          id: 5,
          answer: "A. Lorem ipsum dolor sit amet",
        },
        {
          id: 6,
          answer: "B. Lorem ipsum dolor sit amet",
        },
        {
          id: 7,
          answer: "C. Lorem ipsum dolor sit amet",
        },
        {
          id: 8,
          answer: "D. Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 3,
      question:
        "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      answerChoice: [
        {
          id: 9,
          answer: "A. Lorem ipsum dolor sit amet",
        },
        {
          id: 10,
          answer: "B. Lorem ipsum dolor sit amet",
        },
        {
          id: 11,
          answer: "C. Lorem ipsum dolor sit amet",
        },
        {
          id: 12,
          answer: "D. Lorem ipsum dolor sit amet",
        },
      ],
    },
  ],
};

const quizpage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#9D0000",
        flex: 1,
        flexDirection: "column",
        alignContent: "flex-start",
        paddingBottom: 16,
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <ArrowBack onPress={() => navigation.navigate("categorypage")} />
      </View>
      <FlatList
        ListFooterComponent={<CustomButton text={"Selesai"} />}
        data={questions.questions}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text style={styles.question}>{item.question}</Text>
            <FlatList
              data={item.answerChoice}
              renderItem={({ item }) => (
                <View style={styles.choicesBox}>
                  <Text style={styles.ansChoices}>{item.answer}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};
export default quizpage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 52,
    margin: 16,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 16,
    margin: 16,
    padding: 16,
  },
  question: {
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    fontSize: 20,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  ansChoices: {
    textAlign: "left",
    color: "black",
    fontSize: 16,
    padding: 16,
  },
  choicesBox: {
    flex: 1,
    borderColor: "black",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
  },
  header: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 16,
    alignItems: "flex-start",
  },
});
