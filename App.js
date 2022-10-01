import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [totalGoal, setTotalGoal] = useState(["Dummy 1", "Dummy 2"]);

  function inputGoal(value) {
    setGoalInput(value);
  }

  function addGoal() {
    setTotalGoal((currentTotalGoal) => [...currentTotalGoal, goalInput]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={inputGoal}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoal}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={totalGoal}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={(info) => {
            return (
              <View style={styles.goalView}>
                <Text style={styles.goalText}>{info.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  goalsContainer: {
    flex: 7,
  },
  inputText: {
    borderColor: "#000000",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 5,
  },
  goalView: {
    backgroundColor: "gray",
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
  },
});
